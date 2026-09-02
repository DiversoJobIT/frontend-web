"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n/i18n";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/DiversoJob.png";
import { X, Briefcase, FileText } from "lucide-react";

const linkClass =
  "hover:text-[#0a59a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2 rounded-sm transition-colors";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row: Logo left, Stats card right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-gray-100 mb-10">
          <Image src={Logo} alt="DiversoJob Logo" width={120} height={60} className="h-9 w-auto" />
          <div className="inline-flex items-center gap-8 rounded-2xl bg-slate-50 border border-gray-100 px-8 py-4 shadow-xs">
            <div className="flex items-center gap-3">
              <Briefcase className="size-5 text-[#0a59a3] shrink-0" aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold text-gray-900 leading-none">1124</p>
                <p className="text-xs text-gray-600 mt-1">{t("footer.statsJobs")}</p>
              </div>
            </div>
            <div className="w-px h-10 bg-gray-200" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <FileText className="size-5 text-[#0da845] shrink-0" aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold text-gray-900 leading-none">421</p>
                <p className="text-xs text-gray-600 mt-1">{t("footer.statsResumes")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Para Candidatos */}
          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">{t("footer.candidates")}</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-600">
              <li><a href="/browse-jobs" className={linkClass}>{t("footer.cBrowseJobs")}</a></li>
              <li><a href="/browse-categories" className={linkClass}>{t("footer.cBrowseCategories")}</a></li>
              <li><Link href="/register-login" className={linkClass}>{t("footer.cDashboard")}</Link></li>
              <li><a href="/job-alerts" className={linkClass}>{t("footer.cJobAlerts")}</a></li>
              <li><a href="/my-bookmarks" className={linkClass}>{t("footer.cBookmarks")}</a></li>
            </ul>
          </div>

          {/* Para Empresas */}
          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">{t("footer.companies")}</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-600">
              <li><a href="/resumes" className={linkClass}>{t("footer.coBrowseCandidates")}</a></li>
              <li><Link href="/register-login" className={linkClass}>{t("footer.coDashboard")}</Link></li>
              <li><a href="/post-a-job" className={linkClass}>{t("footer.coAddJob")}</a></li>
              <li><a href="/job-packages" className={linkClass}>{t("footer.coPackages")}</a></li>
            </ul>
          </div>

          {/* Otros */}
          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">{t("footer.otros")}</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-600">
              <li><a href="/job/1" className={linkClass}>{t("footer.oJobPage")}</a></li>
              <li><a href="/task/1" className={linkClass}>{t("footer.oTaskPage")}</a></li>
              <li><a href="/resume/1" className={linkClass}>{t("footer.oResumePage")}</a></li>
              <li><a href="/blog" className={linkClass}>{t("footer.oBlog")}</a></li>
              <li><a href="/contact" className={linkClass}>{t("footer.oContact")}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">{t("footer.legal")}</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-600">
              <li><a href="/privacy-policy" className={linkClass}>{t("footer.lPrivacy")}</a></li>
              <li><a href="/terms" className={linkClass}>{t("footer.lTerms")}</a></li>
              <li><a href="/faq" className={linkClass}>{t("footer.lFaq")}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">{t("footer.rights")}</p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#0a59a3] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2"
              aria-label="Facebook"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#0a59a3] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2"
              aria-label="X (Twitter)"
            >
              <X className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
