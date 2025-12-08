import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Unified Governance Platform | About Xapi",
  description: "Short description for SEO and social previews.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
