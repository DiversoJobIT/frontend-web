"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, MapPin, Briefcase, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

const TYPING_TERMS = ["tecnología", "diseño", "marketing", "negocios", "sistemas", "desarrollo"];
const TYPING_TERMS_EN = ["technology", "design", "marketing", "business", "systems", "development"];

interface HeroProps {
  searchJob: string;
  setSearchJob: (val: string) => void;
  searchWhere: string;
  setSearchWhere: (val: string) => void;
  searchCategory: string;
  setSearchCategory: (val: string) => void;
  handleSearch: (e?: React.FormEvent) => void;
  categories: string[];
}

export default function Hero({
  searchJob,
  setSearchJob,
  searchWhere,
  setSearchWhere,
  searchCategory,
  setSearchCategory,
  handleSearch,
  categories,
}: HeroProps) {
  const { t, i18n } = useTranslation();

  // Subtitle Typewriter Effect
  const [typedText, setTypedText] = useState("");
  const [termIndex, setTermIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentLang = i18n.language || "es";
  const termsList = currentLang === "es" ? TYPING_TERMS : TYPING_TERMS_EN;

  // Typewriter loop
  useEffect(() => {
    const currentTerm = termsList[termIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentTerm.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 70);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentTerm.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 120);
    }

    if (!isDeleting && charIndex === currentTerm.length) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTermIndex((prev) => (prev + 1) % termsList.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, termIndex, termsList]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-[#023c24] via-[#055734] to-[#012314] px-6 py-12 shadow-xl sm:px-12 md:py-20 lg:px-16">
        {/* Background Professional Woman Overlay matching the original image */}
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          {/* Green blend-mode container */}
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-linear-to-r from-[#023c24] via-transparent to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
              alt="Profesional apuntando"
              fill
              sizes="50vw"
              className="object-cover object-top opacity-35 mix-blend-luminosity brightness-110 contrast-110 pointer-events-none"
              priority
            />
            {/* A subtle green radial glow matching the picture */}
            <div className="absolute inset-0 bg-[#0da845]/10 mix-blend-color" />
          </div>
        </div>

        {/* Content block */}
        <div className="relative z-20 mx-auto max-w-4xl lg:mx-0 lg:max-w-3xl">
          {/* Title */}
          <h1 className="text-3xl font-sans  text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>

          {/* Subtitle with active typewriter effect */}
          <p className="mt-4 text-lg font-medium text-emerald-100 sm:text-xl min-h-8">
            {t("hero.prefix")}
            <span className="relative text-white font-semibold">
              {typedText}
              <span className="absolute -right-1 bottom-1 w-0.5 h-5 bg-white animate-pulse" />
            </span>
          </p>

          {/* SEARCH FORM CONTAINER */}
          <form onSubmit={handleSearch} className="mt-10 w-full">
            {/* Search Inputs Header Labels */}
            <div className="grid grid-cols-1 gap-2 px-1 text-white sm:grid-cols-12 mb-2 text-xs font-semibold tracking-wide uppercase opacity-90">
              <div className="sm:col-span-4 pl-1">{t("hero.labelJob")}</div>
              <div className="sm:col-span-4 pl-1 hidden sm:block">{t("hero.labelWhere")}</div>
              <div className="sm:col-span-4 pl-1 hidden sm:block">{t("hero.labelCat")}</div>
            </div>

            {/* Horizontal Search Bar Layout */}
            <div className="flex flex-col gap-2 rounded-xl bg-white p-2 shadow-lg sm:flex-row sm:items-center sm:gap-0 sm:rounded-2xl">

              {/* Field 1: Job, Skill, Industry */}
              <div className="flex-1 px-3 py-2 sm:border-r sm:border-gray-100">
                <label className="block text-[10px] font-bold text-gray-400 uppercase sm:hidden mb-1">
                  {t("hero.labelJob")}
                </label>
                <div className="relative flex items-center">
                  <Search className="absolute left-0 size-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t("hero.placeholderJob") || "Trabajo, habilidad..."}
                    value={searchJob}
                    onChange={(e) => setSearchJob(e.target.value)}
                    className="w-full bg-transparent pl-6 pr-2 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-0 focus:border-transparent border-none"
                  />
                </div>
              </div>

              {/* Field 2: City, State */}
              <div className="flex-1 px-3 py-2 sm:border-r sm:border-gray-100">
                <label className="block text-[10px] font-bold text-gray-400 uppercase sm:hidden mb-1">
                  {t("hero.labelWhere")}
                </label>
                <div className="relative flex items-center">
                  <MapPin className="absolute left-0 size-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t("hero.placeholderWhere") || "Ciudad, Estado..."}
                    value={searchWhere}
                    onChange={(e) => setSearchWhere(e.target.value)}
                    className="w-full bg-transparent pl-6 pr-6 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-0 focus:border-transparent border-none"
                  />

                </div>
              </div>

              {/* Field 3: Categories */}
              <div className="flex-1 px-3 py-2">
                <label className="block text-[10px] font-bold text-gray-400 uppercase sm:hidden mb-1">
                  {t("hero.labelCat")}
                </label>
                <div className="relative flex items-center">
                  <Briefcase className="absolute left-0 size-4 text-gray-400" />
                  <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="w-full bg-transparent pl-6 pr-8 text-sm text-gray-800 placeholder-gray-400 outline-none appearance-none focus:ring-0 cursor-pointer border-none"
                  >
                    <option value="">{t("hero.placeholderCat") || "Selecciona Categoría"}</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 size-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-0 sm:pl-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#0066c0] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#00529c] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0066c0] focus:ring-offset-2 active:scale-[0.98]"
                >
                  {t("hero.btnBuscar")}
                </button>
              </div>
            </div>
          </form>

          {/* Advanced Search Link */}
          <p className="mt-4 text-xs text-emerald-200/90 pl-1">
            {t("hero.advanced")}{" "}
            <a
              href="#jobs-section"
              className="font-semibold text-emerald-300 underline decoration-emerald-400/40 hover:text-emerald-100 transition-colors"
            >
              {t("hero.advancedLink")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
