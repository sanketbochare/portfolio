import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CONTACT } from "../data";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#log", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent bg-paper/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-xs font-bold text-paper">
            SB
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-ink">
            Sanket Bochare
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-xs tracking-wide text-ink-soft transition-colors duration-300 hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-yellow transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-ink-soft lg:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            OPEN TO WORK
          </span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 font-mono text-xs font-semibold tracking-wide text-paper transition-colors duration-300 hover:bg-yellow hover:text-ink sm:inline-flex"
          >
            Hire Me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 font-display text-lg font-semibold text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT.email}`}
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-mono text-sm font-semibold tracking-wide text-paper"
            >
              Hire Me <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
