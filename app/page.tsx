import type { Metadata } from "next";
import LandingPage from "./(public)/page/page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Empleo inclusivo para personas con discapacidad",
    description:
      "Encuentra empleo inclusivo en DiversoJob: conectamos a personas con discapacidad con empresas comprometidas con la diversidad laboral. Explora vacantes y postula gratis.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "DiversoJob | Empleo inclusivo para personas con discapacidad",
      description:
        "Conectamos a personas con discapacidad con empresas comprometidas con la diversidad laboral. Explora vacantes y postula gratis.",
      url: "/",
    },
  };
}

export default function Home() {
  return <LandingPage />;
}
