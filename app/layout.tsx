import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.diversojob.com";

const SITE_NAME = "DiversoJob";
const SITE_DESCRIPTION =
  "DiversoJob es la plataforma de empleo inclusivo que conecta a personas con discapacidad con empresas comprometidas con la diversidad laboral en Ecuador y Latinoamérica.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Empleo inclusivo para personas con discapacidad`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "empleo inclusivo",
    "trabajo para personas con discapacidad",
    "bolsa de empleo inclusiva",
    "diversidad laboral",
    "inclusión laboral Ecuador",
    "DiversoJob",
  ],
  authors: [{ name: SITE_NAME }],
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Empleo inclusivo para personas con discapacidad`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/logos/DiversoJob.png",
        width: 120,
        height: 120,
        alt: "DiversoJob",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Empleo inclusivo para personas con discapacidad`,
    description: SITE_DESCRIPTION,
    images: ["/logos/DiversoJob.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logos/DiversoJob.png`,
  description: SITE_DESCRIPTION,
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:ring-2 focus:ring-[#0a59a3] focus:text-sm focus:font-semibold"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
