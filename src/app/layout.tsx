import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "CTS",
  description: "CatastroTech Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-neutral-950 text-white">
        <SiteHeader />
        <main className="min-h-dvh">{children}</main>
      </body>
    </html>
  );
}
