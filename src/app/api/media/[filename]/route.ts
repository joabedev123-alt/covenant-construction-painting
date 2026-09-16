import { dataDir } from "@/lib/cms/store";
import { readFile } from "node:fs/promises";
import path from "node:path";
export const runtime = "nodejs";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> },
) {
  const { filename } = await params;
  if (!/^[\da-f-]{36}\.(jpg|png|webp|gif)$/.test(filename))
    return new Response("Not found", { status: 404 });
  try {
    const data = await readFile(path.join(dataDir, "uploads", filename));
    const types: Record<string, string> = {
      jpg: "image/jpeg",
      png: "image/png",
      webp: "image/webp",
      gif: "image/gif",
    };
    return new Response(data, {
      headers: {
        "Content-Type": types[filename.split(".").pop()!],
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
