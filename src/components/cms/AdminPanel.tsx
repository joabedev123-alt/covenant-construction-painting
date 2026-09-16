"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Check,
  ChevronRight,
  ExternalLink,
  Eye,
  EyeOff,
  FileText,
  Globe,
  History,
  ImageIcon,
  LayoutDashboard,
  Loader2,
  LockKeyhole,
  LogOut,
  Menu,
  Monitor,
  MousePointer2,
  Plus,
  Save,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import {
  ContentStore,
  CustomBlock,
  EMPTY_CONTENT,
  Field,
  ImageValue,
  PAGE_LIST,
  SiteContent,
} from "@/lib/cms/types";
import type { Project } from "@/data/projects";
import "./admin.css";
type Media = { url: string; name: string };
type Group = { id: string; label: string };
type Tab = "pages" | "projects" | "media" | "settings" | "history";
async function api(url: string, body?: unknown) {
  const response = await fetch(
    url,
    body instanceof FormData
      ? { method: "POST", body }
      : body
        ? {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        : { cache: "no-store" },
  );
  const data = await response.json();
  if (!response.ok)
    throw new Error(data.error || "Não foi possível concluir a operação.");
  return data;
}
const date = (value: string) =>
  new Date(value).toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });
export function AdminPanel({
  loggedIn,
  initialized,
  tokenRequired,
  initialStore,
}: {
  loggedIn: boolean;
  initialized: boolean;
  tokenRequired: boolean;
  initialStore: ContentStore | null;
}) {
  const [logged, setLogged] = useState(loggedIn);
  const [configured, setConfigured] = useState(initialized);
  const [store, setStore] = useState(initialStore);
  const [draft, setDraft] = useState<SiteContent>(
    initialStore?.draft || structuredClone(EMPTY_CONTENT),
  );
  const [tab, setTab] = useState<Tab>("pages");
  const [page, setPage] = useState("/");
  const [fields, setFields] = useState<Field[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [group, setGroup] = useState("all");
  const [filter, setFilter] = useState("");
  const [media, setMedia] = useState<Media[]>([]);
  const [mediaFilter, setMediaFilter] = useState("");
  const [editingProject, setEditingProject] = useState<string | null>(null);
  const [picker, setPicker] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [mobile, setMobile] = useState(false);
  const [nav, setNav] = useState(false);
  const [ready, setReady] = useState(false);
  const [publishDialog, setPublishDialog] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  const upload = useRef<HTMLInputElement>(null);
  const draftRef = useRef(draft);
  draftRef.current = draft;
  const dirty =
    !!store && JSON.stringify(store.draft) !== JSON.stringify(draft);
  const unpublished =
    !!store && JSON.stringify(store.published) !== JSON.stringify(draft);
  const currentPage = PAGE_LIST.find((p) => p.path === page)!;
  const selectedField = fields.find((f) => f.id === selected);
  const config = draft.pages[page] || { order: [], hidden: [], blocks: [] };
  const selectedBlock = config.blocks.find((b) => b.id === selected);
  const sendContent = useCallback(
    () =>
      frame.current?.contentWindow?.postMessage(
        { type: "cms:content", content: draftRef.current },
        window.location.origin,
      ),
    [],
  );
  useEffect(() => {
    if (ready) sendContent();
  }, [draft, ready, sendContent]);
  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        event.source !== frame.current?.contentWindow
      )
        return;
      if (event.data?.type === "cms:ready") sendContent();
      if (event.data?.type === "cms:activated") setReady(true);
      if (event.data?.type === "cms:registry" && event.data.path === page) {
        setFields(event.data.fields);
        setGroups(event.data.groups);
      }
      if (event.data?.type === "cms:select") {
        setSelected(event.data.id);
        setGroup("all");
        setFilter("");
        setTab("pages");
      }
    };
    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, [page, sendContent]);
  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => {
      if (dirty) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);
  const loadMedia = useCallback(async () => {
    try {
      setMedia((await api("/api/admin/media")).images);
    } catch (e) {
      setError((e as Error).message);
    }
  }, []);
  useEffect(() => {
    if (logged && (tab === "media" || picker)) void loadMedia();
  }, [logged, tab, picker, loadMedia]);
  async function mutate(action: string, version?: string) {
    if (!store) return;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const next = await api("/api/admin/content", {
        action,
        revision: store.revision,
        content: draft,
        version,
      });
      setStore(next);
      setDraft(next.draft);
      setPublishDialog(false);
      setNotice(
        (
          {
            save: "Rascunho salvo. O site público continua com a versão publicada.",
            publish: "Alterações publicadas. O site já está atualizado.",
            restore:
              "Versão recuperada no rascunho. Revise a prévia antes de publicar.",
            discard: "Rascunho restaurado a partir do site publicado.",
          } as Record<string, string>
        )[action],
      );
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  function updateField(id: string, value: string | ImageValue) {
    setDraft((d) => ({ ...d, fields: { ...d.fields, [id]: value } }));
    setNotice("");
  }
  function resetField(id: string) {
    setDraft((d) => {
      const next = { ...d.fields };
      delete next[id];
      return { ...d, fields: next };
    });
  }
  function updatePage(value: Partial<typeof config>) {
    setDraft((d) => ({
      ...d,
      pages: {
        ...d.pages,
        [page]: {
          ...(d.pages[page] || { order: [], hidden: [], blocks: [] }),
          ...value,
        },
      },
    }));
  }
  function blockEdit(id: string, value: Partial<CustomBlock>) {
    updatePage({
      blocks: config.blocks.map((b) => (b.id === id ? { ...b, ...value } : b)),
    });
  }
  const orderedGroups = [...groups].sort((a, b) => {
    const ia = config.order.indexOf(a.id),
      ib = config.order.indexOf(b.id);
    return (
      (ia < 0 ? 1000 + groups.indexOf(a) : ia) -
      (ib < 0 ? 1000 + groups.indexOf(b) : ib)
    );
  });
  function move(id: string, delta: number) {
    const order = orderedGroups.map((g) => g.id);
    const i = order.indexOf(id),
      to = i + delta;
    if (to < 0 || to >= order.length) return;
    [order[i], order[to]] = [order[to], order[i]];
    updatePage({ order });
  }
  function focus(id: string) {
    frame.current?.contentWindow?.postMessage(
      { type: "cms:focus", id },
      window.location.origin,
    );
  }
  function choose(id: string) {
    setSelected(id);
    focus(id);
  }
  function addBlock() {
    const block: CustomBlock = {
      id: `custom-${crypto.randomUUID()}`,
      title: "Uma nova seção",
      text: "Conte a história da sua empresa ou apresente um novo serviço.",
      image: "",
      button: "Solicitar orçamento",
      href: "/contact",
      theme: "light",
    };
    updatePage({
      blocks: [...config.blocks, block],
      order: [...orderedGroups.map((g) => g.id), block.id],
    });
    setSelected(block.id);
  }
  function pickMedia(image: Media) {
    if (picker?.startsWith("project:")) {
      const [, id, key] = picker.split(":");
      setDraft((d) => ({
        ...d,
        projects: d.projects.map((p) =>
          p.id === id ? { ...p, [key]: image.url } : p,
        ),
      }));
    } else if (picker?.startsWith("custom-"))
      blockEdit(picker, { image: image.url });
    else if (picker) {
      const f = fields.find((f) => f.id === picker);
      const current = draft.fields[picker] as ImageValue | undefined;
      updateField(picker, {
        src: image.url,
        alt: current?.alt ?? f?.label ?? image.name,
      });
    }
    setPicker(null);
  }
  async function uploadFiles(files: FileList | File[]) {
    setBusy(true);
    setError("");
    try {
      let last: Media | undefined;
      for (const file of Array.from(files)) {
        if (file.size > 10_000_000)
          throw new Error("Limite de 10 MB por imagem.");
        const form = new FormData();
        form.append("file", file);
        last = await api("/api/admin/media", form);
      }
      await loadMedia();
      if (last && picker) pickMedia(last);
      setNotice("Imagem enviada para a biblioteca.");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
      if (upload.current) upload.current.value = "";
    }
  }
  async function logout() {
    if (
      dirty &&
      !window.confirm("Há alterações não salvas. Deseja sair e perdê-las?")
    )
      return;
    setBusy(true);
    try {
      await api("/api/admin/auth", { action: "logout" });
      setLogged(false);
      setStore(null);
      setDraft(structuredClone(EMPTY_CONTENT));
      setFields([]);
      setSelected(null);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  if (!logged)
    return (
      <Login
        initialized={configured}
        tokenRequired={tokenRequired}
        onLogin={async () => {
          const next = await api("/api/admin/content");
          setStore(next);
          setDraft(next.draft);
          setConfigured(true);
          setLogged(true);
          setReady(false);
        }}
      />
    );
  const visibleFields = fields.filter(
    (f) =>
      (group === "all" || f.group === group) &&
      `${f.label} ${f.value}`.toLowerCase().includes(filter.toLowerCase()),
  );
  function library(isPicker = false) {
    return (
      <>
        <div className="cms-library-toolbar">
          <div className="cms-search">
            <Search size={16} />
            <input
              aria-label="Buscar imagens"
              placeholder="Buscar na biblioteca…"
              value={mediaFilter}
              onChange={(e) => setMediaFilter(e.target.value)}
            />
          </div>
          <button
            className="cms-button cms-primary"
            disabled={busy}
            onClick={() => upload.current?.click()}
          >
            <Upload size={16} />
            Enviar imagem
          </button>
        </div>
        <div
          className="cms-dropzone"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (!busy) void uploadFiles(e.dataTransfer.files);
          }}
        >
          <Upload size={22} />
          <p>Arraste suas imagens aqui ou use o botão acima</p>
          <small>JPG, PNG, WebP ou GIF · Até 10 MB por imagem</small>
        </div>
        <div className="cms-media-grid">
          {media
            .filter((m) =>
              m.name.toLowerCase().includes(mediaFilter.toLowerCase()),
            )
            .map((m) => (
              <div className="cms-media-card" key={m.url}>
                <button
                  onClick={() =>
                    isPicker
                      ? pickMedia(m)
                      : window.open(m.url, "_blank", "noopener")
                  }
                  aria-label={isPicker ? `Usar ${m.name}` : `Abrir ${m.name}`}
                >
                  <img src={m.url} alt={m.name} loading="lazy" />
                </button>
                <div>
                  <span title={m.name}>{m.name}</span>
                  {isPicker ? (
                    <button onClick={() => pickMedia(m)}>
                      Usar imagem <ChevronRight size={14} />
                    </button>
                  ) : (
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(m.url);
                          setNotice("Endereço da imagem copiado.");
                        } catch {
                          setError(
                            "Não foi possível copiar. Abra a imagem para obter o endereço.",
                          );
                        }
                      }}
                    >
                      Copiar endereço
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
        {!media.length && <p className="cms-muted">Carregando a biblioteca…</p>}
      </>
    );
  }
  const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "pages", label: "Páginas e conteúdo", icon: <FileText size={19} /> },
    {
      id: "projects",
      label: "Projetos e galeria",
      icon: <LayoutDashboard size={19} />,
    },
    {
      id: "media",
      label: "Biblioteca de imagens",
      icon: <ImageIcon size={19} />,
    },
    {
      id: "settings",
      label: "Configurações do site",
      icon: <Settings2 size={19} />,
    },
    {
      id: "history",
      label: "Histórico de versões",
      icon: <History size={19} />,
    },
  ];
  return (
    <div className="cms-admin">
      <input
        ref={upload}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        multiple
        hidden
        onChange={(e) => e.target.files && void uploadFiles(e.target.files)}
      />
      <aside className={`cms-sidebar ${nav ? "cms-nav-open" : ""}`}>
        <a className="cms-brand" href="/admin">
          <span className="cms-brand-icon">
            <LayoutDashboard size={24} />
          </span>
          <span>
            COVENANT<small>ADMINISTRADOR</small>
          </span>
        </a>
        <div className="cms-sidebar-label">GERENCIAR SITE</div>
        <nav>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={tab === item.id ? "active" : ""}
              onClick={() => {
                setTab(item.id);
                if (item.id === "pages") setReady(false);
                setNav(false);
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <div className="cms-sidebar-bottom">
          <div className="cms-site-status">
            <span />
            Site online
            <small>
              {store?.publishedAt
                ? `Publicado em ${date(store.publishedAt)}`
                : "Conteúdo original do site"}
            </small>
          </div>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={17} />
            Abrir site público
          </a>
          <button onClick={() => void logout()} disabled={busy}>
            <LogOut size={17} />
            Sair do painel
          </button>
        </div>
      </aside>
      <div className="cms-workspace">
        <header className="cms-topbar">
          <div className="cms-topbar-title">
            <button
              className="cms-nav-toggle cms-icon"
              onClick={() => setNav(!nav)}
              aria-label="Abrir menu"
            >
              <Menu size={22} />
            </button>
            <span>
              Painel administrativo <ChevronRight size={14} />{" "}
              <strong>{navItems.find((n) => n.id === tab)?.label}</strong>
            </span>
          </div>
          <div className="cms-topbar-actions">
            <span className="cms-save-status">
              {dirty ? (
                <>
                  <span className="cms-dot" />
                  Alterações não salvas
                </>
              ) : (
                <>
                  <Check size={14} />
                  Rascunho salvo
                </>
              )}
            </span>
            <button
              className="cms-button"
              disabled={busy || !dirty}
              onClick={() => void mutate("save")}
            >
              {busy ? (
                <Loader2 size={16} className="cms-spin" />
              ) : (
                <Save size={16} />
              )}
              Salvar rascunho
            </button>
            <button
              className="cms-button cms-primary"
              disabled={busy || !unpublished}
              onClick={() => setPublishDialog(true)}
            >
              <Globe size={16} />
              Publicar
            </button>
          </div>
        </header>
        {(notice || error) && (
          <div
            className={`cms-alert ${error ? "cms-alert-error" : ""}`}
            role={error ? "alert" : "status"}
          >
            <span>{error || notice}</span>
            <button
              className="cms-icon"
              aria-label="Fechar aviso"
              onClick={() => {
                setError("");
                setNotice("");
              }}
            >
              <X size={16} />
            </button>
          </div>
        )}
        {tab === "pages" ? (
          <>
            <div className="cms-page-heading">
              <div>
                <div className="cms-eyebrow">SEU SITE, DO SEU JEITO</div>
                <h1>Edite cada detalhe.</h1>
                <p>
                  Selecione um elemento na prévia ou encontre o conteúdo na
                  lista.
                </p>
              </div>
              <div className="cms-preview-badge">
                <MousePointer2 size={16} />
                Editor visual
              </div>
            </div>
            <div className="cms-editor">
              <div className="cms-content-panel">
                <label className="cms-label" htmlFor="cms-page">
                  PÁGINA
                </label>
                <select
                  id="cms-page"
                  value={page}
                  onChange={(e) => {
                    setPage(e.target.value);
                    setFields([]);
                    setGroups([]);
                    setSelected(null);
                    setGroup("all");
                    setReady(false);
                  }}
                >
                  {PAGE_LIST.map((p) => (
                    <option value={p.path} key={p.path}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <div className="cms-panel-tabs">
                  <button
                    className={group !== "sections" ? "active" : ""}
                    onClick={() => setGroup("all")}
                  >
                    Conteúdo <span>{fields.length}</span>
                  </button>
                  <button
                    className={group === "sections" ? "active" : ""}
                    onClick={() => {
                      setGroup("sections");
                      setSelected(null);
                    }}
                  >
                    Seções <span>{groups.length}</span>
                  </button>
                </div>
                {group === "sections" ? (
                  <div className="cms-section-list">
                    <p className="cms-muted cms-help">
                      Use as setas para reorganizar. O olho controla a exibição
                      no site.
                    </p>
                    {orderedGroups.map((g, i) => (
                      <div className="cms-section-row" key={g.id}>
                        <button
                          className="cms-section-title"
                          onClick={() => {
                            if (g.id.startsWith("custom-")) setSelected(g.id);
                            else {
                              setGroup(g.id);
                              setSelected(null);
                            }
                            focus(g.id);
                          }}
                        >
                          <span>{String(i + 1).padStart(2, "0")}</span>
                          {g.label}
                        </button>
                        <div>
                          <button
                            className="cms-icon"
                            aria-label={`Mover ${g.label} para cima`}
                            disabled={i === 0}
                            onClick={() => move(g.id, -1)}
                          >
                            <ArrowUp size={15} />
                          </button>
                          <button
                            className="cms-icon"
                            aria-label={`Mover ${g.label} para baixo`}
                            disabled={i === orderedGroups.length - 1}
                            onClick={() => move(g.id, 1)}
                          >
                            <ArrowDown size={15} />
                          </button>
                          <button
                            className="cms-icon"
                            aria-label={`${config.hidden.includes(g.id) ? "Exibir" : "Ocultar"} ${g.label}`}
                            onClick={() =>
                              updatePage({
                                hidden: config.hidden.includes(g.id)
                                  ? config.hidden.filter((id) => id !== g.id)
                                  : [...config.hidden, g.id],
                              })
                            }
                          >
                            {config.hidden.includes(g.id) ? (
                              <EyeOff size={15} />
                            ) : (
                              <Eye size={15} />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      className="cms-button cms-add-section"
                      onClick={addBlock}
                    >
                      <Plus size={16} />
                      Adicionar seção
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="cms-search">
                      <Search size={16} />
                      <input
                        placeholder="Buscar texto, imagem ou link…"
                        aria-label="Buscar conteúdo"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                      />
                    </div>
                    <select
                      aria-label="Filtrar por seção"
                      className="cms-group-select"
                      value={group}
                      onChange={(e) => setGroup(e.target.value)}
                    >
                      <option value="all">Todas as seções</option>
                      <option value="header">Cabeçalho e navegação</option>
                      {orderedGroups.map((g) => (
                        <option key={g.id} value={g.id}>
                          {g.label}
                        </option>
                      ))}
                      <option value="footer">Rodapé e contato</option>
                    </select>
                    <div className="cms-field-list">
                      {visibleFields.map((f) => (
                        <button
                          key={f.id}
                          className={`cms-field-row ${selected === f.id ? "selected" : ""}`}
                          onClick={() => choose(f.id)}
                        >
                          <span
                            className={`cms-field-icon ${f.kind === "image" ? "image" : ""}`}
                          >
                            {f.kind === "image" ? (
                              <ImageIcon size={16} />
                            ) : f.kind === "link" ? (
                              <ExternalLink size={16} />
                            ) : (
                              <FileText size={16} />
                            )}
                          </span>
                          <span>
                            <small>
                              {
                                {
                                  text: "TEXTO",
                                  image: "IMAGEM",
                                  link: "LINK / BOTÃO",
                                  attribute: "CAMPO DO FORMULÁRIO",
                                }[f.kind]
                              }
                              {draft.fields[f.id] !== undefined
                                ? " · EDITADO"
                                : ""}
                            </small>
                            <strong>
                              {typeof draft.fields[f.id] === "string"
                                ? (draft.fields[f.id] as string)
                                : f.label}
                            </strong>
                          </span>
                          <ChevronRight size={14} />
                        </button>
                      ))}
                      {!visibleFields.length && (
                        <p className="cms-muted cms-help">
                          {ready
                            ? "Nenhum campo encontrado. Elementos de galerias e menus aparecem ao abrir a prévia correspondente."
                            : "Carregando o conteúdo da página…"}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
              <div className="cms-preview-panel">
                <div className="cms-preview-toolbar">
                  <span>
                    <span className="cms-live-dot" />
                    Prévia do rascunho <small>{currentPage.path}</small>
                  </span>
                  <div>
                    <button
                      className={`cms-icon ${!mobile ? "active" : ""}`}
                      aria-label="Prévia desktop"
                      onClick={() => setMobile(false)}
                    >
                      <Monitor size={18} />
                    </button>
                    <button
                      className={`cms-icon ${mobile ? "active" : ""}`}
                      aria-label="Prévia celular"
                      onClick={() => setMobile(true)}
                    >
                      <Smartphone size={18} />
                    </button>
                  </div>
                </div>
                <div
                  className={`cms-frame-wrap ${mobile ? "cms-frame-mobile" : ""}`}
                >
                  {!ready && (
                    <div className="cms-frame-loading">
                      <Loader2 size={22} className="cms-spin" />
                      <span>Preparando o editor…</span>
                    </div>
                  )}
                  <iframe
                    ref={frame}
                    key={page}
                    src={`${page}?cmsPreview=1`}
                    title={`Prévia de ${currentPage.name}`}
                    onLoad={() => sendContent()}
                  />
                </div>
                <div className="cms-preview-footer">
                  <LockKeyhole size={13} />
                  Esta prévia é privada. As alterações aparecem no site quando
                  você publicar.
                </div>
              </div>
              <div className="cms-properties">
                {selectedField ? (
                  <>
                    <div className="cms-properties-title">
                      <h2>
                        {selectedField.kind === "image"
                          ? "Editar imagem"
                          : selectedField.kind === "link"
                            ? "Editar destino"
                            : "Editar texto"}
                      </h2>
                      <button
                        className="cms-icon"
                        aria-label="Fechar edição"
                        onClick={() => setSelected(null)}
                      >
                        <X size={17} />
                      </button>
                    </div>
                    <p className="cms-muted cms-help">
                      {selectedField.kind === "image"
                        ? "Uma imagem usada em mais de uma página será atualizada em todos os locais."
                        : "A prévia acompanha suas alterações enquanto você edita."}
                    </p>
                    {selectedField.kind === "image" ? (
                      <>
                        <div className="cms-image-preview">
                          <img
                            src={
                              (draft.fields[selectedField.id] as ImageValue)
                                ?.src || selectedField.value
                            }
                            alt={
                              (draft.fields[selectedField.id] as ImageValue)
                                ?.alt || selectedField.label
                            }
                          />
                        </div>
                        <button
                          className="cms-button cms-wide"
                          onClick={() => setPicker(selectedField.id)}
                        >
                          <ImageIcon size={16} />
                          Trocar imagem
                        </button>
                        <label className="cms-label">
                          ENDEREÇO DA IMAGEM
                          <input
                            value={
                              (draft.fields[selectedField.id] as ImageValue)
                                ?.src || selectedField.value
                            }
                            onChange={(e) =>
                              updateField(selectedField.id, {
                                src: e.target.value,
                                alt:
                                  (draft.fields[selectedField.id] as ImageValue)
                                    ?.alt ?? selectedField.label,
                              })
                            }
                          />
                        </label>
                        <label className="cms-label">
                          DESCRIÇÃO PARA ACESSIBILIDADE
                          <textarea
                            rows={3}
                            value={
                              (draft.fields[selectedField.id] as ImageValue)
                                ?.alt ?? selectedField.label
                            }
                            onChange={(e) =>
                              updateField(selectedField.id, {
                                src:
                                  (draft.fields[selectedField.id] as ImageValue)
                                    ?.src || selectedField.value,
                                alt: e.target.value,
                              })
                            }
                          />
                        </label>
                      </>
                    ) : (
                      <label className="cms-label">
                        {selectedField.kind === "link"
                          ? "ENDEREÇO DE DESTINO"
                          : "CONTEÚDO"}
                        <textarea
                          rows={selectedField.kind === "link" ? 3 : 8}
                          value={
                            typeof draft.fields[selectedField.id] === "string"
                              ? (draft.fields[selectedField.id] as string)
                              : selectedField.value
                          }
                          onChange={(e) =>
                            updateField(selectedField.id, e.target.value)
                          }
                        />
                        {selectedField.kind === "link" && (
                          <small>
                            Use /contact, https://…, tel:… ou mailto:…
                          </small>
                        )}
                      </label>
                    )}
                    <button
                      className="cms-reset"
                      onClick={() => resetField(selectedField.id)}
                    >
                      Restaurar conteúdo original
                    </button>
                    <div className="cms-original">
                      <small>ORIGINAL</small>
                      <p>{selectedField.value}</p>
                    </div>
                  </>
                ) : selectedBlock ? (
                  <>
                    <div className="cms-properties-title">
                      <h2>Nova seção</h2>
                      <button
                        className="cms-icon"
                        aria-label="Fechar edição"
                        onClick={() => setSelected(null)}
                      >
                        <X size={17} />
                      </button>
                    </div>
                    {(
                      [
                        ["title", "TÍTULO"],
                        ["text", "TEXTO"],
                        ["button", "TEXTO DO BOTÃO"],
                        ["href", "LINK DO BOTÃO"],
                      ] as const
                    ).map(([key, label]) => (
                      <label className="cms-label" key={key}>
                        {label}
                        {key === "text" ? (
                          <textarea
                            rows={5}
                            aria-label={label}
                            value={selectedBlock[key]}
                            onChange={(e) =>
                              blockEdit(selectedBlock.id, {
                                [key]: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <input
                            aria-label={label}
                            value={selectedBlock[key]}
                            onChange={(e) =>
                              blockEdit(selectedBlock.id, {
                                [key]: e.target.value,
                              })
                            }
                          />
                        )}
                      </label>
                    ))}
                    <label className="cms-label">
                      ESTILO
                      <select
                        value={selectedBlock.theme}
                        onChange={(e) =>
                          blockEdit(selectedBlock.id, {
                            theme: e.target.value as CustomBlock["theme"],
                          })
                        }
                      >
                        <option value="light">Claro</option>
                        <option value="dark">Azul escuro</option>
                      </select>
                    </label>
                    {selectedBlock.image && (
                      <div className="cms-image-preview">
                        <img
                          src={selectedBlock.image}
                          alt={selectedBlock.title}
                        />
                      </div>
                    )}
                    <button
                      className="cms-button cms-wide"
                      onClick={() => setPicker(selectedBlock.id)}
                    >
                      <ImageIcon size={16} />
                      {selectedBlock.image
                        ? "Trocar imagem"
                        : "Adicionar imagem"}
                    </button>
                    {selectedBlock.image && (
                      <button
                        className="cms-reset"
                        onClick={() =>
                          blockEdit(selectedBlock.id, { image: "" })
                        }
                      >
                        Remover imagem
                      </button>
                    )}
                    <button
                      className="cms-button cms-danger cms-wide"
                      onClick={() => {
                        updatePage({
                          blocks: config.blocks.filter(
                            (b) => b.id !== selectedBlock.id,
                          ),
                          order: config.order.filter(
                            (id) => id !== selectedBlock.id,
                          ),
                          hidden: config.hidden.filter(
                            (id) => id !== selectedBlock.id,
                          ),
                        });
                        setSelected(null);
                      }}
                    >
                      <Trash2 size={16} />
                      Excluir seção
                    </button>
                  </>
                ) : (
                  <div className="cms-empty-properties">
                    <span>
                      <MousePointer2 size={28} />
                    </span>
                    <h2>O que vamos editar?</h2>
                    <p>
                      Clique em um texto ou imagem na prévia para abrir suas
                      opções aqui.
                    </p>
                    <div>
                      <ShieldCheck size={18} />
                      <small>
                        Edite com tranquilidade. Você pode salvar um rascunho e
                        publicar quando estiver pronto.
                      </small>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="cms-standard-page">
            <div className="cms-eyebrow">
              {tab === "projects"
                ? "SEU PORTFÓLIO"
                : tab === "media"
                  ? "TODAS AS SUAS IMAGENS"
                  : tab === "settings"
                    ? "IDENTIDADE E CONTATO"
                    : "CONTROLE DAS PUBLICAÇÕES"}
            </div>
            <h1>
              {tab === "projects"
                ? "Projetos e galeria"
                : tab === "media"
                  ? "Biblioteca de imagens"
                  : tab === "settings"
                    ? "Configurações do site"
                    : "Histórico de versões"}
            </h1>
            <p className="cms-page-description">
              {tab === "projects"
                ? "Adicione, organize e edite os projetos exibidos nas galerias do site."
                : tab === "media"
                  ? "Envie suas fotos e use a biblioteca para trocar imagens em qualquer página."
                  : tab === "settings"
                    ? "Atualize os contatos, as cores principais e as informações para os buscadores."
                    : "Recupere uma publicação anterior no rascunho e revise antes de publicar."}
            </p>
            {tab === "projects" ? (
              <ProjectManager
                projects={draft.projects}
                editing={editingProject}
                onEditing={setEditingProject}
                onChange={(projects) => setDraft((d) => ({ ...d, projects }))}
                onImage={(id, key) => setPicker(`project:${id}:${key}`)}
              />
            ) : tab === "media" ? (
              library()
            ) : tab === "settings" ? (
              <div className="cms-settings-grid">
                <section className="cms-card">
                  <h2>
                    <Globe size={20} />
                    Dados da empresa
                  </h2>
                  <p>
                    Telefone e e-mail também atualizam os links de contato do
                    site.
                  </p>
                  {(
                    [
                      ["name", "NOME DA EMPRESA"],
                      ["phone", "TELEFONE"],
                      ["email", "E-MAIL"],
                    ] as const
                  ).map(([key, label]) => (
                    <label className="cms-label" key={key}>
                      {label}
                      <input
                        type={key === "email" ? "email" : "text"}
                        value={draft.settings[key]}
                        onChange={(e) =>
                          setDraft((d) => ({
                            ...d,
                            settings: { ...d.settings, [key]: e.target.value },
                          }))
                        }
                      />
                    </label>
                  ))}
                </section>
                <section className="cms-card">
                  <h2>
                    <Settings2 size={20} />
                    Identidade visual
                  </h2>
                  <p>Cores principais dos textos, botões e fundos do site.</p>
                  {(
                    [
                      ["navy", "AZUL PRINCIPAL"],
                      ["gold", "DOURADO / DESTAQUE"],
                    ] as const
                  ).map(([key, label]) => (
                    <label className="cms-label" key={key}>
                      {label}
                      <div className="cms-color-field">
                        <input
                          type="color"
                          value={draft.settings[key]}
                          onChange={(e) =>
                            setDraft((d) => ({
                              ...d,
                              settings: {
                                ...d.settings,
                                [key]: e.target.value,
                              },
                            }))
                          }
                        />
                        <input
                          value={draft.settings[key]}
                          onChange={(e) =>
                            setDraft((d) => ({
                              ...d,
                              settings: {
                                ...d.settings,
                                [key]: e.target.value,
                              },
                            }))
                          }
                        />
                      </div>
                    </label>
                  ))}
                </section>
                <section className="cms-card">
                  <h2>
                    <Search size={20} />
                    Informações para buscadores
                  </h2>
                  <p>
                    O título e a descrição ajudam a apresentar a empresa nas
                    buscas e nos compartilhamentos.
                  </p>
                  <label className="cms-label">
                    TÍTULO PRINCIPAL
                    <input
                      value={draft.settings.title}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          settings: { ...d.settings, title: e.target.value },
                        }))
                      }
                    />
                  </label>
                  <label className="cms-label">
                    DESCRIÇÃO
                    <textarea
                      rows={4}
                      value={draft.settings.description}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          settings: {
                            ...d.settings,
                            description: e.target.value,
                          },
                        }))
                      }
                    />
                  </label>
                </section>
                <section className="cms-card">
                  <h2>
                    <History size={20} />
                    Rascunho atual
                  </h2>
                  <p>
                    {dirty
                      ? "Você tem alterações que ainda não foram salvas."
                      : "O rascunho está salvo no servidor."}{" "}
                    Publicar torna o rascunho visível para todos.
                  </p>
                  <button
                    className="cms-button cms-danger"
                    disabled={busy || !unpublished}
                    onClick={() =>
                      window.confirm(
                        "Descartar todas as alterações do rascunho e recuperar o site publicado?",
                      ) && void mutate("discard")
                    }
                  >
                    <Trash2 size={16} />
                    Descartar rascunho
                  </button>
                </section>
              </div>
            ) : (
              <div className="cms-history">
                <div className="cms-card cms-current-version">
                  <span className="cms-version-icon">
                    <Globe size={22} />
                  </span>
                  <div>
                    <h2>Versão atual do site</h2>
                    <p>
                      {store?.publishedAt
                        ? `Publicada em ${date(store.publishedAt)}`
                        : "Site original, antes da primeira publicação pelo painel"}
                    </p>
                  </div>
                  <span className="cms-status-pill">PUBLICADA</span>
                </div>
                {store?.history.map((v, i) => (
                  <div className="cms-card cms-version-row" key={v.id}>
                    <span className="cms-version-icon">
                      <History size={22} />
                    </span>
                    <div>
                      <h2>
                        {i === store.history.length - 1
                          ? "Primeira versão preservada"
                          : "Publicação anterior"}
                      </h2>
                      <p>{date(v.date)}</p>
                    </div>
                    <button
                      className="cms-button"
                      disabled={busy}
                      onClick={() => void mutate("restore", v.id)}
                    >
                      Recuperar no rascunho
                    </button>
                  </div>
                ))}
                {!store?.history.length && (
                  <div className="cms-card cms-history-empty">
                    <History size={36} />
                    <h2>Seu histórico começa na primeira publicação</h2>
                    <p>
                      Cada publicação preserva a versão anterior. As últimas 15
                      versões ficam disponíveis aqui.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <footer className="cms-admin-footer">
          <span>Covenant · Gerenciamento do site</span>
          <span>
            <ShieldCheck size={13} />
            Acesso protegido
          </span>
        </footer>
      </div>
      {picker && (
        <div className="cms-modal-backdrop" onClick={() => setPicker(null)}>
          <section
            className="cms-modal cms-media-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Escolher imagem"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cms-modal-heading">
              <div>
                <h2>Escolha uma imagem</h2>
                <p>Use uma foto da biblioteca ou envie uma nova.</p>
              </div>
              <button
                className="cms-icon"
                aria-label="Fechar biblioteca"
                onClick={() => setPicker(null)}
              >
                <X size={22} />
              </button>
            </div>
            {library(true)}
          </section>
        </div>
      )}
      {publishDialog && (
        <div className="cms-modal-backdrop">
          <section
            className="cms-modal cms-publish-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Publicar alterações"
          >
            <span className="cms-publish-icon">
              <Globe size={30} />
            </span>
            <h2>Publicar as alterações?</h2>
            <p>
              O conteúdo da prévia será exibido para todos os visitantes. A
              versão atual será preservada no histórico.
            </p>
            <div>
              <button
                className="cms-button"
                disabled={busy}
                onClick={() => setPublishDialog(false)}
              >
                Continuar editando
              </button>
              <button
                className="cms-button cms-primary"
                disabled={busy}
                onClick={() => void mutate("publish")}
              >
                {busy ? (
                  <Loader2 size={16} className="cms-spin" />
                ) : (
                  <Globe size={16} />
                )}
                Publicar agora
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
function PasswordInput({ visibilityLabel = "senha", ...props }: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & { visibilityLabel?: string }) {
  const [visible, setVisible] = useState(false);
  return (
    <span className="cms-password-field">
      <input {...props} type={visible ? "text" : "password"} />
      <button
        type="button"
        className="cms-icon cms-password-toggle"
        aria-label={`${visible ? "Ocultar" : "Mostrar"} ${visibilityLabel}`}
        aria-controls={props.id}
        aria-pressed={visible}
        onClick={(event) => { event.preventDefault(); setVisible(value => !value); }}
      >
        {visible ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </span>
  );
}

function Login({
  initialized,
  tokenRequired,
  onLogin,
}: {
  initialized: boolean;
  tokenRequired: boolean;
  onLogin: () => Promise<void>;
}) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    if (!initialized && password !== confirm) {
      setError("As senhas não coincidem.");
      return;
    }
    setBusy(true);
    try {
      await api("/api/admin/auth", {
        action: initialized ? "login" : "setup",
        password,
        token,
      });
      await onLogin();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="cms-admin cms-login">
      <div className="cms-login-art">
        <span className="cms-login-wordmark">
          COVENANT<small>CONSTRUCTION & PAINTING</small>
        </span>
        <div>
          <div className="cms-eyebrow">BEM-VINDO AO SEU PAINEL</div>
          <h1>
            Seu trabalho merece
            <br />
            uma boa apresentação.
          </h1>
          <p>
            Cuide do seu site com a mesma atenção que você dedica a cada
            projeto.
          </p>
        </div>
        <span className="cms-login-art-footer">
          CONTEÚDO · IMAGENS · IDENTIDADE
        </span>
      </div>
      <main className="cms-login-main">
        <form onSubmit={submit}>
          <span className="cms-login-lock">
            <LockKeyhole size={26} />
          </span>
          <div className="cms-eyebrow">ACESSO ADMINISTRATIVO</div>
          <h2>
            {initialized ? "Bem-vindo de volta." : "Configure seu acesso."}
          </h2>
          <p>
            {initialized
              ? "Entre com sua senha para gerenciar o site."
              : "Crie a senha que será usada para entrar no painel. Use pelo menos 12 caracteres."}
          </p>
          {error && (
            <div className="cms-alert cms-alert-error" role="alert">
              {error}
            </div>
          )}
          <label className="cms-label" htmlFor="cms-password">
            {initialized ? "SENHA" : "CRIAR SENHA"}
            <PasswordInput
              id="cms-password"
              required
              minLength={initialized ? 1 : 12}
              maxLength={256}
              autoComplete={initialized ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {!initialized && (
            <>
              <label className="cms-label" htmlFor="cms-confirm">
                CONFIRMAR SENHA
                <PasswordInput
                  id="cms-confirm"
                  visibilityLabel="confirmação de senha"
                  required
                  minLength={12}
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </label>
              {tokenRequired && (
                <label className="cms-label" htmlFor="cms-token">
                  TOKEN DE CONFIGURAÇÃO
                  <PasswordInput
                    id="cms-token"
                    visibilityLabel="token"
                    required
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                  />
                </label>
              )}
            </>
          )}
          <button
            className="cms-button cms-primary cms-wide"
            disabled={busy}
            type="submit"
          >
            {busy ? (
              <Loader2 size={17} className="cms-spin" />
            ) : (
              <LockKeyhole size={17} />
            )}
            {initialized ? "Entrar no painel" : "Criar acesso e entrar"}
          </button>
          <a className="cms-back-site" href="/">
            Voltar ao site <ExternalLink size={14} />
          </a>
          <div className="cms-login-security">
            <ShieldCheck size={16} />
            Seu acesso é privado e protegido por senha.
          </div>
        </form>
      </main>
    </div>
  );
}

function ProjectManager({
  projects,
  editing,
  onEditing,
  onChange,
  onImage,
}: {
  projects: Project[];
  editing: string | null;
  onEditing: (id: string | null) => void;
  onChange: (projects: Project[]) => void;
  onImage: (id: string, key: string) => void;
}) {
  const project = projects.find((p) => p.id === editing);
  const update = (value: Partial<Project>) =>
    onChange(projects.map((p) => (p.id === editing ? { ...p, ...value } : p)));
  function add() {
    const p: Project = {
      id: `project-${crypto.randomUUID()}`,
      title: "Novo projeto",
      category: "other",
      categoryLabel: "Home Improvement",
      image: "/images/hero-main.jpeg",
      summary: "Apresente seu projeto.",
      description: "Descreva o trabalho realizado e o resultado.",
      highlights: [],
    };
    onChange([...projects, p]);
    onEditing(p.id);
  }
  function move(id: string, delta: number) {
    const next = [...projects],
      i = next.findIndex((p) => p.id === id),
      to = i + delta;
    if (to < 0 || to >= next.length) return;
    [next[i], next[to]] = [next[to], next[i]];
    onChange(next);
  }
  return (
    <div className="cms-project-manager">
      <div>
        <button className="cms-button cms-primary cms-wide" onClick={add}>
          <Plus size={16} />
          Adicionar projeto
        </button>
        <div className="cms-project-list">
          {projects.map((p, i) => (
            <div
              className={`cms-project-row ${editing === p.id ? "selected" : ""}`}
              key={p.id}
            >
              <button onClick={() => onEditing(p.id)}>
                <img src={p.image} alt={p.title} />
                <span>
                  <strong>{p.title}</strong>
                  <small>{p.categoryLabel}</small>
                </span>
              </button>
              <div>
                <button
                  className="cms-icon"
                  aria-label={`Mover projeto ${p.title} para cima`}
                  disabled={i === 0}
                  onClick={() => move(p.id, -1)}
                >
                  <ArrowUp size={15} />
                </button>
                <button
                  className="cms-icon"
                  aria-label={`Mover projeto ${p.title} para baixo`}
                  disabled={i === projects.length - 1}
                  onClick={() => move(p.id, 1)}
                >
                  <ArrowDown size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="cms-card">
        {project ? (
          <>
            <h2>Editar projeto</h2>
            <p>
              As informações aparecem nos cartões e nos detalhes da galeria.
            </p>
            {(
              [
                ["title", "TÍTULO DO PROJETO"],
                ["categoryLabel", "NOME DA CATEGORIA"],
                ["summary", "RESUMO"],
                ["description", "DESCRIÇÃO COMPLETA"],
              ] as const
            ).map(([key, label]) => (
              <label className="cms-label" key={key}>
                {label}
                {key === "summary" || key === "description" ? (
                  <textarea
                    rows={key === "description" ? 5 : 3}
                    aria-label={label}
                    value={project[key]}
                    onChange={(e) => update({ [key]: e.target.value })}
                  />
                ) : (
                  <input
                    aria-label={label}
                    value={project[key]}
                    onChange={(e) => update({ [key]: e.target.value })}
                  />
                )}
              </label>
            ))}
            <label className="cms-label">
              CATEGORIA
              <select
                value={project.category}
                onChange={(e) =>
                  update({ category: e.target.value as Project["category"] })
                }
              >
                <option value="kitchens">Cozinhas</option>
                <option value="bathrooms">Banheiros</option>
                <option value="painting">Pintura</option>
                <option value="other">Outros projetos</option>
              </select>
            </label>
            <label className="cms-label">
              DESTAQUES (UM POR LINHA)
              <textarea
                rows={4}
                value={project.highlights.join("\n")}
                onChange={(e) =>
                  update({ highlights: e.target.value.split("\n") })
                }
              />
            </label>
            <div className="cms-project-images">
              {(
                [
                  ["image", "Imagem principal"],
                  ["beforeImage", "Antes"],
                  ["afterImage", "Depois"],
                ] as const
              ).map(([key, label]) => (
                <div key={key}>
                  {project[key] && <img src={project[key]} alt={label} />}
                  <button
                    className="cms-button cms-wide"
                    onClick={() => onImage(project.id, key)}
                  >
                    <ImageIcon size={15} />
                    {label}
                  </button>
                  {key !== "image" && project[key] && (
                    <button
                      className="cms-reset"
                      onClick={() => update({ [key]: "" })}
                    >
                      Remover imagem
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              className="cms-button cms-danger"
              onClick={() => {
                if (
                  window.confirm(
                    `Excluir o projeto "${project.title}" do rascunho?`,
                  )
                ) {
                  onChange(projects.filter((p) => p.id !== project.id));
                  onEditing(null);
                }
              }}
            >
              <Trash2 size={15} />
              Excluir projeto
            </button>
          </>
        ) : (
          <div className="cms-history-empty">
            <LayoutDashboard size={32} />
            <h2>Selecione um projeto</h2>
            <p>Edite os dados ou adicione um novo trabalho ao portfólio.</p>
          </div>
        )}
      </section>
    </div>
  );
}
