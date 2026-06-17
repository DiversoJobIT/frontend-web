"use client";

import { useState } from "react";
import { ChevronDown, Lock, PlusCircle, Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/lib/i18n"; // ensure initialized

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo container with vertical right divider */}
        <div className="flex h-16 items-center px-6 border-r border-gray-100 md:h-20 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <Image src="/DiversoJob.png" alt="DiversoJob Logo" width={120} height={120} className="h-8 w-auto" />
          </a>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden flex-1 items-center justify-start gap-1 px-8 md:flex">
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#0a59a3]">
              {t("nav.inicio")} <ChevronDown className="size-3.5 text-gray-400 group-hover:text-[#0a59a3] transition-colors" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#0a59a3]">
              {t("nav.candidatos")} <ChevronDown className="size-3.5 text-gray-400 group-hover:text-[#0a59a3] transition-colors" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#0a59a3]">
              {t("nav.empresas")} <ChevronDown className="size-3.5 text-gray-400 group-hover:text-[#0a59a3] transition-colors" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#0a59a3]">
              {t("nav.contacto")} <ChevronDown className="size-3.5 text-gray-400 group-hover:text-[#0a59a3] transition-colors" />
            </button>
          </div>
          <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#0a59a3]">
            {t("nav.blog")}
          </a>
        </nav>

        {/* Right Action Buttons with language selector & vertical dividers */}
        <div className="hidden h-16 items-center gap-6 border-l border-gray-100 px-6 md:flex md:h-20 lg:px-8">
          {/* Header Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-[#0a59a3] transition-colors"
            >
              <span>{i18n.language === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}</span>
              <ChevronDown className="size-3 text-gray-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 rounded-lg bg-white p-1 shadow-lg border border-gray-100 animate-in fade-in slide-in-from-top-1 duration-100">
                <button
                  onClick={() => toggleLanguage("es")}
                  className={`w-full rounded-md px-2.5 py-1.5 text-left text-xs font-semibold ${
                    i18n.language === "es" ? "bg-slate-50 text-[#0a59a3]" : "text-gray-600 hover:bg-slate-50 hover:text-[#0a59a3]"
                  }`}
                >
                  🇪🇸 Spanish
                </button>
                <button
                  onClick={() => toggleLanguage("en")}
                  className={`w-full rounded-md px-2.5 py-1.5 text-left text-xs font-semibold ${
                    i18n.language === "en" ? "bg-slate-50 text-[#0a59a3]" : "text-gray-600 hover:bg-slate-50 hover:text-[#0a59a3]"
                  }`}
                >
                  🇺🇸 English
                </button>
              </div>
            )}
          </div>

          <a
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-[#0a59a3]"
          >
            <div className="rounded-full bg-slate-100 p-1.5 text-gray-600">
              <Lock className="size-4" />
            </div>
            {t("nav.registroEmpresa")}
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-xl bg-[#0a59a3] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#004b8d] hover:shadow-md"
          >
            <PlusCircle className="size-4" />
            {t("nav.registro")}
          </a>
        </div>

        {/* Mobile Menu Icon & Mobile Lang Selector */}
        <div className="flex items-center gap-3 px-6 md:hidden">
          <button
            onClick={() => toggleLanguage(i18n.language === "es" ? "en" : "es")}
            className="text-sm font-semibold text-gray-600 hover:text-[#0a59a3] px-1 py-1 rounded"
            title="Cambiar idioma"
          >
            {i18n.language === "es" ? "🇺🇸 EN" : "🇪🇸 ES"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden shadow-lg transition-all animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-3">
            <a href="#" className="py-2 text-base font-semibold text-gray-800 hover:text-[#0a59a3]">
              {t("nav.inicio")}
            </a>
            <a href="#" className="py-2 text-base font-semibold text-gray-800 hover:text-[#0a59a3]">
              {t("nav.candidatos")}
            </a>
            <a href="#" className="py-2 text-base font-semibold text-gray-800 hover:text-[#0a59a3]">
              {t("nav.empresas")}
            </a>
            <a href="#" className="py-2 text-base font-semibold text-gray-800 hover:text-[#0a59a3]">
              {t("nav.contacto")}
            </a>
            <a href="#" className="py-2 text-base font-semibold text-gray-800 hover:text-[#0a59a3]">
              {t("nav.blog")}
            </a>
            <div className="my-2 h-px bg-gray-100" />
            <a href="#" className="flex items-center gap-2 py-2 text-base font-semibold text-gray-700 hover:text-[#0a59a3]">
              <Lock className="size-4" />
              {t("nav.registroEmpresa")}
            </a>
            <a href="#" className="flex items-center justify-center gap-2 rounded-xl bg-[#0a59a3] py-2.5 text-base font-semibold text-white">
              <PlusCircle className="size-4" />
              {t("nav.registro")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
