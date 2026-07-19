import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Database,
  ShieldCheck,
  Cloud,
  Smartphone,
  Globe2,
} from "lucide-react";
import { useReveal } from "../Reveal";
import { CONTACT } from "../data";
import profileImg from "./profile.jpeg";

function useCountUp(target, duration = 1600, active = true) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function ImpactStat({ value, decimals = 0, suffix = "", label, active }) {
  const n = useCountUp(value, 1600, active);
  return (
    <div className="rounded-2xl bg-white px-5 py-6 shadow-[0_2px_16px_-4px_rgba(18,18,16,0.12)] transition-transform duration-300 ease-out hover:-translate-y-1 md:px-6 md:py-8">
      <div className="font-display text-3xl font-bold tabular-nums text-ink md:text-4xl">
        {n.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-2 text-sm leading-snug text-ink-soft">{label}</div>
    </div>
  );
}

const RIBBON_ITEMS = [
  "FRONTEND ENGINEER",
  "REACT · TAILWIND · JAVASCRIPT",
  "OPEN TO INTERNSHIPS & FULL-TIME",
  "PUNE, MAHARASHTRA",
];

// Orbit badges reuse the exact accent colors already used across the
// case-study cards (navy / olive / teal / ink) plus the brand yellow —
// so the hero ties into the site's palette instead of introducing new hues.
const ORBIT_BADGES = [
  { Icon: Smartphone, bg: "#33417a", top: "4%", left: "26%", size: 52, delay: "0s" },
  { Icon: Database, bg: "#316b6b", top: "2%", left: "72%", size: 58, delay: "0.5s" },
  { Icon: Globe2, bg: "#121210", top: "40%", left: "0%", size: 50, delay: "1s" },
  { Icon: ShieldCheck, bg: "#5f7a52", top: "42%", left: "94%", size: 54, delay: "1.5s" },
  { Icon: Cloud, bg: "#a8631f", top: "82%", left: "10%", size: 52, delay: "2s" },
  { Icon: Code2, bg: "#33417a", top: "86%", left: "70%", size: 58, delay: "2.5s" },
];

const SPECKS = [
  { top: "10%", left: "52%", size: 8, color: "#316b6b" },
  { top: "22%", left: "94%", size: 6, color: "#ffd400" },
  { top: "68%", left: "96%", size: 7, color: "#33417a" },
  { top: "94%", left: "44%", size: 6, color: "#a8631f" },
  { top: "62%", left: "2%", size: 8, color: "#ffd400" },
  { top: "8%", left: "4%", size: 6, color: "#5f7a52" },
];

function AvatarOrbit() {
  return (
    <div className="relative w-full max-w-md">
      <div className="blob float-slower absolute -right-8 -top-10 h-40 w-40 bg-yellow" />
      <div
        className="blob float-slower absolute -bottom-10 -left-8 h-32 w-32 bg-emerald-200"
        style={{ animationDelay: "-4s" }}
      />

      <div
        className="float-soft group/avatar relative mx-auto aspect-square w-full transition-transform duration-500 ease-out hover:scale-[1.03]"
        style={{ maxWidth: "clamp(300px, 42vw, 460px)" }}
      >
        {/* Static faint ring for reference, plus outward-pulsing "sonar" ripples */}
        <div className="absolute inset-0 rounded-full border border-dashed border-ink/10" />
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="ring-pulse absolute inset-0 rounded-full border border-ink/25"
            style={{ animationDelay: `${i * 1.2}s` }}
          />
        ))}

        {/* Ambient drifting specks for texture */}
        {SPECKS.map((s, i) => (
          <span
            key={i}
            className="drift-fade absolute rounded-full"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              backgroundColor: s.color,
              opacity: 0.6,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}

        {/* Center circle — your photo, imported from src/components/profile.jpeg */}
        <div className="absolute left-1/2 top-1/2 z-10 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-ink shadow-[0_24px_60px_-20px_rgba(18,18,16,0.55)] ring-[6px] ring-paper">
          <img
            src={profileImg}
            alt="Sanket Bochare"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/avatar:scale-110"
          />
        </div>

        {/* Orbiting icon badges, pulsing — "growing" circles around the center */}
        {ORBIT_BADGES.map(({ Icon, bg, top, left, size, delay }, i) => (
          <div
            key={i}
            className="pulse-grow absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl shadow-[0_10px_24px_-8px_rgba(18,18,16,0.35)] ring-4 ring-paper"
            style={{
              top,
              left,
              width: `clamp(36px, ${(size / 460) * 100}%, ${size}px)`,
              height: `clamp(36px, ${(size / 460) * 100}%, ${size}px)`,
              backgroundColor: bg,
              animationDelay: delay,
            }}
          >
            <Icon className="h-[44%] w-[44%] text-white" strokeWidth={2} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [ref, visible] = useReveal();
  const ribbon = [...RIBBON_ITEMS, ...RIBBON_ITEMS];

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <div className="dot-grid dot-grid-fade pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="order-2 lg:order-1">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 font-mono text-[11px] tracking-[0.14em] text-ink-soft transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(16px)",
                transitionDelay: "0ms",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
              FRONTEND-FIRST ENGINEER
            </span>

            <h1
              className="mt-7 max-w-xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-ink transition-all duration-700 ease-out sm:text-5xl md:text-6xl"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(20px)",
                transitionDelay: "120ms",
              }}
            >
              I build interfaces
              <br />
              people{" "}
              <span className={`marker hero-marker ${visible ? "marker-in" : ""}`}>
                actually enjoy
              </span>{" "}
              using.
            </h1>

            <p
              className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft transition-all duration-700 ease-out md:text-lg"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(20px)",
                transitionDelay: "240ms",
              }}
            >
              React developer with a systems-engineering brain — from
              FinTech dashboards to sensors talking to the cloud. Now
              looking for a frontend team that ships fast and cares about
              craft.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(20px)",
                transitionDelay: "360ms",
              }}
            >
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-xs font-semibold tracking-wide text-paper transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-yellow hover:text-ink hover:shadow-[0_10px_24px_-8px_rgba(18,18,16,0.35)]"
              >
                See My Work
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`mailto:${CONTACT.email}?subject=Frontend%20Developer%20Opportunity`}
                className="rounded-full border border-ink/15 bg-white px-6 py-3.5 font-mono text-xs font-semibold tracking-wide text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-ink hover:shadow-[0_10px_24px_-8px_rgba(18,18,16,0.15)]"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div
            className="order-1 flex justify-center transition-all duration-700 ease-out lg:order-2 lg:justify-end"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.92)",
            }}
          >
            <AvatarOrbit />
          </div>
        </div>
      </div>

      {/* Scrolling identity ribbon — black strip, full-bleed, matches the reference's marquee bar */}
      <div className="relative overflow-hidden bg-ink py-2.5">
        <div className="ribbon-track flex w-max items-center gap-8 whitespace-nowrap">
          {ribbon.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 font-mono text-xs font-semibold tracking-[0.15em] text-paper"
            >
              {item}
              <span className="text-yellow">✱</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
          The Numbers So Far
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <ImpactStat value={8.95} decimals={2} label="Current CGPA / 10.00" active={visible} />
          <ImpactStat value={4} label="Systems shipped end-to-end" active={visible} />
          <ImpactStat value={3} label="Domains: web, backend, IoT" active={visible} />
          <ImpactStat value={93.54} decimals={2} suffix="%" label="Diploma aggregate" active={visible} />
        </div>
      </div>
    </section>
  );
}
