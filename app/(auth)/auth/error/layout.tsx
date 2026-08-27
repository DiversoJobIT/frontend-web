import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Enlace no válido",
    description: "El enlace de verificación expiró o no es válido. Solicita uno nuevo.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function AuthErrorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
