import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Actualizar contraseña",
    description: "Elige una nueva contraseña segura para tu cuenta de DiversoJob.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function UpdatePasswordLayout({ children }: { children: React.ReactNode }) {
  return children;
}
