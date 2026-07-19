export const TECH_STACK = [
  "React",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Django",
  "Python",
  "C++",
  "Redis",
  "ESP32",
  "Firebase",
];

export const SKILL_GROUPS = [
  {
    kind: "FRONTEND",
    title: "Frontend Engineering",
    description:
      "Where I spend most of my time — turning interface problems into fast, accessible, maintainable React.",
    accent: true,
    items: [
      { name: "React (Hooks, Context, custom hooks)", level: 92 },
      { name: "JavaScript ES6+ / TypeScript basics", level: 90 },
      { name: "Tailwind CSS / responsive layout systems", level: 94 },
      { name: "Animation & micro-interactions (no libraries)", level: 85 },
      { name: "Accessibility & semantic HTML", level: 80 },
      { name: "Performance (code-splitting, memoization)", level: 78 },
    ],
  },
  {
    kind: "BACKEND",
    title: "Backend & Data",
    description: "Enough depth to design the APIs my frontend consumes and reason about the whole system.",
    items: [
      { name: "Node.js / Express REST APIs", level: 82 },
      { name: "MongoDB schema & query design", level: 78 },
      { name: "Django / Python services", level: 74 },
      { name: "Redis caching & sessions", level: 65 },
    ],
  },
  {
    kind: "TOOLING",
    title: "Tooling & Workflow",
    description: "The everyday kit that keeps a codebase shippable.",
    items: [
      { name: "Git / GitHub, PR workflows", level: 88 },
      { name: "Vite / build tooling", level: 84 },
      { name: "Figma → code handoff", level: 76 },
      { name: "Postman / API testing", level: 80 },
    ],
  },
  {
    kind: "SYSTEMS",
    title: "Hardware & IoT",
    description: "The unusual edge — physical sensors talking to the same cloud my UIs render.",
    items: [
      { name: "ESP32 / ESP8266 firmware", level: 70 },
      { name: "Firebase real-time sync", level: 75 },
      { name: "Android (Java)", level: 62 },
    ],
  },
];

export const CASE_STUDIES = [
  {
    index: "01",
    name: "PayNidhi",
    category: "B2B FINTECH PLATFORM",
    accent: "#33417a",
    objective:
      "A B2B invoice-discounting platform engineered to compete with enterprise models like KredX — connecting businesses that need working capital with investors chasing short-term, high-yield opportunities. I owned the frontend: dashboards, deal flows, and the data-dense screens investors actually trust.",
    highlights: [
      "React dashboards rendering live behavioral credit scores and dynamic deal pricing without jank.",
      "Multi-step onboarding UI wrapping an encrypted KYC verification pipeline.",
      "Settlement views that make multi-party financial transactions legible at a glance.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    team: "Prathamesh Ingle, Kartik Shivshankar",
    metric: { value: "B2B", label: "Working-capital marketplace" },
    featured: true,
  },
  {
    index: "02",
    name: "Smart Academic Scheduler & Tracker",
    category: "SECURE INSTITUTIONAL PLATFORM",
    accent: "#5f7a52",
    objective:
      "A highly secure institutional platform for tracking university activity and orchestrating department management across every tier of the academic hierarchy. Built the interface layer so three very different user roles never feel like they're using three different apps.",
    highlights: [
      "One consistent component library serving Student, HOD, and Principal role-based views.",
      "Image-based event verification UI that turns photographic proof into a clean review queue.",
    ],
    stack: ["React Native", "Node.js", "Express", "MongoDB"],
    metric: { value: "RBAC", label: "Multi-tier access layers" },
  },
  {
    index: "03",
    name: "Smart Irrigation Ecosystem",
    category: "IOT + ANDROID",
    accent: "#316b6b",
    objective:
      "An end-to-end IoT platform connecting environmental sensors to cloud databases and physical hardware controllers — a full sensor-to-cloud-to-hardware loop, with a native Android app as the human-facing layer.",
    highlights: [
      "Real-time telemetry via ESP8266 / ESP32 and DHT11, logged to Firebase and rendered live.",
      "Android UI for remote override, driving relay modules from live moisture thresholds.",
    ],
    stack: ["ESP32", "Firebase", "Java", "Android Studio", "C++"],
    metric: { value: "Real-time", label: "Sensor-to-cloud pipeline" },
  },
  {
    index: "04",
    name: "This Portfolio",
    category: "MOTION-DRIVEN FRONTEND",
    accent: "#a8631f",
    objective:
      "A developer portfolio built to communicate technical depth, design sensibility, and engineering rigor at a glance — and to prove the frontend claims above with the page itself.",
    highlights: [
      "Built entirely on native React, Tailwind CSS v4, and Vite — no UI kit, no animation library.",
      "Hand-rolled scroll-reveal system, marquees, and a typed hero panel, all under 60fps on mobile.",
    ],
    stack: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    metric: { value: "0", label: "External UI/animation dependencies" },
  },
];

export const SYSTEM_LOG = [
  {
    kind: "EDUCATION",
    title: "B.Tech, Information Technology",
    org: "D. Y. Patil College of Engineering, Akurdi",
    period: "In progress",
    detail: "Current CGPA: 8.95 / 10",
    highlight: true,
  },
  {
    kind: "EDUCATION",
    title: "Diploma, Computer Engineering",
    org: "State Board of Technical Education",
    period: "Completed",
    detail: "93.54%",
  },
  {
    kind: "EXPERIENCE",
    title: "Software Engineering Intern",
    org: "Sumago Infotech, Nashik",
    period: "Internship",
    detail: "Engineered full-stack Django / Python backend features.",
  },
];

export const CONTACT = {
  email: "sanketbochare90@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanketbochare/",
  github: "https://github.com/sanketbochare",
  whatsappNumber: "918308490603",
  whatsappDisplay: "+91 83084 90603",
  location: "Pune, Maharashtra, India",
};

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}?subject=Frontend%20Developer%20Opportunity`,
    icon: "Mail",
  },
  {
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
      "Hi Sanket, I came across your portfolio and would like to connect about a frontend developer role."
    )}`,
    icon: "MessageCircle",
  },
  {
    label: "LinkedIn",
    value: "in/sanketbochare",
    href: CONTACT.linkedin,
    icon: "Linkedin",
  },
  {
    label: "GitHub",
    value: "@sanketbochare",
    href: CONTACT.github,
    icon: "Github",
  },
];
