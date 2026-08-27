import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Preguntas Frecuentes",
    description:
      "Resuelve tus dudas sobre DiversoJob: cómo registrarte, postular a empleos y nuestro compromiso con la inclusión laboral de personas con discapacidad.",
    alternates: {
      canonical: "/faq",
    },
    openGraph: {
      title: "Preguntas Frecuentes | DiversoJob",
      description:
        "Resuelve tus dudas sobre DiversoJob: cómo registrarte, postular a empleos y nuestro compromiso con la inclusión laboral.",
      url: "/faq",
    },
  };
}

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es DiversoJob?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DiversoJob es una plataforma de empleo inclusivo que conecta a personas con discapacidad con empresas comprometidas con la inclusión laboral.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es gratis registrarse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, registrarte y postular a empleos en DiversoJob es completamente gratis.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo aplico a un empleo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo debes registrarte, completar tu perfil y hacer clic en 'Postularme' en la oferta que te interese.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué hace diferente a DiversoJob?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos enfocamos en inclusión real, conectando talento con discapacidad con empresas comprometidas, promoviendo igualdad de oportunidades.",
      },
    },
  ],
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      {children}
    </>
  );
}
