import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unified Governance Platform - Xapi",
  description: "Short description for SEO and social previews.",
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
