'use client'
import Image from "next/image";
import Interview from "@/public/icons/Interview-bro-1.svg"

const steps = [
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: "Sube tu CV",
    description: "Crea tu perfil y sube tu currículum en pocos minutos. Nosotros nos encargamos del resto."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Buscar Empleos",
    description: "Descubre vacantes en empresas que buscan tu talento."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Postula a empleos",
    description: "Aplica fácilmente y da el siguiente paso en tu carrera profesional."
  }
]

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold text-[#0a59a3]">¿Cómo funciona?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 relative">
                <div className="shrink-0 w-16 h-16 rounded-full bg-green-50 flex items-center justify-center" aria-hidden="true">
                  {step.icon}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Image
              src={Interview}
              alt="Ilustración de una entrevista laboral entre dos personas"
              width={500}
              height={450}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="text-left mt-12 lg:mt-16">
          <a
            href="/register"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-xl hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 transition-colors"
          >
            Empezar ahora
          </a>
        </div>
      </div>
    </section>
  )
}
