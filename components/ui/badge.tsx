import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold transition-colors select-none",
  {
    variants: {
      variant: {
        primary:
          "border-[#0a59a3]/20 bg-[#0a59a3]/10 text-[#0a59a3]",
        success:
          "border-emerald-200 bg-emerald-50 text-emerald-700",
        warning:
          "border-amber-200 bg-amber-50 text-amber-700",
        danger:
          "border-red-200 bg-red-50 text-red-600",
        muted:
          "border-slate-200 bg-slate-100 text-gray-600",
        outline:
          "border-gray-300 bg-transparent text-gray-700",
        solid:
          "border-[#0a59a3] bg-[#0a59a3] text-white",
      },
      size: {
        sm: "px-2 py-0 text-[10px]",
        md: "px-2.5 py-0.5 text-[11px]",
        lg: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "muted",
      size: "md",
    },
  }
);

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    dot?: boolean;
  };

function Badge({ variant, size, dot, className, children, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn("size-1.5 rounded-full", {
            "bg-[#0a59a3]": variant === "primary" || variant === "solid",
            "bg-emerald-500": variant === "success",
            "bg-amber-500": variant === "warning",
            "bg-red-500": variant === "danger",
            "bg-gray-400": variant === "muted" || variant === "outline",
          })}
        />
      )}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
