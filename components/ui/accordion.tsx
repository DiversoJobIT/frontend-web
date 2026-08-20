"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
  titleClassName?: string;
};

function AccordionItem({
  title,
  children,
  defaultOpen = false,
  disabled = false,
  className,
  titleClassName,
}: AccordionItemProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const contentId = React.useId();
  const triggerId = React.useId();

  return (
    <div
      data-slot="accordion-item"
      data-state={open ? "open" : "closed"}
      className={cn("border-b border-gray-100 last:border-none", className)}
    >
      <button
        id={triggerId}
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        disabled={disabled}
        onClick={() => !disabled && setOpen((p) => !p)}
        className={cn(
          "flex w-full items-center justify-between gap-4 py-4 text-sm font-semibold text-gray-900 text-left transition-colors hover:text-[#0a59a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2 rounded-md disabled:cursor-not-allowed disabled:opacity-50",
          titleClassName
        )}
      >
        {title}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 text-gray-400 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        hidden={!open}
        className={cn(
          "overflow-hidden text-sm text-gray-600",
          open && "pb-4"
        )}
      >
        {open && (
          <div className="animate-in fade-in slide-in-from-top-1 duration-200 leading-relaxed">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: "single" | "multiple";
};

function Accordion({ type = "multiple", className, children, ...props }: AccordionProps) {
  return (
    <div
      data-slot="accordion"
      data-type={type}
      className={cn("divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white px-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Accordion, AccordionItem };
