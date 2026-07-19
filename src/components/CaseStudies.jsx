import React from "react";
import { ArrowUpRight, Users } from "lucide-react";
import Reveal from "../Reveal";
import { CASE_STUDIES } from "../data";

function ProjectVisual({ name, accent, index, featured }) {
  const seed = parseInt(index, 10) || 0;
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl ${
        featured ? "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[280px]" : "aspect-[16/10]"
      }`}
      style={{ backgroundColor: `${accent}12` }}
    >
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <circle cx={`${20 + seed * 12}%`} cy="20%" r="90" fill={accent} opacity="0.2" />
        <circle cx={`${85 - seed * 8}%`} cy="85%" r="130" fill={accent} opacity="0.15" />
        <circle cx={`${50 + seed * 6}%`} cy="55%" r="46" fill="none" stroke={accent} strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="0" y1="100%" x2="100%" y2="0" stroke={accent} strokeOpacity="0.16" strokeWidth="1" />
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={i}
            x1={`${i * 22}%`}
            y1="0"
            x2={`${i * 22 + 12}%`}
            y2="100%"
            stroke={accent}
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        ))}
      </svg>
      <span
        className="relative font-display text-2xl font-extrabold tracking-tight md:text-3xl"
        style={{ color: accent }}
      >
        {name.length > 24 ? initials : name}
      </span>
    </div>
  );
}

function TagPill({ children }) {
  return (
    <span className="rounded-full bg-paper-alt px-3 py-1 font-mono text-[11px] tracking-wide text-ink-soft">
      {children}
    </span>
  );
}

function CaseStudyCard({ project, delay }) {
  return (
    <Reveal delay={delay} className={`group h-full ${project.featured ? "md:col-span-2" : ""}`}>
      <article
        className={`flex h-full flex-col gap-6 rounded-3xl bg-white p-5 shadow-[0_2px_20px_-8px_rgba(18,18,16,0.1)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(18,18,16,0.22)] md:p-6 ${
          project.featured ? "md:flex-row-reverse md:items-stretch" : ""
        }`}
      >
        <div className={project.featured ? "md:w-[46%] md:shrink-0" : ""}>
          <ProjectVisual name={project.name} accent={project.accent} index={project.index} featured={project.featured} />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                {project.category}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                {project.name}
              </h3>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper-alt transition-all duration-300 ease-out group-hover:rotate-45 group-hover:bg-yellow">
              <ArrowUpRight className="h-4 w-4 text-ink" />
            </span>
          </div>

          <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">{project.objective}</p>

          <ul className="mt-5 flex flex-col gap-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: project.accent }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <TagPill key={t}>{t}</TagPill>
              ))}
            </div>
            <div className="text-right">
              <div className="font-display text-lg font-bold text-ink">{project.metric.value}</div>
              <div className="text-xs text-ink-faint">{project.metric.label}</div>
            </div>
          </div>

          {project.team && (
            <div className="mt-5 flex items-start gap-2 text-sm text-ink-faint">
              <Users className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                <span className="text-ink-soft">Team: </span>
                {project.team}
              </span>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
            Case Studies
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl">
            Proof over <span className="marker">promises.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            Four systems, architected end to end — from FinTech dashboards
            and institutional RBAC to sensors physically talking to the
            cloud, and the frontend that ties each of them together.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CASE_STUDIES.map((p, i) => (
            <CaseStudyCard key={p.index} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
