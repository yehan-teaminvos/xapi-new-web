import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unified Governance Platform | Contact Us",
  description: "Short description for SEO and social previews.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
