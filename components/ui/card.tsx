import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "flex flex-col gap-6 rounded-2xl border bg-white text-gray-900 transition-all",
  {
    variants: {
      variant: {
        default: "border-gray-100 shadow-sm",
        bordered: "border-gray-200 shadow-none",
        ghost: "border-transparent shadow-none bg-transparent",
        elevated: "border-gray-100 shadow-md",
        interactive:
          "border-gray-100 shadow-sm cursor-pointer hover:-translate-y-1 hover:shadow-md hover:border-[#0a59a3]/20 active:translate-y-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type CardProps = React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants>;

function Card({ className, variant, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-lg font-bold leading-none text-gray-900", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-gray-600", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 pb-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center p-6 border-t border-gray-50",
        className
      )}
      {...props}
    />
  );
}

export { Card, cardVariants, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
