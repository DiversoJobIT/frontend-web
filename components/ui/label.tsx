"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "leading-none select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      color: {
        default: "text-gray-700",
        muted: "text-gray-500",
        required:
          "text-gray-700 after:content-['*'] after:ml-1 after:text-red-500",
        error: "text-red-600",
      },
    },
    defaultVariants: {
      size: "md",
      weight: "semibold",
      color: "default",
    },
  }
);

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>;

function Label({ className, size, weight, color, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ size, weight, color, className }))}
      {...props}
    />
  );
}

Label.displayName = "Label";

export { Label, labelVariants };
