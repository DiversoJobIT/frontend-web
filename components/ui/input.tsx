import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-sm text-gray-900 shadow-xs transition-all placeholder:text-gray-400 focus:border-[#0a59a3] focus:ring-2 focus:ring-[#0a59a3]/10 focus:outline-hidden disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-600",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
