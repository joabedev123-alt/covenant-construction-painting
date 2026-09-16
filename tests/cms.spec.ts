import { test, expect } from "@playwright/test";
test("admin authentication, private drafts, publication, sections, media and recovery", async ({
  page,
  browser,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  expect((await request.get("/api/admin/content")).status()).toBe(401);
  expect((await request.get("/api/admin/media")).status()).toBe(401);
  await page.goto("/admin");
  await expect(
    page.getByRole("heading", { name: "Configure seu acesso." }),
  ).toBeVisible();
  await page
    .getByLabel("CRIAR SENHA", { exact: true })
    .fill("Temporary-CMS-test-8294");
  await page.getByLabel("CONFIRMAR SENHA").fill("Temporary-CMS-test-8294");
  await page.getByRole("button", { name: "Criar acesso e entrar" }).click();
  await expect(
    page.getByRole("heading", { name: "Edite cada detalhe." }),
  ).toBeVisible();
  const preview = page.frameLocator("iframe");
  await expect(page.locator(".cms-frame-loading")).not.toBeVisible({
    timeout: 30000,
  });
  await preview
    .locator("h1")
    .evaluate((el) =>
      el.scrollIntoView({ block: "center", behavior: "instant" }),
    );
  await preview
    .locator("h1 [data-cms-id]")
    .first()
    .click({ position: { x: 10, y: 10 } });
  await expect(
    page.getByRole("heading", { name: "Editar texto" }),
  ).toBeVisible();
  await page
    .locator(".cms-properties textarea")
    .fill("Beautiful homes begin here.");
  await expect(preview.locator("h1")).toContainText(
    "Beautiful homes begin here.",
  );
  await page.getByRole("button", { name: "Salvar rascunho" }).click();
  await expect(page.getByRole("status")).toContainText("Rascunho salvo.");
  const anonymous = await browser.newContext();
  const publicPage = await anonymous.newPage();
  await publicPage.goto("/?cmsPreview=1");
  await expect(publicPage.locator("h1")).toContainText("Built With Purpose.");
  await expect(publicPage.locator("h1")).not.toContainText(
    "Beautiful homes begin here.",
  );
  const publish = async () => {
    await page.getByRole("button", { name: "Publicar", exact: true }).click();
    await page.getByRole("button", { name: "Publicar agora" }).click();
    await expect(page.getByRole("status")).toContainText(
      "Alterações publicadas.",
    );
  };
  await publish();
  await publicPage.reload();
  await expect(publicPage.locator("h1")).toContainText(
    "Beautiful homes begin here.",
  );
  // Editing an asset updates the actual rendered image and its accessibility description.
  await preview.locator("img[data-cms-id]").first().click();
  await expect(
    page.getByRole("heading", { name: "Editar imagem" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Trocar imagem", exact: true })
    .click();
  await expect(
    page.getByRole("dialog", { name: "Escolher imagem" }),
  ).toBeVisible();
  await page.locator("input[type=file]").setInputFiles({
    name: "test.png",
    mimeType: "image/png",
    buffer: Buffer.from(
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aZ1sAAAAASUVORK5CYII=",
      "base64",
    ),
  });
  await expect(
    page.getByRole("dialog", { name: "Escolher imagem" }),
  ).not.toBeVisible();
  await page
    .getByLabel("DESCRIÇÃO PARA ACESSIBILIDADE")
    .fill("Uploaded company logo");
  await expect(
    preview.locator('img[alt="Uploaded company logo"]').first(),
  ).toHaveAttribute("src", /\/api\/media\//);
  const uploaded = await preview
    .locator('img[alt="Uploaded company logo"]')
    .first()
    .getAttribute("src");
  expect((await request.get(uploaded!)).status()).toBe(200);
  // Existing sections can be reordered and hidden; new sections can be added.
  await page.getByRole("button", { name: /^Seções/ }).click();
  const firstId = await preview
    .locator("[data-cms-block]")
    .first()
    .getAttribute("data-cms-block");
  await page
    .locator(".cms-section-row")
    .first()
    .getByRole("button", { name: /Mover .* para baixo/ })
    .click();
  await expect(preview.locator("[data-cms-block]").first()).not.toHaveAttribute(
    "data-cms-block",
    firstId!,
  );
  const firstLabel = await page
    .locator(".cms-section-row")
    .first()
    .locator(".cms-section-title")
    .innerText();
  await page
    .locator(".cms-section-row")
    .first()
    .getByRole("button", { name: /^Ocultar/ })
    .click();
  await page.getByRole("button", { name: "Adicionar seção" }).click();
  await page
    .getByLabel("TÍTULO", { exact: true })
    .fill("A new service from the dashboard");
  await page.getByLabel("TEXTO", { exact: true }).fill("New section content.");
  await publish();
  await publicPage.reload();
  await expect(
    publicPage.getByRole("heading", {
      name: "A new service from the dashboard",
    }),
  ).toBeVisible();
  await expect(
    publicPage.locator('[data-cms-block][data-hidden="true"]'),
  ).toBeHidden();
  // The API rejects script URLs even if someone bypasses the editor.
  const content = await (await page.request.get("/api/admin/content")).json();
  const malicious = structuredClone(content.draft);
  malicious.fields["link-test"] = "javascript:alert(1)";
  expect(
    (
      await page.request.post("/api/admin/content", {
        headers: { origin: "http://localhost:3100" },
        data: {
          action: "save",
          revision: content.revision,
          content: malicious,
        },
      })
    ).status(),
  ).toBe(400);
  expect(
    (
      await page.request.post("/api/admin/content", {
        headers: { origin: "https://untrusted.example" },
        data: {
          action: "save",
          revision: content.revision,
          content: content.draft,
        },
      })
    ).status(),
  ).toBe(403);
  expect(
    (
      await page.request.post("/api/admin/content", {
        headers: { origin: "http://localhost:3100" },
        data: {
          action: "save",
          revision: content.revision - 1,
          content: content.draft,
        },
      })
    ).status(),
  ).toBe(409);
  const badFile = await page.request.post("/api/admin/media", {
    headers: { origin: "http://localhost:3100" },
    multipart: {
      file: {
        name: "attack.png",
        mimeType: "image/png",
        buffer: Buffer.from("<script>alert(1)</script>"),
      },
    },
  });
  expect(badFile.status()).toBe(400);
  // Previous publications are restored to a private draft before publishing.
  await page.getByRole("button", { name: "Histórico de versões" }).click();
  await page
    .getByRole("button", { name: "Recuperar no rascunho" })
    .last()
    .click();
  await expect(page.getByRole("status")).toContainText(
    "Versão recuperada no rascunho.",
  );
  await publicPage.reload();
  await expect(
    publicPage.getByRole("heading", {
      name: "A new service from the dashboard",
    }),
  ).toBeVisible();
  await publish();
  await publicPage.reload();
  await expect(publicPage.locator("h1")).toContainText("Built With Purpose.");
  await expect(
    publicPage.getByRole("heading", {
      name: "A new service from the dashboard",
    }),
  ).not.toBeVisible();
  // Shared contact settings affect the site links and server-rendered metadata.
  await page.getByRole("button", { name: "Configurações do site" }).click();
  await page.getByLabel("TELEFONE", { exact: true }).fill("555-123-4567");
  await page.getByLabel("E-MAIL", { exact: true }).fill("owner@example.com");
  await page.getByLabel("TÍTULO PRINCIPAL").fill("Covenant Custom Site Title");
  await publish();
  await publicPage.reload();
  await expect(publicPage).toHaveTitle("Covenant Custom Site Title");
  await expect(
    publicPage.locator('a[href="tel:5551234567"]').first(),
  ).toBeVisible();
  await expect(
    publicPage.locator('a[href^="mailto:owner@example.com"]').first(),
  ).toBeVisible();
  await page.getByRole("button", { name: "Projetos e galeria" }).click();
  await page.getByRole("button", { name: "Adicionar projeto" }).click();
  await page.getByLabel("TÍTULO DO PROJETO").fill("Project created in the CMS");
  await page
    .getByLabel("RESUMO", { exact: true })
    .fill("A project managed by the client.");
  await publish();
  await publicPage.goto("/projects");
  await expect(
    publicPage.getByRole("heading", {
      name: "Project created in the CMS",
      exact: true,
    }),
  ).toBeVisible();
  await publicPage.locator('[data-project-id="project-kitchen-01"]').click();
  await expect(publicPage.getByRole("dialog")).toBeVisible();
  await expect(publicPage.locator('img[alt$="— before"]')).toBeVisible();
  await expect(publicPage.locator('img[alt$="— after"]')).toBeVisible();
  await publicPage.getByRole("button", { name: "Close modal" }).click();
  await page.getByRole("button", { name: "Páginas e conteúdo" }).click();
  await expect(page.locator(".cms-frame-loading")).not.toBeVisible({
    timeout: 30000,
  });
  await page.setViewportSize({ width: 1500, height: 1000 });
  await page.screenshot({
    path: "test-results/admin-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: "test-results/admin-mobile.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const route of [
    "/about",
    "/services",
    "/services/kitchen-remodeling",
    "/services/bathroom-remodeling",
    "/services/painting",
    "/projects",
    "/before-after",
    "/contact",
  ]) {
    await publicPage.goto(route);
    await expect(publicPage.locator("h1")).toBeVisible();
  }
  await page.getByRole("button", { name: "Sair do painel" }).click();
  await expect(
    page.getByRole("heading", { name: "Bem-vindo de volta." }),
  ).toBeVisible();
  expect((await page.request.get("/api/admin/content")).status()).toBe(401);
  await page
    .getByLabel("SENHA", { exact: true })
    .fill("Temporary-CMS-test-8294");
  await page.getByRole("button", { name: "Entrar no painel" }).click();
  await expect(
    page.getByRole("heading", { name: "Edite cada detalhe." }),
  ).toBeVisible();
  expect(errors).toEqual([]);
  await anonymous.close();
});
