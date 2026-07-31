"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Lock, PlusCircle, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

interface SubItem {
  label: string;
  href: string;
}

interface NavItemData {
  key: string;
  label: string;
  href?: string;
  subItems?: SubItem[];
}

const NAV_ITEMS: Omit<NavItemData, "label">[] = [
  {
    key: "inicio",
    subItems: [
      { label: "Inicio", href: "/" },
      { label: "Nuestra Historia", href: "/about" },
      { label: "DiversoJob", href: "/services" },
      { label: "Por qué Elegirnos", href: "/why-choose-me" },
    ],
  },
  {
    key: "candidatos",
    subItems: [
      { label: "Buscar Empleos", href: "/browse-jobs" },
      { label: "  Mapa de empleos", href: "/browse-jobs" },
      { label: "  Ver todas las vacantes", href: "/browse-jobs-list" },
      { label: "Oportunidades Freelance", href: "/freelance" },
      { label: "  Ver Proyectos", href: "/projects" },
      { label: "Explorar empresas", href: "/companies" },
      { label: "Subir mi CV", href: "/submit-resume" },
      { label: "Mi Panel", href: "/candidate-dashboard" },
    ],
  },
  {
    key: "empresas",
    subItems: [
      { label: "Buscar Talento", href: "/resumes" },
      { label: "  Explorar talentos", href: "/resumes-list" },
      { label: "  Mapa de talentos", href: "/browse-candidates-map" },
      { label: "Publicar Empleo", href: "/post-a-job" },
      { label: "Registrar Empresa", href: "/submit-company" },
      { label: "Panel de Empresa", href: "/manage-jobs" },
    ],
  },
  {
    key: "contacto",
    subItems: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    key: "blog",
    href: "/blog",
  },
];

function DesktopDropdown({ item }: { item: NavItemData }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!item.subItems) {
    return (
      <Link
        href={item.href || "#"}
        className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#0a59a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2 rounded-md"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#0a59a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2 rounded-md"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={`size-3.5 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          className="absolute left-0 mt-1 w-56 rounded-xl bg-white p-1.5 shadow-lg border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-150"
          role="menu"
        >
          {item.subItems.map((sub, idx) => {
            const isSub = sub.label.startsWith("  ");
            const cleanLabel = sub.label.trim();
            return (
              <Link
                key={idx}
                href={sub.href}
                role="menuitem"
                className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-slate-50 hover:text-[#0a59a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] ${
                  isSub
                    ? "pl-8 text-gray-500 font-normal"
                    : "font-medium text-gray-700"
                }`}
                onClick={() => setOpen(false)}
              >
                {cleanLabel}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function MobileSubMenu({ item }: { item: NavItemData }) {
  const [open, setOpen] = useState(false);

  if (!item.subItems) {
    return (
      <Link
        href={item.href || "#"}
        className="block py-2 text-base font-semibold text-gray-800 hover:text-[#0a59a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] rounded-md px-2"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-2 text-base font-semibold text-gray-800 hover:text-[#0a59a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] rounded-md px-2"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={`size-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="ml-4 mt-1 mb-2 flex flex-col gap-1 pl-2 border-l-2 border-gray-100">
          {item.subItems.map((sub, idx) => {
            const isSub = sub.label.startsWith("  ");
            const cleanLabel = sub.label.trim();
            return (
              <Link
                key={idx}
                href={sub.href}
                className={`block py-1.5 text-sm rounded-md px-2 transition-colors hover:text-[#0a59a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] ${
                  isSub ? "pl-6 text-gray-500" : "font-medium text-gray-700"
                }`}
              >
                {cleanLabel}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const mobileBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      mobileMenuRef.current.querySelector<HTMLAnchorElement>("a, button")?.focus();
    }
  }, [mobileMenuOpen]);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangDropdownOpen(false);
  };

  const navLabel = (key: string) => {
    const map: Record<string, string> = {
      inicio: t("nav.inicio"),
      candidatos: t("nav.candidatos"),
      empresas: t("nav.empresas"),
      contacto: t("nav.contacto"),
      blog: t("nav.blog"),
    };
    return map[key] || key;
  };

  const items: NavItemData[] = NAV_ITEMS.map((item) => ({
    ...item,
    label: navLabel(item.key),
  }));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex h-16 items-center px-6 border-r border-gray-100 md:h-20 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Ir al inicio">
            <Image src="/DiversoJob.png" alt="DiversoJob Logo" width={120} height={120} className="h-8 w-auto" />
          </Link>
        </div>

        <nav aria-label="Navegación principal" className="hidden flex-1 items-center justify-start gap-1 px-8 md:flex">
          {items.map((item) => (
            <DesktopDropdown key={item.key} item={item} />
          ))}
        </nav>

        <div className="hidden h-16 items-center gap-6 border-l border-gray-100 px-6 md:flex md:h-20 lg:px-8">
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#0a59a3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2 rounded-md px-1"
              aria-expanded={langDropdownOpen}
              aria-haspopup="listbox"
              aria-label={`Idioma actual: ${i18n.language === "es" ? "Español" : "Inglés"}`}
            >
              <span aria-hidden="true">{i18n.language === "es" ? "🇪🇸" : "🇺🇸"}</span>
              <span className="sr-only">{i18n.language === "es" ? "Español" : "English"}</span>
              <span className="text-xs font-semibold">{i18n.language === "es" ? "ES" : "EN"}</span>
              <ChevronDown className="size-3 text-gray-500" aria-hidden="true" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-lg bg-white p-1 shadow-lg border border-gray-100 animate-in fade-in slide-in-from-top-1 duration-100" role="listbox" aria-label="Seleccionar idioma">
                <button
                  onClick={() => toggleLanguage("es")}
                  className={`w-full rounded-md px-2.5 py-1.5 text-left text-xs font-semibold ${
                    i18n.language === "es" ? "bg-slate-50 text-[#0a59a3]" : "text-gray-700 hover:bg-slate-50 hover:text-[#0a59a3]"
                  }`}
                  role="option"
                  aria-selected={i18n.language === "es"}
                >
                  <span aria-hidden="true">🇪🇸</span> Español
                </button>
                <button
                  onClick={() => toggleLanguage("en")}
                  className={`w-full rounded-md px-2.5 py-1.5 text-left text-xs font-semibold ${
                    i18n.language === "en" ? "bg-slate-50 text-[#0a59a3]" : "text-gray-700 hover:bg-slate-50 hover:text-[#0a59a3]"
                  }`}
                  role="option"
                  aria-selected={i18n.language === "en"}
                >
                  <span aria-hidden="true">🇺🇸</span> English
                </button>
              </div>
            )}
          </div>

          <Link
            href="/register-login?tab=login"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-[#0a59a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2 rounded-md px-1"
          >
            <div className="rounded-full bg-slate-100 p-1.5 text-gray-600" aria-hidden="true">
              <Lock className="size-4" />
            </div>
            {t("nav.registroEmpresa")}
          </Link>
          <Link
            href="/register-login?tab=register"
            className="flex items-center gap-2 rounded-xl bg-[#0a59a3] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#004b8d] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2"
          >
            <PlusCircle className="size-4" aria-hidden="true" />
            {t("nav.registro")}
          </Link>
        </div>

        <div className="flex items-center gap-3 px-6 md:hidden">
          <button
            onClick={() => toggleLanguage(i18n.language === "es" ? "en" : "es")}
            className="text-sm font-semibold text-gray-700 hover:text-[#0a59a3] px-1 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3]"
            aria-label={`Cambiar idioma a ${i18n.language === "es" ? "Inglés" : "Español"}`}
          >
            <span aria-hidden="true">{i18n.language === "es" ? "🇺🇸" : "🇪🇸"}</span>
            <span className="sr-only">{i18n.language === "es" ? "English" : "Español"}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            ref={mobileBtnRef}
          >
            {mobileMenuOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-100 bg-white px-6 py-4 md:hidden shadow-lg animate-in fade-in slide-in-from-top-5 duration-200"
          role="navigation"
          aria-label="Menú de navegación móvil"
          ref={mobileMenuRef}
        >
          <nav className="flex flex-col gap-1">
            {items.map((item) => (
              <MobileSubMenu key={item.key} item={item} />
            ))}
            <div className="my-2 h-px bg-gray-100" />
            <Link
              href="/register-login?tab=login"
              className="flex items-center gap-2 py-2 text-base font-semibold text-gray-700 hover:text-[#0a59a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] rounded-md px-2"
            >
              <Lock className="size-4" aria-hidden="true" />
              {t("nav.registroEmpresa")}
            </Link>
            <Link
              href="/register-login?tab=register"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#0a59a3] py-2.5 text-base font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2"
            >
              <PlusCircle className="size-4" aria-hidden="true" />
              {t("nav.registro")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
