import { useContext } from "react";

import { DIContext } from "@/contexts/common/di.context";

export function useDI<T>(type: symbol): T {
  const di = useContext(DIContext);
  
  return di.get<T>(type);
}
