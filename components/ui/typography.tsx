import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Heading ──────────────────────────────────────────────────────────────────
const headingVariants = cva("font-bold tracking-tight text-gray-900", {
  variants: {
    size: {
      "5xl": "text-5xl leading-[1.1]",
      "4xl": "text-4xl leading-[1.1]",
      "3xl": "text-3xl leading-tight",
      "2xl": "text-2xl leading-snug",
      xl: "text-xl leading-snug",
      lg: "text-lg leading-snug",
    },
    weight: {
      extrabold: "font-extrabold",
      bold: "font-bold",
      semibold: "font-semibold",
    },
    gradient: {
      true: "bg-gradient-to-r from-[#0a59a3] to-[#0da845] bg-clip-text text-transparent",
      false: "",
    },
  },
  defaultVariants: {
    size: "2xl",
    weight: "bold",
    gradient: false,
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: HeadingTag;
  };

function Heading({
  as: Tag = "h2",
  size,
  weight,
  gradient,
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(headingVariants({ size, weight, gradient, className }))}
      {...props}
    />
  );
}

// ─── Text ─────────────────────────────────────────────────────────────────────
const textVariants = cva("", {
  variants: {
    variant: {
      lead: "text-lg text-gray-700 leading-relaxed",
      body: "text-base text-gray-700 leading-relaxed",
      small: "text-sm text-gray-600 leading-relaxed",
      muted: "text-sm text-gray-500 leading-relaxed",
      code: "text-sm font-mono bg-slate-100 text-gray-800 rounded-md px-1.5 py-0.5",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants> & {
    as?: "p" | "span" | "div" | "strong" | "em";
  };

function Text({
  as: Tag = "p",
  variant,
  className,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(textVariants({ variant, className }))}
      {...props}
    />
  );
}

// ─── SectionLabel ─────────────────────────────────────────────────────────────
const sectionLabelVariants = cva(
  "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest",
  {
    variants: {
      color: {
        primary: "text-[#0a59a3]",
        success: "text-[#0da845]",
        muted: "text-gray-500",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

type SectionLabelProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof sectionLabelVariants>;

function SectionLabel({ color, className, ...props }: SectionLabelProps) {
  return (
    <span
      className={cn(sectionLabelVariants({ color, className }))}
      {...props}
    />
  );
}

export { Heading, headingVariants, Text, textVariants, SectionLabel, sectionLabelVariants };
