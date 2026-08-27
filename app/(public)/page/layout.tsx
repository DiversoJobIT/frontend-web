import type { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: "/",
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
