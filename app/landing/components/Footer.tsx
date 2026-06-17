"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import Image from "next/image";
import Logo from "@/public/DiversoJob.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src={Logo} alt="DiversoJob Logo" width={100} height={50} />

           </div>
           </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">{t("footer.candidates")}</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-500">
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.c1")}</a></li>
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.c2")}</a></li>
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.c3")}</a></li>
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.c4")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">{t("footer.companies")}</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-500">
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.co1")}</a></li>
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.co2")}</a></li>
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.co3")}</a></li>
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.co4")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">{t("footer.community")}</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-500">
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.com1")}</a></li>
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.com2")}</a></li>
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.com3")}</a></li>
              <li><a href="#" className="hover:text-[#0a59a3]">{t("footer.com4")}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>{t("footer.rights")}</p>
          <p className="flex items-center gap-1 text-slate-300">
            {t("footer.madeWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
