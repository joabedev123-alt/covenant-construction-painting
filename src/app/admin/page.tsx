import type { Metadata } from "next";
import { authenticated, getCredentials } from "@/lib/cms/auth";
import { readStore } from "@/lib/cms/store";
import { AdminPanel } from "@/components/cms/AdminPanel";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Painel administrativo",
  robots: { index: false, follow: false },
};
export default async function AdminPage() {
  const loggedIn = await authenticated();
  return (
    <AdminPanel
      loggedIn={loggedIn}
      initialized={!!(await getCredentials())}
      tokenRequired={!!process.env.ADMIN_SETUP_TOKEN}
      initialStore={loggedIn ? await readStore() : null}
    />
  );
}
