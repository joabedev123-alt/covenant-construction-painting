import "server-only";
import { cookies } from "next/headers";
import {
  randomBytes,
  scryptSync,
  timingSafeEqual,
  createHmac,
} from "node:crypto";
import { readJson, writeJson, exclusive } from "./store";
type Credentials = { salt: string; hash: string; secret: string };
const COOKIE = "covenant-admin";
export const getCredentials = () => readJson<Credentials>("admin.json");
export async function createCredentials(password: string) {
  return exclusive(async () => {
    if (await getCredentials())
      throw new Error("O administrador já foi configurado.");
    const salt = randomBytes(32).toString("hex");
    await writeJson("admin.json", {
      salt,
      hash: scryptSync(password, salt, 64).toString("hex"),
      secret: randomBytes(48).toString("hex"),
    });
  });
}
export async function checkPassword(password: string) {
  const c = await getCredentials();
  return (
    !!c &&
    timingSafeEqual(
      Buffer.from(c.hash, "hex"),
      scryptSync(password, c.salt, 64),
    )
  );
}
export async function authenticated() {
  const c = await getCredentials();
  const token = (await cookies()).get(COOKIE)?.value;
  if (!c || !token) return false;
  const [expires, signature] = token.split(".");
  if (!expires || !signature || Number(expires) < Date.now()) return false;
  const expected = createHmac("sha256", c.secret).update(expires).digest("hex");
  return (
    signature.length === expected.length &&
    timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  );
}
export async function startSession() {
  const c = await getCredentials();
  if (!c) throw new Error("Administrador não configurado.");
  const expires = String(Date.now() + 8 * 3600 * 1000);
  const sig = createHmac("sha256", c.secret).update(expires).digest("hex");
  (await cookies()).set(COOKIE, `${expires}.${sig}`, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 8 * 3600,
  });
}
export async function endSession() {
  (await cookies()).delete(COOKIE);
}
export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !!origin && origin === new URL(request.url).origin;
}
export function canSetup(request: Request, token?: string) {
  if (process.env.ADMIN_SETUP_TOKEN)
    return token === process.env.ADMIN_SETUP_TOKEN;
  return (
    process.env.NODE_ENV !== "production" &&
    ["localhost", "127.0.0.1", "[::1]"].includes(new URL(request.url).hostname)
  );
}
const attempts = new Map<string, { count: number; reset: number }>();
export function rateLimit(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const now = Date.now();
  for (const [key, value] of attempts)
    if (value.reset < now) attempts.delete(key);
  const entry = attempts.get(ip) || { count: 0, reset: now + 60000 };
  attempts.set(ip, entry);
  return ++entry.count <= 5;
}
