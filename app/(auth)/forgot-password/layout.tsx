import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Recuperar contraseña",
    description:
      "Recupera el acceso a tu cuenta de DiversoJob solicitando un enlace para restablecer tu contraseña.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return children;
}
