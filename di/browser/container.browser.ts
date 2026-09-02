import "reflect-metadata";
import { Container } from "inversify";

import { TYPES_BROWSER } from "./types.browser";

import { CategoriesInMemoryQueryService } from "@/modules/common/categories/infrastructure/in-memory/categories-in-memory.query-service";

import type { CategoriesQueryService } from "@/modules/common/categories/application/queries";

export function createBrowserContainer() {
  const container = new Container();

  container
    .bind<CategoriesQueryService>(TYPES_BROWSER.CATEGORIES_QUERY_SERVICE)
    .to(CategoriesInMemoryQueryService)
    .inSingletonScope();

  return container;
}
