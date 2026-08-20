import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Spinner ──────────────────────────────────────────────────────────────────
const spinnerSizes = {
  xs: "size-3 border-[1.5px]",
  sm: "size-4 border-2",
  md: "size-6 border-2",
  lg: "size-8 border-[3px]",
  xl: "size-12 border-4",
} as const;

const spinnerColors = {
  primary: "border-[#0a59a3]/20 border-t-[#0a59a3]",
  white: "border-white/30 border-t-white",
  muted: "border-gray-200 border-t-gray-500",
  success: "border-emerald-200 border-t-emerald-500",
} as const;

type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: keyof typeof spinnerSizes;
  color?: keyof typeof spinnerColors;
  label?: string;
};

function Spinner({
  size = "md",
  color = "primary",
  label = "Cargando...",
  className,
  ...props
}: SpinnerProps) {
  return (
    <span
      data-slot="spinner"
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          "rounded-full animate-spin",
          spinnerSizes[size],
          spinnerColors[color]
        )}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────
type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  lines?: number;
};

function Skeleton({ rounded = "md", lines, className, ...props }: SkeletonProps) {
  const roundedMap = {
    sm: "rounded",
    md: "rounded-lg",
    lg: "rounded-xl",
    xl: "rounded-2xl",
    full: "rounded-full",
  };

  if (lines && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "animate-pulse bg-gray-200",
              roundedMap[rounded],
              i === lines - 1 && lines > 1 ? "w-3/4" : "w-full",
              "h-4",
              className
            )}
            {...props}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn("animate-pulse bg-gray-200", roundedMap[rounded], className)}
      {...props}
    />
  );
}

// ─── SkeletonCard (preset útil) ───────────────────────────────────────────────
function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-100 bg-white p-6 space-y-4",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-xl" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-2/3 rounded-lg" />
          <Skeleton className="h-3 w-1/3 rounded-lg" />
        </div>
      </div>
      <Skeleton lines={3} />
      <div className="flex justify-between pt-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-lg" />
      </div>
    </div>
  );
}

export { Spinner, Skeleton, SkeletonCard };
