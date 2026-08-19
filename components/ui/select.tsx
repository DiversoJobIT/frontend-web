import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const selectVariants = cva(
  "flex w-full appearance-none rounded-xl border bg-white px-3.5 py-2 pr-9 text-sm text-gray-900 shadow-xs transition-all placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-600 outline-none cursor-pointer",
  {
    variants: {
      state: {
        default:
          "border-gray-200 focus:border-[#0a59a3] focus:ring-2 focus:ring-[#0a59a3]/10",
        error:
          "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/10 text-red-900",
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

type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectProps = Omit<React.ComponentProps<"select">, "size"> &
  VariantProps<typeof selectVariants> & {
    options?: SelectOption[];
    placeholder?: string;
  };

function Select({
  className,
  state,
  size,
  options,
  placeholder,
  children,
  ...props
}: SelectProps) {
  return (
    <div className="relative flex items-center">
      <select
        data-slot="select"
        className={cn(selectVariants({ state, size, className }))}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options
          ? options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))
          : children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 size-4 text-gray-400 shrink-0"
      />
    </div>
  );
}

export { Select, selectVariants };
export type { SelectOption };
