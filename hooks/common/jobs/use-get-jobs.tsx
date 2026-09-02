import { useQuery } from "react-query";
import { useMemo, useContext } from "react";

import { TYPES_BROWSER } from "@/di/browser/types.browser";

import { JobSearchContext } from "@/contexts/common/job-search.context";

import { useDI } from "../di/use-di.hook";

import type { GetJobsResultDTO } from "@/modules/common/jobs/application/dtos";
import type { JobsQueryService } from "@/modules/common/jobs/application/queries";

export function useGetJobs(pagination: { page: number; limit: number }) {
  const {
    searchJob,
    searchWhere,
    searchCategory,
    activeTab,
  } = useContext(JobSearchContext);
  const jobsQueryService = useDI<JobsQueryService>(TYPES_BROWSER.JOBS_QUERY_SERVICE);
  const { data: jobs, isLoading: loading } = useQuery<GetJobsResultDTO>(`JOBS_${JSON.stringify(pagination).toUpperCase()}`, () => {
    return jobsQueryService.getJobs(pagination);
  });
  const filteredJobs = useMemo(() => {
    return jobs?.jobs.filter((job) => {
      const matchQuery =
        !searchJob ||
        job.title.toLowerCase().includes(searchJob.toLowerCase()) ||
        job.company.toLowerCase().includes(searchJob.toLowerCase()) ||
        job.description.toLowerCase().includes(searchJob.toLowerCase());

      const matchLocation =
        !searchWhere ||
        job.location.toLowerCase().includes(searchWhere.toLowerCase());

      const matchCategory =
        !searchCategory ||
        job.category === searchCategory;

      const matchTab = activeTab === "all" || job.featured;

      return matchQuery && matchLocation && matchCategory && matchTab;
    }) || [];
  }, [jobs, searchJob, searchWhere, searchCategory, activeTab]);
  
  return {
    loading,
    filteredJobs,
  };
}
