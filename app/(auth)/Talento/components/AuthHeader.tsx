import Image from "next/image";
import { cn } from "@/lib/utils";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function AuthHeader({ title, subtitle, className }: AuthHeaderProps) {
  return (
    <div className={cn("mb-6 text-center", className)}>
      <div className="mx-auto mb-3 flex h-12 w-[180px] items-center justify-center">
        <Image
          src="/logos/DiversoJob.png"
          alt="DiversoJob Logo"
          width={180}
          height={48}
          className="h-12 max-w-[180px] object-contain"
          style={{ width: "auto", height: "3rem" }}
          priority
        />
      </div>
      <div className="mx-auto min-h-16 max-w-lg">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#0a59a3]">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}
