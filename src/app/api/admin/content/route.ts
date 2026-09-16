import { authenticated, sameOrigin } from "@/lib/cms/auth";
import {
  exclusive,
  readStore,
  validateContent,
  writeJson,
} from "@/lib/cms/store";
import { randomUUID } from "node:crypto";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET() {
  if (!(await authenticated()))
    return Response.json({ error: "Entre no painel." }, { status: 401 });
  return Response.json(await readStore(), {
    headers: { "Cache-Control": "no-store" },
  });
}
export async function POST(request: Request) {
  if (!sameOrigin(request) || !(await authenticated()))
    return Response.json(
      { error: "Acesso negado. Entre novamente." },
      { status: 403 },
    );
  if (Number(request.headers.get("content-length")) > 2_000_000)
    return Response.json({ error: "Conteúdo muito grande." }, { status: 413 });
  try {
    const raw = await request.text();
    if (raw.length > 2_000_000)
      return Response.json(
        { error: "Conteúdo muito grande." },
        { status: 413 },
      );
    const body = JSON.parse(raw);
    return await exclusive(async () => {
      const store = await readStore();
      if (body.revision !== store.revision)
        return Response.json(
          {
            error:
              "O conteúdo foi atualizado em outra aba. Recarregue o painel antes de salvar.",
          },
          { status: 409 },
        );
      if (body.action === "save" || body.action === "publish") {
        store.draft = validateContent(body.content);
        if (body.action === "publish") {
          store.history.unshift({
            id: randomUUID(),
            date: store.publishedAt || new Date().toISOString(),
            content: store.published,
          });
          store.history = store.history.slice(0, 15);
          store.published = structuredClone(store.draft);
          store.publishedAt = new Date().toISOString();
        }
      } else if (body.action === "restore") {
        const version = store.history.find((v) => v.id === body.version);
        if (!version)
          return Response.json(
            { error: "Versão não encontrada." },
            { status: 404 },
          );
        store.draft = structuredClone(version.content);
      } else if (body.action === "discard")
        store.draft = structuredClone(store.published);
      else return Response.json({ error: "Ação inválida." }, { status: 400 });
      store.revision++;
      await writeJson("content.json", store);
      return Response.json(store);
    });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error ? error.message : "Não foi possível salvar.",
      },
      { status: 400 },
    );
  }
}
