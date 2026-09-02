import "reflect-metadata";
import { Container } from "inversify";

import { TYPES_BROWSER } from "./types.browser";

import { CategoriesInMemoryQueryService } from "@/modules/common/categories/infrastructure/in-memory/categories-in-memory.query-service";
import { JobsInMemoryQueryService } from "@/modules/common/jobs/infrastructure/in-memory/jobs-in-memory.query-service";

import type { CategoriesQueryService } from "@/modules/common/categories/application/queries";
import type { JobsQueryService } from "@/modules/common/jobs/application/queries";

export function createBrowserContainer() {
  const container = new Container();

  container
    .bind<CategoriesQueryService>(TYPES_BROWSER.CATEGORIES_QUERY_SERVICE)
    .to(CategoriesInMemoryQueryService)
    .inSingletonScope();
  container
    .bind<JobsQueryService>(TYPES_BROWSER.JOBS_QUERY_SERVICE)
    .to(JobsInMemoryQueryService)
    .inSingletonScope();

  return container;
}
