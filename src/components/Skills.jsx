import React, { useEffect, useState } from "react";
import Reveal, { useReveal } from "../Reveal";
import { SKILL_GROUPS } from "../data";

function SkillBar({ name, level, delay, active }) {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setFilled(true), 40 + delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  return (
    <div className="transition-transform duration-300 ease-out hover:-translate-y-0.5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-ink">{name}</span>
        <span className="font-mono text-xs text-ink-faint">{level}%</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-paper-alt">
        <div
          className="h-full rounded-full bg-yellow transition-[width] duration-[900ms] ease-out"
          style={{ width: filled ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [ref, visible] = useReveal();
  const group = SKILL_GROUPS[activeIdx];

  return (
    <section id="skills" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
            Skills
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl">
            Frontend first, <span className="marker">full-stack backup.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            Tap a category below — the bars are live React state, not a
            static image, because that's the point.
          </p>
        </Reveal>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-6 transition-all duration-700 ease-out lg:grid-cols-[260px_1fr]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
          }}
        >
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {SKILL_GROUPS.map((g, i) => (
              <button
                key={g.kind}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={`flex shrink-0 items-center justify-between gap-3 rounded-full px-4 py-3 text-left font-mono text-xs tracking-wide transition-all duration-300 hover:-translate-y-0.5 lg:rounded-2xl ${
                  activeIdx === i
                    ? "bg-ink text-paper shadow-[0_10px_24px_-8px_rgba(18,18,16,0.35)]"
                    : "bg-white text-ink-soft hover:text-ink hover:shadow-[0_6px_16px_-8px_rgba(18,18,16,0.18)]"
                }`}
              >
                {g.kind}
                {g.accent && (
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      activeIdx === i ? "bg-yellow" : "bg-yellow"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-[0_2px_24px_-6px_rgba(18,18,16,0.1)] transition-shadow duration-300 md:p-9">
            <h3 key={`title-${activeIdx}`} className="fade-swap font-display text-2xl font-bold text-ink">
              {group.title}
            </h3>
            <p key={`desc-${activeIdx}`} className="fade-swap mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
              {group.description}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {group.items.map((item, i) => (
                <SkillBar
                  key={`${activeIdx}-${item.name}`}
                  name={item.name}
                  level={item.level}
                  delay={i * 90}
                  active={visible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
