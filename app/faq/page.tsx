"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    q: "¿Qué es DiversoJob?",
    a: "DiversoJob es una plataforma de empleo inclusivo que conecta a personas con discapacidad con empresas comprometidas con la inclusión laboral.",
  },
  {
    q: "¿Es gratis registrarse?",
    a: "Sí, registrarte y postular a empleos en DiversoJob es completamente gratis.",
  },
  {
    q: "¿Cómo aplico a un empleo?",
    a: "Solo debes registrarte, completar tu perfil y hacer clic en 'Postularme' en la oferta que te interese.",
  },
  {
    q: "¿Qué hace diferente a DiversoJob?",
    a: "Nos enfocamos en inclusión real, conectando talento con discapacidad con empresas comprometidas, promoviendo igualdad de oportunidades.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden transition-all">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-gray-900 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        {question}
        <ChevronDown
          className={`size-5 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-150">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="flex-1 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Preguntas Frecuentes
        </h1>
        <p className="mt-3 text-base text-gray-600">
          Resolvemos tus dudas sobre DiversoJob
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.q}
            answer={faq.a}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </main>
  );
}
