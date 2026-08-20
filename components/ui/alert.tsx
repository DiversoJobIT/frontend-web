import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-xl border px-4 py-3.5 text-sm flex gap-3 items-start",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900 border-gray-100 shadow-xs",
        destructive:
          "text-red-600 bg-red-50 border-red-100 *:data-[slot=alert-description]:text-red-600/90",
        info:
          "text-[#0a59a3] bg-blue-50/50 border-blue-100 *:data-[slot=alert-description]:text-[#0a59a3]/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-semibold tracking-tight text-sm",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-xs leading-relaxed text-gray-600",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
