import * as React from "react";
import { cn } from "@/lib/utils";

type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ElementType;
  title: string;
  description?: string;
  action?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: {
    wrapper: "py-8",
    icon: "size-8",
    iconWrap: "size-12 rounded-xl mb-3",
    title: "text-sm font-semibold text-gray-900",
    desc: "text-xs text-gray-500 max-w-xs",
  },
  md: {
    wrapper: "py-12",
    icon: "size-10",
    iconWrap: "size-16 rounded-2xl mb-4",
    title: "text-base font-bold text-gray-900",
    desc: "text-sm text-gray-500 max-w-sm",
  },
  lg: {
    wrapper: "py-16",
    icon: "size-12",
    iconWrap: "size-20 rounded-2xl mb-5",
    title: "text-lg font-bold text-gray-900",
    desc: "text-sm text-gray-500 max-w-md",
  },
};

function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  size = "md",
  className,
  ...props
}: EmptyStateProps) {
  const s = sizeMap[size];

  return (
    <div
      data-slot="empty-state"
      className={cn(
        "flex flex-col items-center justify-center text-center",
        s.wrapper,
        className
      )}
      {...props}
    >
      {Icon && (
        <div
          aria-hidden="true"
          className={cn(
            "flex items-center justify-center bg-slate-100 text-gray-400",
            s.iconWrap
          )}
        >
          <Icon className={s.icon} />
        </div>
      )}

      <h3 className={s.title}>{title}</h3>

      {description && (
        <p className={cn("mt-1.5 leading-relaxed", s.desc)}>{description}</p>
      )}

      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export { EmptyState };
