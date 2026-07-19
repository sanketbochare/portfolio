import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import Skills from "./components/Skills";
import CaseStudies from "./components/CaseStudies";
import SystemsLog from "./components/SystemsLog";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-paper font-sans text-ink antialiased">
      <Nav />
      <Hero />
      <TechMarquee />
      <Skills />
      <CaseStudies />
      <SystemsLog />
      <ContactFooter />
    </div>
  );
}
