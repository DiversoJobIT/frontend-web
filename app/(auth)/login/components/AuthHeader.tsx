import Image from "next/image";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center mb-4">
        <Image
          src="/logos/DiversoJob.png"
          alt="DiversoJob Logo"
          width={160}
          height={160}
          className="h-12 w-auto"
          priority
        />
      </div>
      <h1 className="text-3xl font-extrabold text-[#0a59a3] tracking-tight">
        {title}
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}
