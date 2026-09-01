"use client";

import {
  MapPin,
  Users,
  DollarSign,
  Star,
  ArrowRight,
  Building2,
} from "lucide-react";
import { MOCK_COMPANIES } from "@/lib/utils/mockData/Mock_Companies";

export default function Companies() {
  return (
    <section
      aria-labelledby="companies-heading"
      className="bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="companies-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Empresas Destacadas
          </h2>
          <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
            Conectamos a personas con discapacidad con oportunidades laborales
            adaptadas a sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_COMPANIES.map((company) => (
            <article
              key={company.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`size-14 rounded-xl ${company.color} flex items-center justify-center text-white text-xl font-bold shadow-sm shrink-0`}
                  aria-hidden="true"
                >
                  {company.initials}
                </div>
                <button
                  className="rounded-full p-1.5 text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3]"
                  aria-label={`Marcar ${company.name} como favorito`}
                >
                  <Star className="size-5" aria-hidden="true" />
                </button>
              </div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0a59a3] transition-colors">
                {company.name}
              </h3>
              <p className="text-sm text-gray-600 mt-0.5">{company.tagline}</p>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin
                    className="size-4 text-gray-400 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users
                    className="size-4 text-gray-400 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{company.employees} empleados</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign
                    className="size-4 text-amber-500 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{company.salary}</span>
                </div>
              </div>

              <span className="mt-3 inline-flex items-center rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600 border border-gray-100 w-fit">
                Impuestos no incluidos
              </span>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-3">
                {company.description}
              </p>

              <div className="mt-auto pt-5">
                <a
                  href={`/company/${company.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#0a59a3] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#004b8d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2"
                >
                  <Building2 className="size-4" aria-hidden="true" />
                  Ver empresa
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/companies"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2"
          >
            Explorar empresas
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
