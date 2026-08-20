import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-xs transition-all placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-600 outline-none resize-y min-h-[80px]",
  {
    variants: {
      state: {
        default:
          "border-gray-200 focus:border-[#0a59a3] focus:ring-2 focus:ring-[#0a59a3]/10",
        error:
          "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/10 text-red-900 placeholder:text-red-300",
        success:
          "border-emerald-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

type TextareaProps = React.ComponentProps<"textarea"> &
  VariantProps<typeof textareaVariants> & {
    rows?: number;
  };

function Textarea({ className, state, rows = 4, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      rows={rows}
      className={cn(textareaVariants({ state, className }))}
      {...props}
    />
  );
}

export { Textarea, textareaVariants };
