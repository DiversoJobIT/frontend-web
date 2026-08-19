import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const statCardVariants = cva(
  "flex flex-col gap-3 rounded-2xl border p-5 transition-all",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-100 shadow-sm",
        primary: "bg-[#0a59a3] border-[#0a59a3] text-white",
        success: "bg-emerald-500 border-emerald-500 text-white",
        ghost: "bg-transparent border-gray-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type Trend = "up" | "down" | "neutral";

type StatCardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof statCardVariants> & {
    label: string;
    value: string | number;
    description?: string;
    trend?: Trend;
    trendValue?: string;
    icon?: React.ElementType;
  };

const trendConfig: Record<Trend, { icon: React.ElementType; color: string; label: string }> = {
  up: { icon: TrendingUp, color: "text-emerald-500", label: "Incremento" },
  down: { icon: TrendingDown, color: "text-red-500", label: "Decremento" },
  neutral: { icon: Minus, color: "text-gray-400", label: "Sin cambio" },
};

function StatCard({
  label,
  value,
  description,
  trend,
  trendValue,
  icon: Icon,
  variant,
  className,
  ...props
}: StatCardProps) {
  const isColored = variant === "primary" || variant === "success";
  const trendInfo = trend ? trendConfig[trend] : null;
  const TrendIcon = trendInfo?.icon;

  return (
    <div
      data-slot="stat-card"
      className={cn(statCardVariants({ variant, className }))}
      {...props}
    >
      <div className="flex items-start justify-between gap-2">
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-wider",
            isColored ? "text-white/70" : "text-gray-500"
          )}
        >
          {label}
        </p>
        {Icon && (
          <span
            aria-hidden="true"
            className={cn(
              "flex size-8 items-center justify-center rounded-xl",
              isColored ? "bg-white/20" : "bg-slate-100"
            )}
          >
            <Icon
              className={cn("size-4", isColored ? "text-white" : "text-[#0a59a3]")}
            />
          </span>
        )}
      </div>

      <p
        className={cn(
          "text-3xl font-extrabold tracking-tight leading-none",
          isColored ? "text-white" : "text-gray-900"
        )}
      >
        {value}
      </p>

      {(trendInfo || description) && (
        <div className="flex items-center gap-2">
          {trendInfo && TrendIcon && (
            <span
              className={cn(
                "inline-flex items-center gap-1 text-xs font-semibold",
                isColored ? "text-white/80" : trendInfo.color
              )}
              aria-label={`${trendInfo.label}: ${trendValue}`}
            >
              <TrendIcon className="size-3.5" aria-hidden="true" />
              {trendValue}
            </span>
          )}
          {description && (
            <p
              className={cn(
                "text-xs",
                isColored ? "text-white/60" : "text-gray-500"
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export { StatCard, statCardVariants };
