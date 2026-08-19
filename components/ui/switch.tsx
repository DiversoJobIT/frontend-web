"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SwitchProps = Omit<React.ComponentProps<"button">, "role"> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
};

const trackSizes = {
  sm: "h-4 w-7",
  md: "h-5 w-9",
  lg: "h-6 w-11",
};

const thumbSizes = {
  sm: "size-3",
  md: "size-3.5",
  lg: "size-4",
};

const thumbTranslate = {
  sm: "translate-x-3.5",
  md: "translate-x-4.5",
  lg: "translate-x-5.5",
};

function Switch({
  checked: controlledChecked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  size = "md",
  label,
  className,
  id,
  ...props
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;
  const generatedId = React.useId();
  const switchId = id ?? generatedId;

  const toggle = () => {
    if (disabled) return;
    const next = !checked;
    if (!isControlled) setInternalChecked(next);
    onCheckedChange?.(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <button
        {...props}
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        disabled={disabled}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        data-slot="switch"
        data-state={checked ? "checked" : "unchecked"}
        className={cn(
          "relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 outline-none",
          "focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          checked ? "bg-[#0a59a3]" : "bg-gray-200",
          trackSizes[size]
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none block rounded-full bg-white shadow-sm transition-transform duration-200",
            thumbSizes[size],
            checked ? thumbTranslate[size] : "translate-x-0"
          )}
        />
      </button>

      {label && (
        <label
          htmlFor={switchId}
          className={cn(
            "text-sm font-medium leading-none cursor-pointer select-none",
            disabled ? "cursor-not-allowed opacity-50 text-gray-400" : "text-gray-700"
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export { Switch };
