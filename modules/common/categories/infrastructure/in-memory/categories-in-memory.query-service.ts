import type { CategoriesQueryService } from "../../application/queries";
import type { GetAllCategoriesResultDTO } from "../../application/dtos";

export class CategoriesInMemoryQueryService implements CategoriesQueryService {
  private CATEGORIES = new Map<string, any>(
    [
      ["Desarrollo de Software", { name: "Desarrollo de Software" }],
      ["Diseño", { name: "Diseño" }],
      ["Marketing", { name: "Marketing" }],
      ["Gestión de Proyectos", { name: "Gestión de Proyectos" }],
      ["Recursos Humanos", { name: "Recursos Humanos" }],
    ],
  );

  getAllCategories(): Promise<GetAllCategoriesResultDTO> {
    return Promise.resolve(Array.from(this.CATEGORIES.values()));
  }
}
