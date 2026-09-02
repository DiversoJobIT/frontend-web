export type GetJobsResultDTO = {
  jobs: Array<{
    id: number;
    title: string;
    company: string;
    logo: string;
    logoBg: string;
    location: string;
    category: string;
    salary: string;
    type: string;
    posted: string;
    featured: boolean;
    description: string;
  }>;
  pagination: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
};
