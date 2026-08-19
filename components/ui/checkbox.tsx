"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer shrink-0 rounded-md border bg-white shadow-xs transition-all outline-none cursor-pointer flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        primary:
          "border-gray-300 data-[state=checked]:bg-[#0a59a3] data-[state=checked]:border-[#0a59a3] data-[state=indeterminate]:bg-[#0a59a3] data-[state=indeterminate]:border-[#0a59a3] focus-visible:border-[#0a59a3] focus-visible:ring-[#0a59a3]/20 data-[state=checked]:text-white data-[state=indeterminate]:text-white",
        success:
          "border-gray-300 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 data-[state=indeterminate]:bg-emerald-500 data-[state=indeterminate]:border-emerald-500 focus-visible:ring-emerald-400/20 data-[state=checked]:text-white data-[state=indeterminate]:text-white",
        danger:
          "border-gray-300 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500 data-[state=indeterminate]:bg-red-500 data-[state=indeterminate]:border-red-500 focus-visible:ring-red-400/20 data-[state=checked]:text-white data-[state=indeterminate]:text-white",
      },
      size: {
        sm: "size-3.5 rounded",
        md: "size-4 rounded-md",
        lg: "size-5 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const checkIconSizes = {
  sm: "size-2.5",
  md: "size-3",
  lg: "size-3.5",
} as const;

type CheckboxProps = Omit<
  React.ComponentProps<typeof CheckboxPrimitive.Root>,
  "size"
> &
  VariantProps<typeof checkboxVariants> & {
    label?: string;
    description?: string;
    indeterminate?: boolean;
  };

function Checkbox({
  className,
  variant,
  size = "md",
  label,
  description,
  indeterminate,
  id,
  ...props
}: CheckboxProps) {
  const generatedId = React.useId();
  const checkboxId = id ?? generatedId;

  const iconSize = checkIconSizes[size ?? "md"];

  const root = (
    <CheckboxPrimitive.Root
      id={checkboxId}
      data-slot="checkbox"
      checked={indeterminate ? "indeterminate" : props.checked}
      className={cn(checkboxVariants({ variant, size, className }))}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
      >
        {indeterminate ? (
          <Minus className={iconSize} strokeWidth={3} aria-hidden="true" />
        ) : (
          <Check className={iconSize} strokeWidth={3} aria-hidden="true" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (!label) return root;

  return (
    <div className="flex items-start gap-2.5">
      <div className="mt-0.5">{root}</div>
      <div className="flex flex-col gap-0.5">
        <label
          htmlFor={checkboxId}
          className={cn(
            "text-sm font-medium leading-snug select-none cursor-pointer",
            props.disabled ? "cursor-not-allowed opacity-50 text-gray-400" : "text-gray-700"
          )}
        >
          {label}
        </label>
        {description && (
          <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
