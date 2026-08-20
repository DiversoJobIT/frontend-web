import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-gray-900 shadow-xs transition-all placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-600 outline-none",
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
      size: {
        sm: "h-8 text-xs px-3 rounded-lg",
        md: "h-10 text-sm px-3.5 rounded-xl",
        lg: "h-12 text-base px-4 rounded-xl",
      },
    },
    defaultVariants: {
      state: "default",
      size: "md",
    },
  }
);

type InputProps = Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants> & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };

function Input({
  className,
  type,
  state,
  size,
  startIcon,
  endIcon,
  ...props
}: InputProps) {
  if (startIcon || endIcon) {
    return (
      <div className="relative flex items-center">
        {startIcon && (
          <span className="pointer-events-none absolute left-3 flex items-center text-gray-400">
            {startIcon}
          </span>
        )}
        <input
          type={type}
          data-slot="input"
          className={cn(
            inputVariants({ state, size, className }),
            startIcon && "pl-9",
            endIcon && "pr-9"
          )}
          {...props}
        />
        {endIcon && (
          <span className="pointer-events-none absolute right-3 flex items-center text-gray-400">
            {endIcon}
          </span>
        )}
      </div>
    );
  }

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ state, size, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
