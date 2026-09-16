import { authenticated, sameOrigin } from "@/lib/cms/auth";
import { dataDir } from "@/lib/cms/store";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
async function existing(
  dir: string,
  prefix: string,
): Promise<{ url: string; name: string }[]> {
  try {
    const items = await readdir(dir, { withFileTypes: true });
    const groups = await Promise.all(
      items.map(async (item) =>
        item.isDirectory()
          ? existing(
              path.join(dir, item.name),
              `${prefix}/${encodeURIComponent(item.name)}`,
            )
          : /\.(jpe?g|png|webp|gif)$/i.test(item.name)
            ? [
                {
                  url: `${prefix}/${encodeURIComponent(item.name)}`,
                  name: item.name,
                },
              ]
            : [],
      ),
    );
    return groups.flat();
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}
export async function GET() {
  if (!(await authenticated()))
    return Response.json({ error: "Acesso negado." }, { status: 401 });
  return Response.json(
    {
      images: [
        ...(await existing(path.join(dataDir, "uploads"), "/api/media")),
        ...(await existing(
          path.join(process.cwd(), "public/images"),
          "/images",
        )),
      ],
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
export async function POST(request: Request) {
  if (!sameOrigin(request) || !(await authenticated()))
    return Response.json({ error: "Acesso negado." }, { status: 403 });
  if (Number(request.headers.get("content-length")) > 10_500_000)
    return Response.json(
      { error: "Limite de 10 MB por imagem." },
      { status: 413 },
    );
  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File) || !file.size || file.size > 10_000_000)
      return Response.json(
        { error: "Envie uma imagem de até 10 MB." },
        { status: 400 },
      );
    const data = Buffer.from(await file.arrayBuffer());
    let ext = "";
    if (data.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff])))
      ext = "jpg";
    else if (
      data.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
    )
      ext = "png";
    else if (["GIF87a", "GIF89a"].includes(data.subarray(0, 6).toString()))
      ext = "gif";
    else if (
      data.subarray(0, 4).toString() === "RIFF" &&
      data.subarray(8, 12).toString() === "WEBP"
    )
      ext = "webp";
    if (!ext)
      return Response.json(
        { error: "Formato inválido. Use JPG, PNG, WebP ou GIF." },
        { status: 400 },
      );
    const name = `${randomUUID()}.${ext}`;
    await mkdir(path.join(dataDir, "uploads"), { recursive: true });
    await writeFile(path.join(dataDir, "uploads", name), data);
    return Response.json({ url: `/api/media/${name}`, name: file.name });
  } catch {
    return Response.json(
      { error: "Não foi possível enviar a imagem." },
      { status: 400 },
    );
  }
}
