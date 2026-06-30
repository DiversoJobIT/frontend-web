"use client";

import React from "react";
import { Globe, CheckCircle, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function Features() {
  const { t } = useTranslation();

  return (
    <section className="bg-slate-50 border-y border-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t("features.title")}
          </h2>
          <p className="mt-2 text-gray-600 text-sm">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="size-10 bg-blue-50 text-[#0a59a3] rounded-xl flex items-center justify-center mb-4">
              <Globe className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{t("features.card1Title")}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("features.card1Desc")}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="size-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{t("features.card2Title")}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("features.card2Desc")}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="size-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{t("features.card3Title")}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("features.card3Desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
