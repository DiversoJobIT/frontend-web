"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border border-gray-300 bg-white data-[state=checked]:bg-[#0a59a3] data-[state=checked]:text-white data-[state=checked]:border-[#0a59a3] focus-visible:border-[#0a59a3] focus-visible:ring-2 focus-visible:ring-[#0a59a3]/10 size-4 shrink-0 rounded-md shadow-xs transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center cursor-pointer",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
      >
        <Check className="size-3" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

Checkbox.displayName = "Checkbox";

export { Checkbox };
