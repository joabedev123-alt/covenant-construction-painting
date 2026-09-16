"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import NextImage, { ImageProps } from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  Field,
  SiteContent,
  fieldKey,
  ImageValue,
  safeUrl,
  CustomBlock,
} from "@/lib/cms/types";

type Group = { id: string; label: string };
type ContextValue = {
  content: SiteContent;
  preview: boolean;
  register: (field: Field) => () => void;
  group: (group: Group) => () => void;
};
const Context = createContext<ContextValue | null>(null);
const GroupContext = createContext("global");
function useCms() {
  const c = useContext(Context);
  if (!c) throw new Error("CMS provider missing");
  return c;
}
export function ContentProvider({
  initial,
  children,
  preview: allowed,
}: {
  initial: SiteContent;
  children: React.ReactNode;
  preview: boolean;
}) {
  const [content, setContent] = useState(initial);
  const [preview, setPreview] = useState(false);
  const fields = useRef(new Map<string, Map<symbol, Field>>());
  const groups = useRef(new Map<string, Group>());
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const path = usePathname();
  const sendRef = useRef(() => {});
  sendRef.current = () => {
    if (!allowed || window.parent === window) return;
    window.parent.postMessage(
      {
        type: "cms:registry",
        path,
        fields: [...fields.current.values()].map((entries) =>
          [...entries.values()].at(-1)!,
        ),
        groups: [...groups.current.values()],
      },
      window.location.origin,
    );
  };
  const api = useMemo(() => {
    const schedule = () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => sendRef.current(), 120);
    };
    return {
      register(field: Field) {
        const token = Symbol(field.id);
        const entries =
          fields.current.get(field.id) || new Map<symbol, Field>();
        entries.set(token, field);
        fields.current.set(field.id, entries);
        schedule();
        return () => {
          entries.delete(token);
          if (!entries.size) fields.current.delete(field.id);
          schedule();
        };
      },
      group(group: Group) {
        groups.current.set(group.id, group);
        schedule();
        return () => {
          if (groups.current.get(group.id) === group)
            groups.current.delete(group.id);
          schedule();
        };
      },
    };
  }, []);
  useEffect(() => {
    if (!allowed || window.parent === window) return;
    const listener = (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        event.source !== window.parent
      )
        return;
      if (event.data?.type === "cms:content") {
        setContent(event.data.content);
        setPreview(true);
        sendRef.current();
      }
      if (
        event.data?.type === "cms:focus" &&
        typeof event.data.id === "string"
      ) {
        const el = document.querySelector(
          `[data-cms-id="${CSS.escape(event.data.id)}"], [data-cms-block="${CSS.escape(event.data.id)}"]`,
        );
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
        if (el instanceof HTMLElement) {
          el.style.outline = "3px solid #c79a3b";
          setTimeout(() => {
            el.style.outline = "";
          }, 1800);
        }
      }
    };
    window.addEventListener("message", listener);
    window.parent.postMessage(
      { type: "cms:ready", path },
      window.location.origin,
    );
    return () => {
      window.removeEventListener("message", listener);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [allowed, path]);
  useEffect(() => {
    if (!preview) return;
    const click = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const element = target.closest<HTMLElement>("[data-cms-id]");
      if (element) {
        event.preventDefault();
        event.stopPropagation();
        window.parent.postMessage(
          { type: "cms:select", id: element.dataset.cmsId },
          window.location.origin,
        );
      } else if (target.closest("a")) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    document.addEventListener("click", click, true);
    window.parent.postMessage(
      { type: "cms:activated" },
      window.location.origin,
    );
    return () => document.removeEventListener("click", click, true);
  }, [preview]);
  const s = content.settings;
  const theme = s.navy !== "#071F41" || s.gold !== "#C79A3B";
  const css = theme
    ? `:root{--color-covenant-navy:${s.navy};--color-covenant-gold:${s.gold}} .bg-covenant-navy{background-color:${s.navy}} .text-covenant-navy{color:${s.navy}} .bg-covenant-gold{background-color:${s.gold}} .text-covenant-gold,.text-covenant-gold-dark,.text-covenant-gold-light{color:${s.gold}} .border-covenant-gold{border-color:${s.gold}}`
    : "";
  return (
    <Context.Provider value={{ content, preview, ...api }}>
      <style>
        {css +
          (preview
            ? `html{scroll-behavior:auto!important;scroll-padding-top:110px}[data-cms-id]{cursor:pointer;scroll-margin-top:110px} [data-cms-id]:hover{outline:2px dashed #c79a3b;outline-offset:3px} [data-cms-block][data-hidden="true"]{display:block!important;opacity:.35;outline:2px dashed #ef4444}`
            : "")}
      </style>
      {children}
    </Context.Provider>
  );
}
function useField(
  id: string,
  kind: Field["kind"],
  value: string,
  label: string,
) {
  const { register } = useCms();
  const group = useContext(GroupContext);
  useEffect(() => {
    if (value) return register({ id, kind, value, label, group });
  }, [register, id, kind, value, label, group]);
}
function companyText(value: string, content: SiteContent) {
  return value
    .replaceAll(
      "COVENANT CONSTRUCTION & PAINTING",
      content.settings.name.toUpperCase(),
    )
    .replaceAll("Covenant Construction & Painting", content.settings.name)
    .replaceAll("508-405-6918", content.settings.phone)
    .replaceAll("damascenoluiz31@gmail.com", content.settings.email);
}
export function ContentText({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { content } = useCms();
  const value = typeof children === "string" ? children : "";
  const key = fieldKey(id, value);
  useField(key, "text", value, value.slice(0, 90));
  if (!value || !value.trim()) return <>{children}</>;
  const override = content.fields[key];
  return (
    <span
      data-cms-id={key}
      style={{
        whiteSpace:
          typeof override === "string" && override.includes("\n")
            ? "pre-line"
            : undefined,
      }}
    >
      {typeof override === "string" ? override : companyText(value, content)}
    </span>
  );
}
export function ContentImage(props: ImageProps) {
  const { content } = useCms();
  const src = typeof props.src === "string" ? props.src : "";
  const id = fieldKey("image", src);
  useField(id, "image", src, props.alt || "Imagem");
  const override = content.fields[id] as ImageValue | undefined;
  return (
    <NextImage
      {...props}
      data-cms-id={id}
      src={override?.src || props.src}
      alt={override?.alt ?? props.alt}
      unoptimized={!!override || props.unoptimized}
    />
  );
}
export function ContentRawImage(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) {
  const { content } = useCms();
  const src = typeof props.src === "string" ? props.src : "";
  const id = fieldKey("image", src);
  useField(id, "image", src, props.alt || "Imagem");
  const override = content.fields[id] as ImageValue | undefined;
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      {...props}
      data-cms-id={id}
      src={override?.src || src}
      alt={override?.alt ?? props.alt}
    />
  );
}
function useLink(id: string, href: string) {
  const { content } = useCms();
  const key = fieldKey(`link-${id}`, href);
  useField(key, "link", href, href);
  const override = content.fields[key];
  let result =
    typeof override === "string" && safeUrl(override) ? override : href;
  if (result.startsWith("tel:") && result.includes("5084056918"))
    result = `tel:${content.settings.phone.replace(/[^+\d]/g, "")}`;
  if (result.includes("mailto:damascenoluiz31@gmail.com"))
    result = result.replace(
      "damascenoluiz31@gmail.com",
      content.settings.email,
    );
  return { href: result, "data-cms-id": key };
}
export function ContentLink({
  cmsId = "shared",
  ...props
}: React.ComponentProps<typeof NextLink> & { cmsId?: string }) {
  const link = useLink(cmsId, typeof props.href === "string" ? props.href : "");
  return (
    <NextLink {...props} {...(typeof props.href === "string" ? link : {})} />
  );
}
export function ContentAnchor({
  cmsId,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { cmsId: string }) {
  const link = useLink(cmsId, props.href || "");
  return <a {...props} {...link} />;
}
export function ContentInput({
  cmsId,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { cmsId: string }) {
  const { content } = useCms();
  const key = fieldKey(`attribute-${cmsId}`, props.placeholder || "");
  useField(
    key,
    "attribute",
    props.placeholder || "",
    `Campo: ${props.placeholder}`,
  );
  const value = content.fields[key];
  return (
    <input
      {...props}
      placeholder={typeof value === "string" ? value : props.placeholder}
      data-cms-id={props.placeholder ? key : undefined}
    />
  );
}
export function ContentTextarea({
  cmsId,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { cmsId: string }) {
  const { content } = useCms();
  const key = fieldKey(`attribute-${cmsId}`, props.placeholder || "");
  useField(
    key,
    "attribute",
    props.placeholder || "",
    `Campo: ${props.placeholder}`,
  );
  const value = content.fields[key];
  return (
    <textarea
      {...props}
      placeholder={typeof value === "string" ? value : props.placeholder}
      data-cms-id={key}
    />
  );
}
export function ContentOption({
  cmsId,
  children,
  ...props
}: React.OptionHTMLAttributes<HTMLOptionElement> & { cmsId: string }) {
  const { content } = useCms();
  const original = typeof children === "string" ? children : "";
  const key = fieldKey(cmsId, original);
  useField(key, "text", original, `Opção: ${original}`);
  return (
    <option {...props}>
      {typeof content.fields[key] === "string"
        ? (content.fields[key] as string)
        : children}
    </option>
  );
}
export function ContentGroup({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return <GroupContext.Provider value={id}>{children}</GroupContext.Provider>;
}
export function ContentBlock({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  const { content, group } = useCms();
  const path = usePathname();
  useEffect(() => group({ id, label }), [group, id, label]);
  const hidden = content.pages[path]?.hidden.includes(id);
  return (
    <GroupContext.Provider value={id}>
      <div
        data-cms-block={id}
        data-hidden={hidden ? "true" : "false"}
        style={{ display: hidden ? "none" : "contents" }}
      >
        {children}
      </div>
    </GroupContext.Provider>
  );
}
function NewBlock({ block }: { block: CustomBlock }) {
  const dark = block.theme === "dark";
  return (
    <ContentBlock id={block.id} label={block.title || "Nova seção"}>
      <section
        className={`py-20 lg:py-28 ${dark ? "bg-covenant-navy text-white" : "bg-covenant-offwhite text-covenant-navy"}`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 grid gap-12 items-center ${block.image ? "md:grid-cols-2" : "text-center max-w-3xl"}`}
        >
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">
              {block.title}
            </h2>
            <p className="mt-6 leading-relaxed whitespace-pre-line">
              {block.text}
            </p>
            {block.button && block.href && safeUrl(block.href) && (
              <a
                href={block.href}
                className="inline-block mt-8 rounded-lg bg-covenant-gold px-7 py-4 text-covenant-navy font-bold"
              >
                {block.button}
              </a>
            )}
          </div>
          {block.image && safeUrl(block.image, true) && (
            <NextImage
              src={block.image}
              alt={block.title}
              width={1200}
              height={800}
              unoptimized
              className="w-full aspect-[3/2] object-cover rounded-2xl"
            />
          )}
        </div>
      </section>
    </ContentBlock>
  );
}
export function ContentPage({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { content } = useCms();
  const path = usePathname();
  const config = content.pages[path];
  const existing = React.Children.toArray(children);
  const items = [
    ...existing,
    ...(config?.blocks || []).map((block) => (
      <NewBlock key={block.id} block={block} />
    )),
  ];
  const idOf = (node: React.ReactNode) =>
    React.isValidElement<{ id?: string; block?: CustomBlock }>(node)
      ? node.props.id || node.props.block?.id || ""
      : "";
  const ordered = config?.order.length
    ? [...items].sort((a, b) => {
        const ia = config.order.indexOf(idOf(a)),
          ib = config.order.indexOf(idOf(b));
        return (
          (ia < 0 ? 1000 + items.indexOf(a) : ia) -
          (ib < 0 ? 1000 + items.indexOf(b) : ib)
        );
      })
    : items;
  return <div {...props}>{ordered}</div>;
}
export function SiteChrome({
  header,
  footer,
  mobile,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  mobile: React.ReactNode;
  children: React.ReactNode;
}) {
  const path = usePathname();
  if (path.startsWith("/admin")) return <>{children}</>;
  return (
    <>
      <ContentGroup id="header">{header}</ContentGroup>
      <main className="flex-grow pt-[84px] sm:pt-[92px]">{children}</main>
      <ContentGroup id="footer">
        {footer}
        {mobile}
      </ContentGroup>
    </>
  );
}

export function useContentProjects() {
  return useCms().content.projects;
}
