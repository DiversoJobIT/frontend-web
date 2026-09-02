"use client";

import React, { useState, useMemo } from "react";
import { MapPin, Briefcase, DollarSign, Calendar, X, ArrowRight, CheckCircle, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import Header from "@/app/landing/components/header";
import Hero from "@/app/landing/components/Hero";
import Footer from "@/app/landing/components/Footer";
import HowItWorks from "@/app/landing/components/HowItWorks";
import Blog from "@/app/landing/components/Blog";
import Companies from "@/app/landing/components/Companies";

// Mock Jobs Database for interactive search functionality
const MOCK_JOBS = [
  {
    id: 1,
    title: "Desarrollador React & Next.js Senior",
    company: "DiversoTech Solutions",
    logo: "DT",
    logoBg: "bg-blue-600",
    location: "Madrid, España",
    category: "Desarrollo de Software",
    salary: "€45,000 - €55,000 / año",
    type: "Remoto / Tiempo Completo",
    posted: "Hace 2 días",
    featured: true,
    description: "Buscamos un desarrollador Next.js con experiencia en TypeScript, Tailwind CSS y optimización SEO para liderar nuestros proyectos frontend de alto rendimiento.",
  },
  {
    id: 2,
    title: "Diseñador de Experiencia de Usuario (UI/UX)",
    company: "Creative Studio Latam",
    logo: "CS",
    logoBg: "bg-purple-600",
    location: "Barcelona, España",
    category: "Diseño",
    salary: "€38,000 - €44,000 / año",
    type: "Híbrido",
    posted: "Hace 1 día",
    featured: true,
    description: "Únete a nuestro equipo creativo para diseñar interfaces intuitivas, prototipos interactivos y realizar pruebas de usabilidad con usuarios finales.",
  },
  {
    id: 3,
    title: "Especialista en Growth Marketing & SEO",
    company: "Global Brands Agency",
    logo: "GB",
    logoBg: "bg-amber-500",
    location: "Bogotá, Colombia",
    category: "Marketing",
    salary: "$2,200 - $3,000 / mes",
    type: "Remoto",
    posted: "Hace 3 días",
    featured: false,
    description: "Buscamos un experto en posicionamiento web y estrategias de adquisición de clientes con dominio de Google Analytics, SEMrush y pauta digital.",
  },
  {
    id: 4,
    title: "Project Manager de Software (Ágil)",
    company: "Innova Software",
    logo: "IS",
    logoBg: "bg-emerald-600",
    location: "Ciudad de México, México",
    category: "Gestión de Proyectos",
    salary: "$3,500 - $4,500 / mes",
    type: "Tiempo Completo",
    posted: "Hace 5 días",
    featured: true,
    description: "Responsable de coordinar sprints de desarrollo, remover impedimentos y facilitar la comunicación entre los stakeholders y el equipo técnico.",
  },
  {
    id: 5,
    title: "Especialista de Reclutamiento y Diversidad",
    company: "DiversoJob Corp",
    logo: "DJ",
    logoBg: "bg-[#0a59a3]",
    location: "Madrid, España",
    category: "Recursos Humanos",
    salary: "€32,000 - €38,000 / año",
    type: "Presencial",
    posted: "Hace 12 horas",
    featured: true,
    description: "Ayúdanos a construir equipos inclusivos y diversos. Estarás a cargo del ciclo completo de contratación enfocándote en talento subrepresentado.",
  },
  {
    id: 6,
    title: "Ingeniero Cloud DevOps (AWS / Kubernetes)",
    company: "DiversoTech Solutions",
    logo: "DT",
    logoBg: "bg-blue-600",
    location: "Remoto (España)",
    category: "Desarrollo de Software",
    salary: "€50,000 - €60,000 / año",
    type: "Remoto",
    posted: "Hace 4 días",
    featured: false,
    description: "Buscamos un Ingeniero de DevOps para automatizar infraestructura, gestionar pipelines de CI/CD y mantener clusters de Kubernetes en producción.",
  },
  {
    id: 7,
    title: "Diseñador de Producto Digital Jr.",
    company: "Creative Studio Latam",
    logo: "CS",
    logoBg: "bg-purple-600",
    location: "Madrid, España",
    category: "Diseño",
    salary: "€25,000 - €30,000 / año",
    type: "Tiempo Completo",
    posted: "Hace 1 semana",
    featured: false,
    description: "Excelente oportunidad para diseñadores junior que quieran perfeccionar sus habilidades en Figma, sistemas de diseño y flujos de usuario complejos.",
  }
];

// Available categories for search selection
const CATEGORIES = [
  "Desarrollo de Software",
  "Diseño",
  "Marketing",
  "Gestión de Proyectos",
  "Recursos Humanos"
];

export default function HomePage() {
  const { t } = useTranslation();

  // Search States
  const [searchJob, setSearchJob] = useState("");
  const [searchWhere, setSearchWhere] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "featured">("all");

  // Selected Job for Detailed Modal
  const [selectedJob, setSelectedJob] = useState<typeof MOCK_JOBS[0] | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Derived filtered jobs - updates automatically when search params change
  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      const matchQuery =
        !searchJob ||
        job.title.toLowerCase().includes(searchJob.toLowerCase()) ||
        job.company.toLowerCase().includes(searchJob.toLowerCase()) ||
        job.description.toLowerCase().includes(searchJob.toLowerCase());

      const matchLocation =
        !searchWhere ||
        job.location.toLowerCase().includes(searchWhere.toLowerCase());

      const matchCategory =
        !searchCategory ||
        job.category === searchCategory;

      const matchTab = activeTab === "all" || job.featured;

      return matchQuery && matchLocation && matchCategory && matchTab;
    });
  }, [searchJob, searchWhere, searchCategory, activeTab]);

  // Handle Job Search
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchJob("");
    setSearchWhere("");
    setSearchCategory("");
    setActiveTab("all");
  };

  // Handle Application Submit
  const handleApply = () => {
    setShowSuccessToast(true);
    setSelectedJob(null);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] font-sans antialiased text-[#1a1a1a]">
      {/* HEADER COMPONENT */}
      <Header />

      {/* MAIN LANDING CONTAINER */}
      <main id="main-content" className="flex-1">
        {/* HERO COMPONENT */}
        <Hero
          searchJob={searchJob}
          setSearchJob={setSearchJob}
          searchWhere={searchWhere}
          setSearchWhere={setSearchWhere}
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
          handleSearch={handleSearch}
          categories={CATEGORIES}
        />

        {/*PORTAL DE EMPLEO */}
        <section id="jobs-section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {t("jobs.heading")}
              </h2>
              <p className="mt-2 text-sm text-gray-600 max-w-2xl">
                {t("jobs.subheading")}
              </p>
            </div>

            {/* Tab Controls */}
            <div className="flex items-center gap-2 mt-4 md:mt-0 bg-white border border-gray-100 p-1 rounded-xl shadow-sm">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2 ${
                  activeTab === "all"
                    ? "bg-[#0a59a3] text-white shadow-sm"
                    : "text-gray-600 hover:text-[#0a59a3] hover:bg-slate-50"
                }`}
              >
                {t("jobs.all")}
              </button>
              <button
                onClick={() => setActiveTab("featured")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2 ${
                  activeTab === "featured"
                    ? "bg-[#0a59a3] text-white shadow-sm"
                    : "text-gray-600 hover:text-[#0a59a3] hover:bg-slate-50"
                }`}
              >
                {t("jobs.featured")}
              </button>
            </div>
          </div>

          {/* Active Search Summary */}
          {(searchJob || searchWhere || searchCategory) && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs font-medium text-gray-600">Filtros activos:</span>
              {searchJob && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-gray-600">
                  &ldquo;{searchJob}&rdquo;
                  <button onClick={() => { setSearchJob(""); setTimeout(handleSearch, 50); }} className="hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] rounded-sm" aria-label={`Eliminar filtro: ${searchJob}`}>
                    <X className="size-3" aria-hidden="true" />
                  </button>
                </span>
              )}
              {searchWhere && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-gray-600">
                  <MapPin className="size-3" /> {searchWhere}
                  <button onClick={() => { setSearchWhere(""); setTimeout(handleSearch, 50); }} className="hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] rounded-sm" aria-label={`Eliminar filtro: ${searchWhere}`}>
                    <X className="size-3" aria-hidden="true" />
                  </button>
                </span>
              )}
              {searchCategory && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-gray-600">
                  <Briefcase className="size-3" /> {searchCategory}
                  <button onClick={() => { setSearchCategory(""); setTimeout(handleSearch, 50); }} className="hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] rounded-sm" aria-label={`Eliminar filtro: ${searchCategory}`}>
                    <X className="size-3" aria-hidden="true" />
                  </button>
                </span>
              )}
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-[#0a59a3] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] rounded-sm"
              >
                {t("jobs.reset")}
              </button>
            </div>
          )}

          {/* Jobs Grid */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <Briefcase className="mx-auto size-12 text-gray-300 mb-4 animate-bounce" />
              <p className="text-base text-gray-600 font-medium">{t("jobs.noResults")}</p>
              <button
                onClick={handleResetFilters}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0a59a3] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] rounded-sm"
              >
                {t("jobs.reset")} <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-100"
                >
                  {/* Job Header Info */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className={`flex size-11 items-center justify-center rounded-xl text-white font-bold text-lg shadow-sm ${job.logoBg}`}>
                        {job.logo}
                      </div>
                      <div className="flex gap-1.5">
                        {job.featured && (
                          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 border border-emerald-100">
                            Destacado
                          </span>
                        )}
                        <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-gray-600 border border-slate-100">
                          {job.posted}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0a59a3] transition-colors line-clamp-1">
                      {job.title}
                    </h3>

                    <p className="text-xs font-semibold text-gray-600 mt-1 flex items-center gap-1">
                      <Building2 className="size-3.5 text-gray-400" />
                      {job.company}
                    </p>

                    <p className="text-xs text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Job Footer Actions & Tags */}
                  <div className="mt-6 border-t border-gray-50 pt-4">
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-gray-600">
                        <MapPin className="size-3.5 text-[#0da845]" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-600">
                        <DollarSign className="size-3.5 text-amber-500" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold text-gray-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        {job.type}
                      </span>
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0a59a3] hover:text-[#004b8d] group-hover:translate-x-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] rounded-md"
                      >
                        {t("jobs.apply")} <ArrowRight className="size-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/*COMPAÑIAS DESTACADAS */}
        <Companies />

            {/* Section como funciona*/}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
         <HowItWorks />
        </section>

        {/**Section Blog */}
        <section>
          <Blog />
        </section>

        {/* FEATURES COMPONENT
        <Features />*/}
      </main>

      {/* FOOTER COMPONENT */}
      <Footer />

      {/* DETAILED JOB DESCRIPTION DRAWER/MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" role="presentation">
          <div className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200" role="dialog" aria-modal="true" aria-label={selectedJob.title}>
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className={`flex size-12 items-center justify-center rounded-2xl text-white font-bold text-xl shadow-md ${selectedJob.logoBg}`}>
                  {selectedJob.logo}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{selectedJob.title}</h3>
                  <p className="text-xs font-semibold text-gray-600">{selectedJob.company}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="rounded-lg p-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3]"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">{t("jobs.details")}</h4>
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPin className="size-4 text-[#0da845]" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Briefcase className="size-4 text-[#0a59a3]" />
                    <span>{selectedJob.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <DollarSign className="size-4 text-amber-500" />
                    <span>{selectedJob.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Calendar className="size-4 text-gray-400" />
                    <span>{selectedJob.posted}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">{t("modal.jobDescription")}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedJob.description}
                </p>
              </div>

              <div className="space-y-3 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
                <h5 className="text-xs font-bold text-emerald-800">{t("modal.inclusiveCommitment")}</h5>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  {t("modal.commitmentDesc")}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-6 border-t border-gray-100 bg-slate-50 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedJob(null)}
                className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2"
              >
                {t("jobs.close")}
              </button>
              <button
                onClick={handleApply}
                className="rounded-xl bg-[#0a59a3] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#004b8d] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2"
              >
                {t("jobs.apply")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS APPLICATION FLOATING TOAST */}
      {showSuccessToast && (
        <div role="alert" className="fixed bottom-6 left-6 z-50 max-w-sm rounded-2xl bg-slate-900 p-4 text-white shadow-2xl border border-slate-800 flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <div className="rounded-full bg-emerald-500 p-1 text-white">
            <CheckCircle className="size-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">{t("jobs.successMsg")}</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {t("jobs.successDesc")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
