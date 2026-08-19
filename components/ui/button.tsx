import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base — nunca se sobreescribe fuera del DS
  "group/button inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-transparent font-semibold whitespace-nowrap transition-all duration-150 outline-none select-none cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-busy:cursor-wait [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      // ── Variante visual ──
      variant: {
        primary:
          "bg-[#0a59a3] text-white hover:bg-[#004b8d] focus-visible:ring-[#0a59a3]/50 shadow-sm hover:shadow-md",
        secondary:
          "bg-slate-100 text-gray-800 hover:bg-slate-200 focus-visible:ring-gray-400/30 border-slate-200",
        outline:
          "border-gray-200 bg-white text-gray-700 hover:bg-slate-50 hover:border-gray-300 focus-visible:ring-[#0a59a3]/30",
        ghost:
          "bg-transparent text-gray-700 hover:bg-slate-100 hover:text-gray-900 focus-visible:ring-gray-400/30",
        destructive:
          "bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:border-red-300 focus-visible:ring-red-400/30",
        success:
          "bg-emerald-500 text-white hover:bg-emerald-600 focus-visible:ring-emerald-400/40 shadow-sm",
        link: "bg-transparent text-[#0a59a3] underline-offset-4 hover:underline focus-visible:ring-[#0a59a3]/30 rounded-md",
      },
      // ── Tamaño ──
      size: {
        xs: "h-6 px-2 text-xs rounded-lg gap-1 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 px-3 text-xs rounded-lg gap-1 [&_svg:not([class*='size-'])]:size-3.5",
        md: "h-9 px-4 text-sm",
        lg: "h-11 px-6 text-base",
        xl: "h-13 px-8 text-lg",
        // Cuadrados para iconos
        "icon-xs": "size-6 rounded-lg p-0 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-lg p-0 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-md": "size-9 p-0",
        "icon-lg": "size-11 p-0",
      },
      // ── Ancho ──
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    loadingText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

function Button({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  asChild = false,
  loading = false,
  loadingText,
  leftIcon,
  rightIcon,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  const isDisabled = disabled || loading;

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      aria-busy={loading || undefined}
      disabled={isDisabled}
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
    >
      {loading ? (
        <>
          <Loader2
            className="animate-spin [&:not([class*='size-'])]:size-4"
            aria-hidden="true"
          />
          <span>{loadingText ?? children}</span>
        </>
      ) : (
        <>
          {leftIcon && (
            <span aria-hidden="true" className="shrink-0">
              {leftIcon}
            </span>
          )}
          {children}
          {rightIcon && (
            <span aria-hidden="true" className="shrink-0">
              {rightIcon}
            </span>
          )}
        </>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
