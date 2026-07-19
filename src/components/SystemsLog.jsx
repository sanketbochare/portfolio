import React from "react";
import Reveal from "../Reveal";
import { SYSTEM_LOG } from "../data";

export default function SystemsLog() {
  return (
    <section id="log" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
            The Journey
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl">
            Education and experience,
            <br />
            timestamped.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col rounded-3xl bg-white p-2 shadow-[0_2px_20px_-8px_rgba(18,18,16,0.08)] sm:p-3">
          {SYSTEM_LOG.map((entry, i) => (
            <React.Fragment key={entry.title}>
              <Reveal delay={i * 90}>
                <div className="group grid grid-cols-1 gap-3 rounded-2xl px-4 py-6 transition-colors duration-300 ease-out hover:bg-paper-alt md:grid-cols-[140px_1fr_auto] md:items-center md:gap-8 md:px-6">
                  <span
                    className={`inline-flex w-fit items-center rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] ${
                      entry.kind === "EDUCATION" ? "bg-paper-alt text-ink-soft" : "bg-yellow-soft text-ink"
                    }`}
                  >
                    {entry.kind}
                  </span>

                  <div>
                    <h3 className="font-display text-lg font-bold text-ink md:text-xl">{entry.title}</h3>
                    <p className="mt-1 text-sm text-ink-faint">{entry.org}</p>
                    <p
                      className={`mt-2 font-mono text-sm ${
                        entry.highlight ? "font-semibold text-ink" : "text-ink-soft"
                      }`}
                    >
                      {entry.detail}
                    </p>
                  </div>

                  <span className="font-mono text-xs tracking-wide text-ink-faint md:text-right">
                    {entry.period}
                  </span>
                </div>
              </Reveal>
              {i < SYSTEM_LOG.length - 1 && <div className="mx-6 border-t border-line" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
