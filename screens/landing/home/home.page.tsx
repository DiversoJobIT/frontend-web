"use client";

import { JobSearchProvider } from "@/contexts/talent/job-search.context";

import Hero from "./sections/hero";
import Jobs from "./sections/jobs";
import JobDetailsDialog from "./sections/job-details-dialog";
import HowItWorks from "@/app/landing/components/HowItWorks";
import Blog from "@/app/landing/components/Blog";
import Companies from "@/app/landing/components/Companies";

export default function HomePage() {
  return (
    <>
      {/* MAIN LANDING CONTAINER */}
      <main id="main-content" className="flex-1">
        <JobSearchProvider>
          <Hero />
          <Jobs />
          <JobDetailsDialog />
        </JobSearchProvider>

        {/*COMPAÑIAS DESTACADAS */}
        <Companies />

        {/* Section como funciona*/}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <HowItWorks />
        </section>

        {/**Section Blog */}
        <section>
          <Blog />
        </section>

        {/* FEATURES COMPONENT
        <Features />*/}
      </main>
    </>
  );
}
