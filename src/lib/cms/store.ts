import "server-only";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import {
  ContentStore,
  EMPTY_CONTENT,
  SiteContent,
  safeUrl,
  PAGE_LIST,
} from "./types";
export const dataDir = path.resolve(
  process.env.CMS_DATA_DIR || path.join(process.cwd(), "storage"),
);
export async function readJson<T>(file: string): Promise<T | null> {
  try {
    return JSON.parse(await readFile(path.join(dataDir, file), "utf8"));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}
export async function writeJson(file: string, data: unknown) {
  await mkdir(dataDir, { recursive: true });
  const tmp = path.join(dataDir, `${file}.${randomUUID()}.tmp`);
  await writeFile(tmp, JSON.stringify(data, null, 2), { mode: 0o600 });
  await rename(tmp, path.join(dataDir, file));
}
export async function readStore(): Promise<ContentStore> {
  return (
    (await readJson<ContentStore>("content.json")) || {
      revision: 0,
      draft: structuredClone(EMPTY_CONTENT),
      published: structuredClone(EMPTY_CONTENT),
      publishedAt: null,
      history: [],
    }
  );
}
let queue = Promise.resolve();
export function exclusive<T>(operation: () => Promise<T>): Promise<T> {
  const next = queue.then(operation, operation);
  queue = next.then(
    () => undefined,
    () => undefined,
  );
  return next;
}
export function validateContent(input: unknown): SiteContent {
  if (!input || typeof input !== "object")
    throw new Error("Conteúdo inválido.");
  const c = input as SiteContent;
  const plain = (v: unknown): v is Record<string, unknown> =>
    !!v && typeof v === "object" && !Array.isArray(v);
  const str = (v: unknown, max = 20000): v is string =>
    typeof v === "string" && v.length <= max;
  if (
    !plain(c.fields) ||
    !plain(c.pages) ||
    !plain(c.settings) ||
    Object.keys(c.fields).length > 5000
  )
    throw new Error("Estrutura de conteúdo inválida.");
  for (const [key, value] of Object.entries(c.fields)) {
    if (
      !str(key, 200) ||
      ["__proto__", "constructor", "prototype"].includes(key)
    )
      throw new Error("Campo inválido.");
    if (typeof value === "string") {
      if (!str(value)) throw new Error("Texto muito longo.");
      if (key.startsWith("link-") && !safeUrl(value))
        throw new Error(
          "Link inválido. Use /página, https://, tel: ou mailto:.",
        );
    } else if (
      !plain(value) ||
      !str(value.src, 2000) ||
      !value.src ||
      !safeUrl(value.src, true) ||
      !str(value.alt, 1000)
    )
      throw new Error("Imagem inválida.");
  }
  if (!Array.isArray(c.projects) || c.projects.length > 200)
    throw new Error("Lista de projetos inválida.");
  const projectIds = new Set<string>();
  for (const p of c.projects) {
    if (
      !plain(p) ||
      !str(p.id, 100) ||
      !/^[\w-]+$/.test(p.id) ||
      projectIds.has(p.id) ||
      !str(p.title, 500) ||
      !str(p.categoryLabel, 300) ||
      !["kitchens", "bathrooms", "painting", "other"].includes(p.category) ||
      !str(p.image, 2000) ||
      !p.image ||
      !safeUrl(p.image, true) ||
      !str(p.summary) ||
      !str(p.description) ||
      !Array.isArray(p.highlights) ||
      p.highlights.length > 30 ||
      p.highlights.some((v) => !str(v, 1000))
    )
      throw new Error("Projeto inválido. Confira os textos e a imagem.");
    if (
      [p.beforeImage, p.afterImage].some(
        (v) => v !== undefined && (!str(v, 2000) || !safeUrl(v, true)),
      )
    )
      throw new Error("Imagem de antes/depois inválida.");
    projectIds.add(p.id);
  }
  const settings = EMPTY_CONTENT.settings;
  for (const key of Object.keys(settings) as (keyof typeof settings)[])
    if (!str(c.settings[key], key === "description" ? 2000 : 300))
      throw new Error("Configuração inválida.");
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.settings.email) ||
    !/^[+\d() .-]{5,40}$/.test(c.settings.phone)
  )
    throw new Error("Informe um telefone e e-mail válidos.");
  if (
    !/^#[\da-f]{6}$/i.test(c.settings.navy) ||
    !/^#[\da-f]{6}$/i.test(c.settings.gold)
  )
    throw new Error("Cor inválida.");
  for (const [key, page] of Object.entries(c.pages)) {
    if (
      !PAGE_LIST.some((p) => p.path === key) ||
      !plain(page) ||
      !Array.isArray(page.order) ||
      !Array.isArray(page.hidden) ||
      !Array.isArray(page.blocks)
    )
      throw new Error("Página inválida.");
    if (
      page.order.length > 100 ||
      page.hidden.length > 100 ||
      page.blocks.length > 30 ||
      [...page.order, ...page.hidden].some((v) => !str(v, 200))
    )
      throw new Error("Limite de seções excedido.");
    const ids = new Set<string>();
    for (const b of page.blocks) {
      if (
        !plain(b) ||
        !str(b.id, 100) ||
        !/^custom-[\w-]+$/.test(b.id) ||
        ids.has(b.id) ||
        !str(b.title, 500) ||
        !str(b.text) ||
        !str(b.image, 2000) ||
        !safeUrl(b.image, true) ||
        !str(b.button, 200) ||
        !str(b.href, 2000) ||
        !safeUrl(b.href) ||
        !["light", "dark"].includes(b.theme)
      )
        throw new Error("Nova seção inválida.");
      ids.add(b.id);
    }
  }
  return JSON.parse(JSON.stringify(c));
}
