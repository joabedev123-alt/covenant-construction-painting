import { PROJECTS, type Project } from "@/data/projects";
export type FieldKind = "text" | "image" | "link" | "attribute";
export type Field = {
  id: string;
  kind: FieldKind;
  label: string;
  value: string;
  group: string;
};
export type ImageValue = { src: string; alt: string };
export type CustomBlock = {
  id: string;
  title: string;
  text: string;
  image: string;
  button: string;
  href: string;
  theme: "light" | "dark";
};
export type SiteContent = {
  projects: Project[];
  fields: Record<string, string | ImageValue>;
  pages: Record<
    string,
    { order: string[]; hidden: string[]; blocks: CustomBlock[] }
  >;
  settings: {
    name: string;
    phone: string;
    email: string;
    title: string;
    description: string;
    navy: string;
    gold: string;
  };
};
export type Version = { id: string; date: string; content: SiteContent };
export type ContentStore = {
  revision: number;
  draft: SiteContent;
  published: SiteContent;
  publishedAt: string | null;
  history: Version[];
};
export const PAGE_LIST = [
  { path: "/", name: "Página inicial" },
  { path: "/about", name: "Sobre a empresa" },
  { path: "/services", name: "Serviços" },
  { path: "/services/kitchen-remodeling", name: "Reforma de cozinhas" },
  { path: "/services/bathroom-remodeling", name: "Reforma de banheiros" },
  { path: "/services/painting", name: "Pintura" },
  { path: "/projects", name: "Projetos" },
  { path: "/before-after", name: "Antes e depois" },
  { path: "/contact", name: "Contato" },
];
export const EMPTY_CONTENT: SiteContent = {
  projects: PROJECTS,
  fields: {},
  pages: {},
  settings: {
    name: "Covenant Construction & Painting",
    phone: "508-405-6918",
    email: "damascenoluiz31@gmail.com",
    title: "Covenant Construction & Painting | Premium Remodeling & Painting",
    description:
      "Covenant Construction & Painting delivers thoughtful kitchen remodeling, bathroom renovations, construction improvements, and precision interior and exterior painting.",
    navy: "#071F41",
    gold: "#C79A3B",
  },
};
export function fieldKey(id: string, value: string) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++)
    hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
  return `${id}:${(hash >>> 0).toString(36)}`;
}
export function safeUrl(value: string, image = false) {
  if (!value) return true;
  if (/^[\u0000-\u0020]|[\u0000-\u001f\u007f\\]/.test(value)) return false;
  if (value.startsWith("/") && !value.startsWith("//")) return true;
  if (!image && /^(#|tel:[+\d() .-]+$|mailto:[^\s<>]+$)/i.test(value))
    return true;
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}
