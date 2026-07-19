import React, { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Reveal from "../Reveal";
import { CONTACT, CONTACT_LINKS } from "../data";

// Bulletproof icon mapping with fallbacks
const ICONS = { 
  Mail, 
  Email: Mail,
  email: Mail,
  WhatsApp: FaWhatsapp,
  whatsapp: FaWhatsapp,
  MessageCircle: FaWhatsapp,
  LinkedIn: FaLinkedin, 
  linkedin: FaLinkedin,
  Linkedin: FaLinkedin,
  GitHub: FaGithub,
  github: FaGithub,
  Github: FaGithub 
};

function BigBlock({ eyebrow, title, href, sub }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_2px_20px_-8px_rgba(18,18,16,0.1)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-neutral-950 md:p-10"
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400 transition-colors duration-300 group-hover:text-white/40">
          {eyebrow}
        </p>
        <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-white md:text-4xl">
          {title}
        </h3>
        {sub && (
          <p className="mt-2 text-sm text-neutral-500 transition-colors duration-300 group-hover:text-white/60">
            {sub}
          </p>
        )}
      </div>
      <span className="mt-8 flex h-11 w-11 items-center justify-center self-end rounded-full bg-yellow-400 transition-transform duration-300 ease-out group-hover:rotate-45">
        <ArrowUpRight className="h-5 w-5 text-neutral-900" />
      </span>
    </a>
  );
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-3.5 py-1.5 font-mono text-[11px] text-neutral-500 transition-colors duration-300 hover:border-neutral-900 hover:text-neutral-900"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" /> Copied
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" /> Copy email
        </>
      )}
    </button>
  );
}

const FOOTER_COLUMNS = [
  {
    title: "QUICK LINKS",
    links: [
      { label: "Top", href: "#top" },
      { label: "Skills", href: "#skills" },
      { label: "Work", href: "#work" },
      { label: "Journey", href: "#log" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "PROJECTS",
    links: [
      { label: "PayNidhi", href: "#work" },
      { label: "Academic Scheduler", href: "#work" },
      { label: "Smart Irrigation", href: "#work" },
      { label: "This Portfolio", href: "#work" },
    ],
  },
  {
    title: "ELSEWHERE",
    links: [
      { label: "GitHub", href: CONTACT.github },
      { label: "LinkedIn", href: CONTACT.linkedin },
      { label: "WhatsApp", href: `https://wa.me/${CONTACT.whatsappNumber}` },
      { label: "Email", href: `mailto:${CONTACT.email}` },
    ],
  },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400">
            Ready When You Are
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 md:text-6xl">
            Let&rsquo;s build the interface your users don&rsquo;t notice — because it just works.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
            Open to systems architect roles, internships, and freelance
            builds. Reach out on whichever channel you actually check —
            every link below goes somewhere real.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <BigBlock
              eyebrow="Send a message"
              title="Email Me"
              sub={CONTACT.email}
              href={`mailto:${CONTACT.email}?subject=Systems%20Architecture%20Opportunity`}
            />
            <BigBlock
              eyebrow="Quick chat"
              title="WhatsApp"
              sub={CONTACT.whatsappDisplay}
              href={`https://wa.me/${CONTACT.whatsappNumber}`}
            />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_LINKS.map(({ label, value, href, icon }) => {
              const Icon = ICONS[icon] || Terminal; // Fallback to prevent crash
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-[0_2px_16px_-8px_rgba(18,18,16,0.1)] transition-all duration-300 ease-out hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-900" />
                    <span>
                      <span className="block font-mono text-xs text-neutral-900">{label}</span>
                      <span className="block text-[11px] text-neutral-400">{value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-900" />
                </a>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-6 flex justify-end">
          <CopyEmailButton />
        </div>

        {/* Reference-style footer info grid */}
        <div className="mt-20 rounded-3xl bg-white p-8 shadow-[0_2px_20px_-8px_rgba(18,18,16,0.08)] md:p-12">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 font-display text-xs font-bold text-white">
              SB
            </span>
            <span className="font-display text-base font-semibold tracking-tight text-neutral-900">
              Sanket Bochare
            </span>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[11px] tracking-[0.2em] text-neutral-400">{col.title}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("#") ? undefined : "_blank"}
                        rel={l.href.startsWith("#") ? undefined : "noreferrer"}
                        className="text-sm text-neutral-500 transition-colors duration-300 hover:text-neutral-900"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-8 font-mono text-[11px] tracking-wide text-neutral-400 sm:flex-row sm:items-center">
            <span>Sanket Sunil Bochare — Systems Architect, {CONTACT.location}</span>
            <span>© 2026. Built without a template.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
