import React from "react";
import { TECH_STACK } from "../data";

export default function TechMarquee() {
  const row = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="border-y border-line bg-paper-alt py-7">
      <div className="mb-4 px-5 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
          The Stack I Reach For
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper-alt to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper-alt to-transparent md:w-32" />
        <div className="marquee-track flex w-max items-center gap-3">
          {row.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="rounded-full border border-line bg-white px-5 py-2.5 font-display text-sm font-semibold text-ink md:text-base"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
