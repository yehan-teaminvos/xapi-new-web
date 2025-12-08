import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unified Solutions for Data, API, and AI Governance",
  description: "Short description for SEO and social previews.",
};

export default function SolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
