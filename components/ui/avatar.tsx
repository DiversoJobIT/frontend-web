import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarSizes = {
  xs: "size-6 text-[10px]",
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-12 text-base",
  xl: "size-16 text-xl",
  "2xl": "size-20 text-2xl",
} as const;

const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-semibold select-none",
  {
    variants: {
      size: avatarSizes,
      color: {
        primary: "bg-[#0a59a3]/10 text-[#0a59a3]",
        success: "bg-emerald-100 text-emerald-700",
        warning: "bg-amber-100 text-amber-700",
        slate: "bg-slate-200 text-slate-700",
        auto: "", // color generado por nombre
      },
    },
    defaultVariants: {
      size: "md",
      color: "slate",
    },
  }
);

// Genera un color de fondo consistente basado en el nombre
function getInitialsColor(name: string): string {
  const colors = [
    "bg-blue-100 text-blue-700",
    "bg-purple-100 text-purple-700",
    "bg-pink-100 text-pink-700",
    "bg-emerald-100 text-emerald-700",
    "bg-amber-100 text-amber-700",
    "bg-rose-100 text-rose-700",
    "bg-indigo-100 text-indigo-700",
    "bg-teal-100 text-teal-700",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

// Extrae iniciales (máx 2) del nombre
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

type AvatarProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> &
  VariantProps<typeof avatarVariants> & {
    src?: string;
    name?: string;
    alt?: string;
    ring?: boolean;
  };

function Avatar({
  src,
  name = "",
  alt,
  size = "md",
  color = "auto",
  ring = false,
  className,
  ...props
}: AvatarProps) {
  const [imgError, setImgError] = React.useState(false);
  const initials = getInitials(name);
  const autoColor = color === "auto" ? getInitialsColor(name) : "";
  const showImg = src && !imgError;

  return (
    <span
      data-slot="avatar"
      aria-label={alt ?? name ?? "Avatar"}
      className={cn(
        avatarVariants({ size, color: color === "auto" ? undefined : color }),
        color === "auto" && autoColor,
        ring && "ring-2 ring-white ring-offset-1",
        className
      )}
      {...props}
    >
      {showImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? name}
          onError={() => setImgError(true)}
          className="size-full object-cover"
        />
      ) : (
        <span aria-hidden="true">{initials || "?"}</span>
      )}
    </span>
  );
}

// ─── AvatarGroup ──────────────────────────────────────────────────────────────
type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  max?: number;
  size?: keyof typeof avatarSizes;
  children: React.ReactNode;
};

function AvatarGroup({ max = 4, size = "md", className, children, ...props }: AvatarGroupProps) {
  const allChildren = React.Children.toArray(children);
  const visible = allChildren.slice(0, max);
  const overflow = allChildren.length - max;

  return (
    <div
      data-slot="avatar-group"
      className={cn("flex items-center", className)}
      {...props}
    >
      {visible.map((child, i) => (
        <span key={i} className="-ml-2 first:ml-0 ring-2 ring-white rounded-full">
          {React.cloneElement(child as React.ReactElement<AvatarProps>, { size, ring: false })}
        </span>
      ))}
      {overflow > 0 && (
        <span
          aria-label={`${overflow} más`}
          className={cn(
            "-ml-2 inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-semibold ring-2 ring-white select-none",
            avatarSizes[size]
          )}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}

export { Avatar, AvatarGroup };
