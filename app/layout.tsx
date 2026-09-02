import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { DIProvider } from "@/contexts/common/di.context";

import MainLayout from "@/layouts/common/main.layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DiversoJob",
  description: "DiversoJob es una plataforma de empleo inclusiva que conecta a persona con discapacidad con oportunidades laborales adaptadas a sus necesidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <DIProvider>
        <MainLayout>
          {children}
        </MainLayout>
      </DIProvider>
    </html>
  );
}
