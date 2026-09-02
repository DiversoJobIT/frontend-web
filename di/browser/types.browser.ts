import { TYPES } from "../types";

export const TYPES_BROWSER = {
  ...TYPES,

  // QUERY SERVICES
  CATEGORIES_QUERY_SERVICE: Symbol.for("CATEGORIES_QUERY_SERVICE"),
  JOBS_QUERY_SERVICE: Symbol.for("JOBS_QUERY_SERVICE"),
};
