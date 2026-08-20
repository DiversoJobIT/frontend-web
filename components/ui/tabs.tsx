"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// ─── TabsList ─────────────────────────────────────────────────────────────────
type TabsListProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "pills" | "underline" | "card";
};

function TabsList({ variant = "pills", className, ...props }: TabsListProps) {
  const base = "relative flex";
  const variants = {
    pills: "bg-slate-100 p-1 rounded-xl gap-0.5",
    underline: "border-b border-gray-200 gap-0",
    card: "bg-slate-50 border border-gray-100 rounded-xl p-1.5 gap-1",
  };
  return (
    <div
      data-slot="tabs-list"
      role="tablist"
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}

// ─── Tab ──────────────────────────────────────────────────────────────────────
type TabProps = Omit<React.HTMLAttributes<HTMLButtonElement>, "onSelect"> & {
  value: string;
  activeValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  variant?: "pills" | "underline" | "card";
};

function Tab({
  value,
  activeValue,
  onValueChange,
  disabled,
  variant = "pills",
  className,
  children,
  ...props
}: TabProps) {
  const isActive = activeValue === value;

  const base =
    "relative z-10 flex-1 cursor-pointer text-center py-2 px-3 text-sm font-semibold rounded-lg transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 select-none";

  const styles = {
    pills: isActive
      ? "bg-white text-[#0a59a3] shadow-sm"
      : "text-gray-600 hover:text-gray-900",
    underline: isActive
      ? "text-[#0a59a3] border-b-2 border-[#0a59a3] rounded-none pb-[calc(0.5rem+2px)]"
      : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent rounded-none",
    card: isActive
      ? "bg-white text-[#0a59a3] shadow-sm border border-gray-100/50"
      : "text-gray-600 hover:text-gray-900",
  };

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={() => onValueChange?.(value)}
      className={cn(base, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

// ─── TabsContent ──────────────────────────────────────────────────────────────
type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
  activeValue?: string;
};

function TabsContent({ value, activeValue, className, ...props }: TabsContentProps) {
  if (activeValue !== value) return null;
  return (
    <div
      role="tabpanel"
      data-slot="tabs-content"
      className={cn("animate-in fade-in duration-200", className)}
      {...props}
    />
  );
}

// ─── Tabs (root composable) ───────────────────────────────────────────────────
type TabsProps<T extends string = string> = {
  value: T;
  onChange: (value: T) => void;
  variant?: "pills" | "underline" | "card";
  className?: string;
  children: React.ReactNode;
};

function Tabs<T extends string = string>({
  value,
  onChange,
  variant = "pills",
  className,
  children,
}: TabsProps<T>) {
  const enhanced = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const el = child as React.ReactElement<{ "data-slot"?: string }>;

    if (el.props?.["data-slot"] === "tabs-list") {
      const listEl = el as React.ReactElement<{ children?: React.ReactNode; variant?: string }>;
      const enhancedTabs = React.Children.map(listEl.props.children, (tab) => {
        if (!React.isValidElement(tab)) return tab;
        return React.cloneElement(tab as React.ReactElement<TabProps>, {
          activeValue: value as string,
          onValueChange: onChange as (v: string) => void,
          variant,
        });
      });
      return React.cloneElement(listEl, { children: enhancedTabs, variant });
    }

    if (el.props?.["data-slot"] === "tabs-content") {
      return React.cloneElement(el as React.ReactElement<TabsContentProps>, {
        activeValue: value as string,
      });
    }

    return child;
  });

  return (
    <div data-slot="tabs" className={cn("flex flex-col gap-4", className)}>
      {enhanced}
    </div>
  );
}

export { Tabs, TabsList, Tab, TabsContent };
