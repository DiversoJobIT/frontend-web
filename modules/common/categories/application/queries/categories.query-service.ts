import { GetAllCategoriesResultDTO } from "../dtos";

export interface CategoriesQueryService {
  getAllCategories(): Promise<GetAllCategoriesResultDTO>;
}
