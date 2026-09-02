import { createContext, useState, type FormEvent } from "react";

import type { GetJobsResultDTO } from "@/modules/common/jobs/application/dtos";

export const JobSearchContext = createContext({
  searchJob: "",
  setSearchJob: (searchJob: string) => {},
  searchWhere: "",
  setSearchWhere: (searchWhere: string) => {},
  searchCategory: "",
  setSearchCategory: (searchCategory: string) => {},
  activeTab: "all",
  setActiveTab: (activeTab: "all" | "featured") => {},
  handleResetFilters: () => {},
  handleSearch: (e?: FormEvent) => {},
  selectedJob: null as any,
  setSelectedJob: (selectedJob: GetJobsResultDTO["jobs"][number] | null) => {},
});

export function JobSearchProvider({ children }: { children: React.ReactNode }) {
  const [searchJob, setSearchJob] = useState("");
  const [searchWhere, setSearchWhere] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "featured">("all");
  const [selectedJob, setSelectedJob] = useState<GetJobsResultDTO["jobs"][number] | null>(null);

  const handleResetFilters = () => {
    setSearchJob("");
    setSearchWhere("");
    setSearchCategory("");
    setActiveTab("all");
  };

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
  };

  return (
    <JobSearchContext.Provider
      value={{
        searchJob,
        setSearchJob,
        searchWhere,
        setSearchWhere,
        searchCategory,
        setSearchCategory,
        activeTab,
        setActiveTab,
        handleResetFilters,
        handleSearch,
        selectedJob,
        setSelectedJob,
      }}
    >
      {children}
    </JobSearchContext.Provider>
  );
}
