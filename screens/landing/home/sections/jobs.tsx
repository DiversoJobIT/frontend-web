import { useContext } from "react";
import { MapPin, Briefcase, DollarSign, X, ArrowRight, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import { JobSearchContext } from "@/contexts/talent/job-search.context";

import { useGetJobs } from "@/hooks/talent/jobs/use-get-jobs";

export default function Jobs() {
  const { t } = useTranslation();
  const { filteredJobs } = useGetJobs({ page: 1, limit: 10 });
  const {
    searchJob,
    searchWhere,
    searchCategory,
    setActiveTab,
    activeTab,
    setSearchJob,
    setSearchWhere,
    setSearchCategory,
    handleSearch,
    handleResetFilters,
    setSelectedJob,
  } = useContext(JobSearchContext);

  return (
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
  );
}
