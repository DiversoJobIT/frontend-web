import { useQuery } from "react-query";

import { TYPES_BROWSER } from "@/di/browser/types.browser";

import { useDI } from "../di/use-di.hook";

import type { GetAllCategoriesResultDTO } from "@/modules/common/categories/application/dtos";
import type { CategoriesQueryService } from "@/modules/common/categories/application/queries";

export function useAllCategories() {
  const categoriesQueryService = useDI<CategoriesQueryService>(TYPES_BROWSER.CATEGORIES_QUERY_SERVICE);
  const { data: categories, isLoading: loading } = useQuery<GetAllCategoriesResultDTO>("ALL_CATEGORIES", () => {
    return categoriesQueryService.getAllCategories();
  });
  
  return {
    categories,
    loading,
  };
}
