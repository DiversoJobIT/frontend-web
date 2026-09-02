import { type FormEvent, useMemo, memo } from "react";
import Image from "next/image";
import { Search, MapPin, Briefcase, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

import { useWriteDeleteEffect } from "@/hooks/common/effects/use-write-delete-effect.hook";
import { useAllCategories } from "@/hooks/common/categories/use-all-categories.hook";

const TYPING_TERMS = ["tecnología", "diseño", "marketing", "negocios", "sistemas", "desarrollo"];
const TYPING_TERMS_EN = ["technology", "design", "marketing", "business", "systems", "development"];

interface HeroProps {
  searchJob: string;
  setSearchJob: (val: string) => void;
  searchWhere: string;
  setSearchWhere: (val: string) => void;
  searchCategory: string;
  setSearchCategory: (val: string) => void;
  handleSearch: (e?: FormEvent) => void;
}

export default function Hero({
  searchJob,
  setSearchJob,
  searchWhere,
  setSearchWhere,
  searchCategory,
  setSearchCategory,
  handleSearch,
}: HeroProps) {
  const { t } = useTranslation();
  const { categories, loading } = useAllCategories();

  return (
    <section aria-labelledby="hero-heading" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-[#023c24] via-[#055734] to-[#012314] px-6 py-12 shadow-xl sm:px-12 md:py-20 lg:px-16">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-linear-to-r from-[#023c24] via-transparent to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
              alt="Profesional en entrevista de trabajo"
              fill
              sizes="50vw"
              className="object-cover object-top opacity-35 mix-blend-luminosity brightness-110 contrast-110 pointer-events-none"
              priority
            />
            <div className="absolute inset-0 bg-[#0da845]/10 mix-blend-color" />
          </div>
        </div>

        <div className="relative z-20 mx-auto max-w-4xl lg:mx-0 lg:max-w-3xl">
          <h1
            id="hero-heading"
            className="text-3xl text-white sm:text-5xl lg:text-6xl"
          >
            {t("hero.title")}
          </h1>

          <p className="mt-4 text-lg font-medium text-emerald-100 sm:text-xl min-h-8" aria-live="polite" aria-atomic="true">
            {t("hero.prefix")}
            <TypedText />
          </p>

          <form onSubmit={handleSearch} className="mt-10 w-full" role="search" aria-label="Búsqueda de empleos">
            <div className="grid grid-cols-1 gap-2 px-1 text-white sm:grid-cols-12 mb-2 text-xs font-semibold tracking-wide uppercase opacity-90" aria-hidden="true">
              <div className="sm:col-span-4 pl-1">{t("hero.labelJob")}</div>
              <div className="sm:col-span-4 pl-1 hidden sm:block">{t("hero.labelWhere")}</div>
              <div className="sm:col-span-4 pl-1 hidden sm:block">{t("hero.labelCat")}</div>
            </div>

            <div className="flex flex-col gap-2 rounded-xl bg-white p-2 shadow-lg sm:flex-row sm:items-center sm:gap-0 sm:rounded-2xl">
              <div className="flex-1 px-3 py-2 sm:border-r sm:border-gray-100">
                <label htmlFor="search-job" className="sr-only">
                  {t("hero.labelJob")}
                </label>
                <div className="relative flex items-center">
                  <Search className="absolute left-0 size-4 text-gray-500" aria-hidden="true" />
                  <input
                    id="search-job"
                    type="text"
                    placeholder={t("hero.placeholderJob") || "Trabajo, habilidad..."}
                    value={searchJob}
                    onChange={(e) => setSearchJob(e.target.value)}
                    className="w-full bg-transparent pl-6 pr-2 text-sm text-gray-800 placeholder-gray-500 outline-none focus:ring-0 focus:border-transparent border-none"
                  />
                </div>
              </div>

              <div className="flex-1 px-3 py-2 sm:border-r sm:border-gray-100">
                <label htmlFor="search-where" className="sr-only">
                  {t("hero.labelWhere")}
                </label>
                <div className="relative flex items-center">
                  <MapPin className="absolute left-0 size-4 text-gray-500" aria-hidden="true" />
                  <input
                    id="search-where"
                    type="text"
                    placeholder={t("hero.placeholderWhere") || "Ciudad, Estado..."}
                    value={searchWhere}
                    onChange={(e) => setSearchWhere(e.target.value)}
                    className="w-full bg-transparent pl-6 pr-6 text-sm text-gray-800 placeholder-gray-500 outline-none focus:ring-0 focus:border-transparent border-none"
                  />
                </div>
              </div>

              <div className="flex-1 px-3 py-2">
                <label htmlFor="search-category" className="sr-only">
                  {t("hero.labelCat")}
                </label>
                <div className="relative flex items-center">
                  <Briefcase className="absolute left-0 size-4 text-gray-500" aria-hidden="true" />
                  <select
                    id="search-category"
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="w-full bg-transparent pl-6 pr-8 text-sm text-gray-800 placeholder-gray-500 outline-none appearance-none focus:ring-0 cursor-pointer border-none"
                  >
                    <option value="">{t("hero.placeholderCat") || "Selecciona Categoría"}</option>
                    {!loading && categories!.map((cat) => (
                      <option key={cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 size-4 text-gray-500 pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              <div className="pt-2 sm:pt-0 sm:pl-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#0066c0] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#00529c] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066c0] focus-visible:ring-offset-2 active:scale-[0.98]"
                >
                  {t("hero.btnBuscar")}
                </button>
              </div>
            </div>
          </form>

          <p className="mt-4 text-xs text-emerald-200/90 pl-1">
            {t("hero.advanced")}{" "}
            <a
              href="#jobs-section"
              className="font-semibold text-emerald-300 underline decoration-emerald-400/40 hover:text-emerald-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:rounded-sm"
            >
              {t("hero.advancedLink")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

const TypedText = memo(() => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "es";
  const termsList = useMemo(
    () => (currentLang === "es" ? TYPING_TERMS : TYPING_TERMS_EN),
    [currentLang],
  );
  const { typedText } = useWriteDeleteEffect(termsList);

  return (
    <span className="relative text-white font-semibold">
      {typedText}
      <span className="absolute -right-1 bottom-1 w-0.5 h-5 bg-white animate-pulse" aria-hidden="true" />
    </span>
  );
});
