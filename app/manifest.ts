import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DiversoJob | Empleo inclusivo para personas con discapacidad",
    short_name: "DiversoJob",
    description:
      "Plataforma de empleo inclusivo que conecta a personas con discapacidad con empresas comprometidas con la diversidad laboral en Ecuador y Latinoamérica.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a59a3",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32",
        type: "image/x-icon",
      },
    ],
  };
}
