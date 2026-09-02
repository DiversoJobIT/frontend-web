import { useTranslation } from "react-i18next";
import { MapPin, Briefcase, DollarSign, Calendar, X, CheckCircle } from "lucide-react";
import { useContext, useState } from "react";

import { JobSearchContext } from "@/contexts/talent/job-search.context";

export default function JobDetailsDialog() {
  const { t } = useTranslation();
  const { selectedJob, setSelectedJob } = useContext(JobSearchContext);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleApply = () => {
    setShowSuccessToast(true);
    setSelectedJob(null);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 4000);
  };

  if (showSuccessToast) {
    return (
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
    );
  }

  if (!selectedJob) {
    return null;
  }

  return (
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
  );
}
