import React, { Suspense } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case study | Unified Governance Platform - Xapi",
  description: "Short description for SEO and social previews.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Suspense fallback={<div />}>
        {/* client nav uses next/navigation hooks */}
      </Suspense>
      {/* wrap children in Suspense so client pages using next/navigation hooks won't cause a CSR bailout during prerender */}
      <Suspense fallback={<div />}>{children}</Suspense>
    </main>
  );
}
