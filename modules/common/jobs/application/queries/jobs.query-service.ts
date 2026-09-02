import type { GetJobsResultDTO } from "../dtos";

export interface JobsQueryService {
  getJobs(pagination: { page: number; limit: number }): Promise<GetJobsResultDTO>;
}
