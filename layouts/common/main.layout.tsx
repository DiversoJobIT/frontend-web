"use client";

import type { ReactNode } from "react";

import "@/lib/i18n";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <body className="min-h-full flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:ring-2 focus:ring-[#0a59a3] focus:text-sm focus:font-semibold"
      >
        Saltar al contenido principal
      </a>
      {children}
    </body>
  );
}
