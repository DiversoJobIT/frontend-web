"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X, CheckCircle, AlertTriangle, Info, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const toastVariants = cva(
  "relative flex w-full items-start gap-3 rounded-2xl border p-4 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 text-gray-900",
        success: "bg-emerald-50 border-emerald-200 text-emerald-900",
        warning: "bg-amber-50 border-amber-200 text-amber-900",
        danger: "bg-red-50 border-red-200 text-red-900",
        info: "bg-blue-50 border-blue-200 text-blue-900",
        dark: "bg-slate-900 border-slate-800 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const toastIcons: Record<string, React.ElementType> = {
  success: CheckCircle,
  warning: AlertTriangle,
  danger: AlertCircle,
  info: Info,
  default: Info,
  dark: CheckCircle,
};

const toastIconColors: Record<string, string> = {
  success: "text-emerald-500",
  warning: "text-amber-500",
  danger: "text-red-500",
  info: "text-[#0a59a3]",
  default: "text-gray-400",
  dark: "text-emerald-400",
};

type ToastProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof toastVariants> & {
    title?: string;
    description?: string;
    onClose?: () => void;
    showIcon?: boolean;
  };

function Toast({
  variant = "default",
  title,
  description,
  onClose,
  showIcon = true,
  className,
  children,
  ...props
}: ToastProps) {
  const key = variant ?? "default";
  const Icon = toastIcons[key] ?? Info;
  const iconColor = toastIconColors[key] ?? "text-gray-400";

  return (
    <div
      data-slot="toast"
      role="alert"
      aria-live="polite"
      className={cn(toastVariants({ variant, className }))}
      {...props}
    >
      {showIcon && (
        <Icon
          aria-hidden="true"
          className={cn("mt-0.5 size-5 shrink-0", iconColor)}
        />
      )}

      <div className="flex-1 min-w-0">
        {title && (
          <p className="text-sm font-semibold leading-snug">{title}</p>
        )}
        {description && (
          <p
            className={cn(
              "text-xs leading-relaxed mt-0.5",
              variant === "dark" ? "text-slate-300" : "opacity-80"
            )}
          >
            {description}
          </p>
        )}
        {children}
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar notificación"
          className={cn(
            "shrink-0 rounded-md p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3]",
            variant === "dark"
              ? "text-slate-400 hover:text-white hover:bg-slate-700"
              : "text-current opacity-50 hover:opacity-100 hover:bg-black/5"
          )}
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

// ─── ToastContainer — posicionamiento para toasts flotantes ───────────────────
type ToastPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

const positionClasses: Record<ToastPosition, string> = {
  "top-right": "top-4 right-4 items-end",
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
};

type ToastContainerProps = {
  position?: ToastPosition;
  className?: string;
  children: React.ReactNode;
};

function ToastContainer({
  position = "bottom-right",
  className,
  children,
}: ToastContainerProps) {
  return (
    <div
      aria-live="polite"
      aria-atomic="false"
      className={cn(
        "fixed z-50 flex flex-col gap-2 w-full max-w-sm pointer-events-none",
        positionClasses[position],
        className
      )}
    >
      <div className="flex flex-col gap-2 pointer-events-auto w-full">
        {children}
      </div>
    </div>
  );
}

export { Toast, ToastContainer, toastVariants };
