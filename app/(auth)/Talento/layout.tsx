import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Regístrate o inicia sesión",
    description:
      "Crea tu perfil de talento en DiversoJob y accede a oportunidades laborales inclusivas adaptadas a tus capacidades. Regístrate gratis o inicia sesión.",
    alternates: {
      canonical: "/Talento",
    },
    openGraph: {
      title: "Regístrate o inicia sesión | DiversoJob",
      description:
        "Crea tu perfil de talento en DiversoJob y accede a oportunidades laborales inclusivas. Regístrate gratis o inicia sesión.",
      url: "/Talento",
    },
  };
}

export default function TalentoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
