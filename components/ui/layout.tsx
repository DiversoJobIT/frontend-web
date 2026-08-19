import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Divider ──────────────────────────────────────────────────────────────────
type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  orientation?: "horizontal" | "vertical";
};

function Divider({
  label,
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("w-px self-stretch bg-gray-100", className)}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        className={cn("flex items-center gap-3", className)}
        {...props}
      >
        <div className="h-px flex-1 bg-gray-100" />
        <span className="text-xs font-medium text-gray-400 select-none whitespace-nowrap">
          {label}
        </span>
        <div className="h-px flex-1 bg-gray-100" />
      </div>
    );
  }

  return (
    <hr
      role="separator"
      className={cn("h-px border-none bg-gray-100", className)}
      {...props}
    />
  );
}

// ─── Stack ────────────────────────────────────────────────────────────────────
const gapMap: Record<string, string> = {
  "0": "gap-0",
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "5": "gap-5",
  "6": "gap-6",
  "8": "gap-8",
  "10": "gap-10",
  "12": "gap-12",
};

const alignMap: Record<string, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyMap: Record<string, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  gap?: keyof typeof gapMap | (string & {});
  align?: keyof typeof alignMap | (string & {});
  justify?: keyof typeof justifyMap | (string & {});
  wrap?: boolean;
  as?: React.ElementType;
};

function Stack({
  direction = "col",
  gap = "4",
  align = "stretch",
  justify = "start",
  wrap = false,
  as: Tag = "div",
  className,
  ...props
}: StackProps) {
  const dirClass = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  }[direction];

  return (
    <Tag
      className={cn(
        "flex",
        dirClass,
        gapMap[gap] ?? `gap-[${gap}]`,
        alignMap[align as string] ?? align,
        justifyMap[justify as string] ?? justify,
        wrap && "flex-wrap",
        className
      )}
      {...props}
    />
  );
}

// ─── Container ────────────────────────────────────────────────────────────────
type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  as?: React.ElementType;
};

const containerSizes: Record<string, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

function Container({
  size = "xl",
  as: Tag = "div",
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        containerSizes[size],
        className
      )}
      {...props}
    />
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
type SectionProps = React.HTMLAttributes<HTMLElement> & {
  spacing?: "sm" | "md" | "lg" | "xl";
};

const sectionSpacing: Record<string, string> = {
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-24",
};

function Section({ spacing = "md", className, children, ...props }: SectionProps) {
  return (
    <section className={cn(sectionSpacing[spacing], className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

export { Divider, Stack, Container, Section };
