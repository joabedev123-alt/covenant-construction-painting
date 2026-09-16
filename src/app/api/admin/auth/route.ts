import {
  authenticated,
  canSetup,
  checkPassword,
  createCredentials,
  endSession,
  getCredentials,
  rateLimit,
  sameOrigin,
  startSession,
} from "@/lib/cms/auth";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET() {
  return Response.json(
    {
      initialized: !!(await getCredentials()),
      authenticated: await authenticated(),
      setupTokenRequired: !!process.env.ADMIN_SETUP_TOKEN,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
export async function POST(request: Request) {
  if (!sameOrigin(request))
    return Response.json({ error: "Origem inválida." }, { status: 403 });
  try {
    const { action, password, token } = await request.json();
    if (action === "logout") {
      await endSession();
      return Response.json({ ok: true });
    }
    if (!rateLimit(request))
      return Response.json(
        { error: "Muitas tentativas. Aguarde um minuto." },
        { status: 429 },
      );
    if (typeof password !== "string" || password.length > 256)
      return Response.json({ error: "Senha inválida." }, { status: 400 });
    if (action === "setup") {
      if (!canSetup(request, token))
        return Response.json(
          { error: "Use o token de configuração do servidor." },
          { status: 403 },
        );
      if (password.length < 12)
        return Response.json(
          { error: "Use uma senha de pelo menos 12 caracteres." },
          { status: 400 },
        );
      await createCredentials(password);
    } else if (action !== "login" || !(await checkPassword(password)))
      return Response.json({ error: "Senha incorreta." }, { status: 401 });
    await startSession();
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof SyntaxError
            ? "Requisição inválida."
            : "Não foi possível configurar o acesso.",
      },
      { status: 400 },
    );
  }
}
