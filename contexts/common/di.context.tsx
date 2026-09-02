"use client";

import { createContext, useMemo } from "react";
import { Container } from "inversify";

import { createBrowserContainer } from "@/di/browser/container.browser";

export const DIContext = createContext<Container>(createBrowserContainer());

export function DIProvider({ children }: { children: React.ReactNode }) {
  const container = useMemo(() => createBrowserContainer(), [])

  return (
    <DIContext.Provider value={container}>
      {children}
    </DIContext.Provider>
  );
}
