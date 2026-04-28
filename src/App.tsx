import { useEffect, type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import profileImage from "./assets/profile.png";
import bitsoLogo from "./assets/bitso-logo.png";
import ittiLogo from "./assets/itti-logo.png";
import lemonLogo from "./assets/lemon-logo.png";
import personalPayLogo from "./assets/personalpay-logo.png";
import iunigoLogo from "./assets/iunigo-logo.png";
import ripioLogo from "./assets/ripio-logo.png";
import telecomLogo from "./assets/telecom-logo.png";
import thetLogo from "./assets/thet-logo.png";
import {
  Brain,
  BriefcaseBusiness,
  Code2,
  Eye,
  LayoutGrid,
  Map,
  MessageSquareText,
  MonitorSmartphone,
  Route,
  Users,
  Target,
  Workflow,
  GitBranch,
  Boxes,
  BarChart3,
  Database,
  Triangle,
} from "lucide-react";
import {
  siBootstrap,
  siClaude,
  siGooglegemini,
  siJavascript,
  siAngular,
  siSolidity,
  siTypescript,
} from "simple-icons";

type Skill = {
  name: string;
  level: number;
};

type EducationItem = {
  year: string;
  title: string;
  org: string;
  tags: string[];
};

type ExperienceItem = {
  logo: string;
  role: string;
  company: string;
  period: string;
};

type Language = {
  label: string;
  sublabel: string;
  percentage: number;
};

type ToolCard = {
  name: string;
  logo: ReactNode;
};

type ToolItem = {
  name: string;
  level: number;
  icon: ReactNode;
};

type ToolGroup = {
  title: string;
  concepts?: string[];
  tools?: ToolCard[];
};

type KnowledgeItem = {
  name: string;
  icon: ReactNode;
};

const tools: ToolItem[] = [
  { name: "ChatGPT", level: 10, icon: <ChatGPTMark /> },
  { name: "Gemini", level: 10, icon: <SimpleIconMark icon={siGooglegemini} /> },
  { name: "Claude", level: 10, icon: <SimpleIconMark icon={siClaude} /> },
  { name: "Figma", level: 10, icon: <FigmaMark /> },
  { name: "Miro", level: 10, icon: <MiroMark /> },
  { name: "AI", level: 10, icon: <IllustratorMark /> },
  { name: "JavaScript", level: 9, icon: <SimpleIconMark icon={siJavascript} /> },
  { name: "Bootstrap", level: 9, icon: <SimpleIconMark icon={siBootstrap} /> },
  { name: "TypeScript", level: 8, icon: <SimpleIconMark icon={siTypescript} /> },
  { name: "Angular", level: 7, icon: <SimpleIconMark icon={siAngular} /> },
  { name: "Solidity", level: 6, icon: <SimpleIconMark icon={siSolidity} /> },
];

const knowledge: KnowledgeItem[] = [
  { name: "Product Strategy", icon: <Target className="h-4 w-4" /> },
  { name: "Product Vision", icon: <Eye className="h-4 w-4" /> },
  { name: "Roadmap", icon: <Route className="h-4 w-4" /> },
  { name: "Team Leadership", icon: <Users className="h-4 w-4" /> },
  { name: "Scrum Master", icon: <Workflow className="h-4 w-4" /> },
  { name: "User Experience", icon: <Brain className="h-4 w-4" /> },
  { name: "Web Development", icon: <Code2 className="h-4 w-4" /> },
  { name: "Product Development", icon: <Boxes className="h-4 w-4" /> },
  { name: "Product Management", icon: <BriefcaseBusiness className="h-4 w-4" /> },
  { name: "Blockchain | DEFI", icon: <BarChart3 className="h-4 w-4" /> },
];

function SimpleIconMark({ icon }: { icon: { path: string; hex: string } }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[24px] w-[24px]"
      aria-hidden="true"
      style={{ color: `#${icon.hex}` }}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

function ChatGPTMark() {
  return (
    <svg viewBox="0 0 320 320" className="h-[24px] w-[24px] text-[#10a37f]" aria-hidden="true">
      <path
        d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"
        fill="currentColor"
      />
    </svg>
  );
}

function IllustratorMark() {
  return (
    <svg
      version="1.1"
      viewBox="0 0 480 470"
      className="h-[24px] w-[24px]"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ai-bg" gradientUnits="userSpaceOnUse" x1="511.5128" y1="-33.5667" x2="41.1909" y2="435.1163" gradientTransform="matrix(1 0 0 -1 0 472)">
          <stop offset="0" stopColor="#FF9F14" />
          <stop offset="0.9984" stopColor="#FFBB4D" />
        </linearGradient>
        <radialGradient id="ai-panel" cx="154.889" cy="341.2509" r="386.4145" gradientTransform="matrix(1 0 0 -1 0 472)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4C2B08" />
          <stop offset="1" stopColor="#191208" />
        </radialGradient>
        <linearGradient id="ai-mark" gradientUnits="userSpaceOnUse" x1="346.3047" y1="340.6669" x2="181.3709" y2="176.3078">
          <stop offset="0" stopColor="#FF9F14" />
          <stop offset="0.9984" stopColor="#FFBB4D" />
        </linearGradient>
      </defs>
      <rect width="480" height="470" fill="url(#ai-bg)" />
      <path d="M36.7 37v396H444V37H36.7z" fill="url(#ai-panel)" />
      <path
        d="M175.2 239.2h42.5l-21.2-82.4L175.2 239.2z M241 329.5l-15.5-53.5H168l-15.5 53.5h-39.4l55.4-189.3v-20.7h52.8l63.2 210H241z M345.7 329.5h-42.5V169.7h42.5V329.5z M324.7 150.6c-12.2 0-22-9.7-22-21.8 0-12 9.9-21.8 22-21.8s22 9.8 22 21.8S336.8 150.6 324.7 150.6z"
        fill="url(#ai-mark)"
      />
    </svg>
  );
}

function FigmaMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]" aria-hidden="true">
      <path d="M8.2 3.2h4.4a3.1 3.1 0 0 1 0 6.2H8.2a3.1 3.1 0 0 1 0-6.2Z" fill="#f24e1e" />
      <path d="M8.2 9.4h4.4a3.1 3.1 0 0 1 0 6.2H8.2a3.1 3.1 0 0 1 0-6.2Z" fill="#ff7262" />
      <path d="M8.2 15.6h4.4a3.1 3.1 0 0 1 0 6.2H8.2a3.1 3.1 0 0 1 0-6.2Z" fill="#1abcfe" />
      <path d="M12.6 9.4a3.1 3.1 0 1 0 0-6.2" fill="none" stroke="#a259ff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MiroMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#ffd84d" />
      <path d="M7 6l2.3 12L15 6" fill="none" stroke="#0f172a" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.1 6l2.3 12" fill="none" stroke="#0f172a" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ToolIcon({ icon }: ToolItem) {
  return (
    <div className="skills-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-[rgba(17,24,39,0.08)] bg-white text-[hsl(var(--cv-contact-bar))] transition-colors duration-200 group-hover:border-[rgba(29,164,237,0.18)] group-hover:bg-[rgba(29,164,237,0.04)]">
      {icon}
    </div>
  );
}

const education: EducationItem[] = [
  {
    year: "2023",
    title: "Growth Product Management",
    org: "Reforge®",
    tags: ["Product", "Growth", "Strategy"],
  },
  {
    year: "2019",
    title: "Certified Scrum Product Owner (CSPO®)",
    org: "Scrum Alliance. International Certified",
    tags: ["Agile", "Product Ownership"],
  },
  {
    year: "2016",
    title: "Scrum Master Certified (SMC ®)",
    org: "Scrum Alliance. International Certified",
    tags: ["Agile", "Delivery"],
  },
  {
    year: "2015",
    title: "Angular",
    org: "Udemy. International Certified",
    tags: ["Frontend", "Frameworks"],
  },
  {
    year: "2012",
    title: "Frontend Developer",
    org: "Coderhouse, Buenos Aires. Argentina",
    tags: ["Frontend", "Web"],
  },
  {
    year: "2012",
    title: "Web development",
    org: "Code Academy. International Certified",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2009",
    title: "Bachelor in Graphic Design",
    org: "Universidad de Buenos Aires. Argentina",
    tags: ["Design", "UX", "Visual Systems"],
  },
];

const experience: ExperienceItem[] = [
  {
    logo: ittiLogo,
    role: "Senior Product Manager - Onboarding",
    company: "itti",
    period: "Sep 2024 – Present · 1 yr 7 mos",
  },
  {
    logo: bitsoLogo,
    role: "Senior Product Manager - Onboarding",
    company: "@Bitso",
    period: "Oct 2022 – Sep 2024 · 2 yrs",
  },
  {
    logo: lemonLogo,
    role: "Senior Product Manager - Growth",
    company: "@Lemoncash",
    period: "October 2021 - October 2022",
  },
  {
    logo: personalPayLogo,
    role: "Product Manager - Onboarding",
    company: "Personal Pay",
    period: "July 2020 - October 2021",
  },
  {
    logo: iunigoLogo,
    role: "Product Manager - Onboarding",
    company: "IUNIGO",
    period: "July 2019 - July 2020",
  },
  {
    logo: ripioLogo,
    role: "Product Manager - Onboarding",
    company: "Ripio",
    period: "September 2017 - July 2019",
  },
  {
    logo: telecomLogo,
    role: "Designer & Frontend Developer",
    company: "Personal - Telecom",
    period: "March 2015 - September 2017",
  },
  {
    logo: thetLogo,
    role: "Designer & Frontend Developer",
    company: "Thet Studio",
    period: "February 2011 - March 2015",
  },
];

const languages: Language[] = [
  { label: "ESPAÑOL", sublabel: "Native", percentage: 100 },
  { label: "ENGLISH", sublabel: "Advanced", percentage: 80 },
  { label: "PORTUGUESE", sublabel: "Basic", percentage: 30 },
];

function SkillDots({ filled }: { filled: number }) {
  return (
    <div className="flex gap-[4px]">
      {Array.from({ length: 10 }, (_, index) => (
        <span
          key={index}
          className={`cv-skill-dot ${
            index < filled ? "cv-skill-dot-filled" : "cv-skill-dot-empty"
          }`}
        />
      ))}
    </div>
  );
}

function DottedSeparator() {
  return <hr className="cv-dotted-separator" />;
}

function TagPill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[rgba(17,24,39,0.08)] bg-white px-3 py-1 text-[9px] font-medium tracking-[0.01em] text-[hsl(var(--cv-light-text))] shadow-[0_0_0_1px_rgba(255,255,255,0.4)]">
      {children}
    </span>
  );
}

function ToolCard({ name, logo }: ToolCard) {
  return (
    <div className="flex h-[78px] flex-col items-center justify-center rounded-[14px] bg-white px-3 py-2 text-center shadow-[0_0_0_1px_rgba(17,24,39,0.06)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(29,164,237,0.25)] motion-reduce:transition-none">
      <div className="flex h-8 items-center justify-center">{logo}</div>
      <span className="mt-2 text-[10px] font-medium leading-tight text-[hsl(var(--cv-body))]">
        {name}
      </span>
    </div>
  );
}

function ConceptList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {items.map((item) => (
        <span
          key={item}
          className="text-[10px] text-[hsl(var(--cv-body))]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function SpecialtyNode({
  icon,
  label,
  iconClassName,
}: {
  icon: ReactNode;
  label: string;
  iconClassName?: string;
}) {
  return (
    <div className="flex w-full flex-col items-center md:w-auto">
      <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full border-[1.5px] border-[hsl(var(--cv-dotted-line))] sm:h-[110px] sm:w-[110px] md:h-[104px] md:w-[104px]">
        <div className={iconClassName}>{icon}</div>
      </div>
      <span className="-mt-[2px] h-[8px] w-[8px] rounded-full bg-[hsl(var(--cv-section-title))]" />
      <span className="h-[24px] w-[1.5px] bg-[hsl(var(--cv-dotted-line))] sm:h-[34px] md:h-[40px]" />
      <span className="mt-1.5 text-center text-[12px] font-normal text-[hsl(var(--cv-section-title))] sm:text-[13px] md:mt-2 md:text-[10px]">
        {label}
      </span>
    </div>
  );
}

function LanguageCircle({ label, sublabel, percentage }: Language) {
  const circumference = 2 * Math.PI * 38;
  const dashOffset = circumference - (percentage / 100) * circumference;
  const ringColor =
    label === "ESPAÑOL"
      ? "hsl(201 85% 52%)"
      : label === "ENGLISH"
        ? "hsl(211 73% 45%)"
        : "hsl(140 71% 29%)";

  return (
    <div className="cv-language-ring-wrap flex flex-col items-center">
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle
          cx="45"
          cy="45"
          r="38"
          fill="none"
          stroke="hsl(var(--cv-skill-dot-empty))"
          strokeWidth="6"
          className="cv-language-ring"
        />
        <circle
          cx="45"
          cy="45"
          r="38"
          fill="none"
          stroke={ringColor}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform="rotate(-90 45 45)"
          className="cv-language-ring"
        />
      </svg>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[hsl(var(--cv-section-title))]">
        {label}
      </span>
      <span className="text-[9px] italic text-[hsl(var(--cv-light-text))]">
        {sublabel}
      </span>
    </div>
  );
}

function EducationTimelineItem({ item, index }: { item: EducationItem; index: number }) {
  return (
    <li
      data-animate
      className="group grid grid-cols-[18px_54px_minmax(0,1fr)] gap-x-4 border-t border-[rgba(17,24,39,0.06)] py-5 first:border-t-0 first:pt-0"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative flex justify-center pt-1">
        <span className="h-2 w-2 rounded-full bg-[hsl(var(--cv-contact-bar))]" />
        <span className="absolute top-4 h-full w-px bg-[rgba(17,24,39,0.08)]" />
      </div>

      <div className="pt-0.5 text-[12px] font-medium tracking-[0.01em] text-[hsl(var(--cv-contact-bar))]">
        {item.year}
      </div>

      <div className="rounded-[12px] px-0 py-0">
        <p className="text-[13px] font-semibold leading-[1.3] text-[hsl(var(--cv-section-title))]">
          {item.title}
        </p>
        <p className="mt-0.5 text-[12px] leading-[1.4] text-[hsl(var(--cv-light-text))]">
          {item.org}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
      </div>
    </li>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-section");
            if (sectionName) {
              amplitude.track("cv section reached", { section_name: sectionName });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 },
    );
    document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>('[data-section="Education"]');
    if (!section) return;

    const nodes = section.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>('[data-section="Skills"]');
    if (!section) return;

    const nodes = section.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="min-h-screen bg-background px-0 py-0 md:flex md:justify-center md:px-4">
        <article
          className="w-full bg-background md:my-0 md:w-[850px]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          <header className="flex flex-col items-center gap-5 px-6 pb-6 pt-8 text-center sm:px-8 md:flex-row md:items-start md:gap-8 md:px-10 md:pb-6 md:pt-10 md:text-left">
            <div className="h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full bg-white sm:h-[202px] sm:w-[202px] md:h-[216px] md:w-[216px]">
              <img
                src={profileImage}
                alt="Ignacio Perez Roca"
                className="h-full w-full scale-[1.06] object-cover"
                style={{ objectPosition: "46% 16%" }}
              />
            </div>

            <div className="pt-0 md:pt-2">
              <h1 className="text-[28px] font-light tracking-wide text-[hsl(var(--cv-section-title))] sm:text-[30px] md:text-[32px]">
                Ignacio Perez Roca
              </h1>
              <p className="mt-0.5 text-[14px] text-[hsl(var(--cv-light-text))]">
                Senior Product Manager | Identity, KYC, Authentication &
                Growth
              </p>

              <div className="mt-4 flex items-start justify-center gap-3 md:mt-5 md:justify-start">
                <div className="w-[3px] self-stretch rounded bg-[hsl(var(--cv-contact-bar))]" />
                <div className="flex flex-col gap-1 text-left text-[12px] text-[hsl(var(--cv-body))]">
                  <span>+54 911 5807 7847</span>
                  <span>medium.com/@ignacio-perezroca</span>
                </div>
              </div>
            </div>
          </header>

          <div className="flex flex-col gap-10 px-6 pb-8 sm:px-8 md:grid md:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] md:grid-rows-3 md:gap-x-[32px] md:gap-y-[18px] md:px-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-x-[34px] lg:gap-y-[20px]">
            <section
              className="order-1 md:col-start-1 md:row-start-1"
              data-section="Personal Statement"
            >
              <h2 className="cv-section-title mb-2">PERSONAL STATEMENT</h2>
              <DottedSeparator />

              <div className="mt-2 space-y-2">
                <p className="cv-body-text">
                  I&apos;m a Senior Product Manager with 16+ years of experience
                  building human-first, scalable onboarding journeys.
                </p>
                <p className="cv-body-text">
                  Over the years, I&apos;ve acquired a wide range of tools,
                  tactics, and experience across various roles and industries. I
                  specialize in digital identity, KYC, authentication, and
                  product-led growth. I&apos;ve led international teams from 0
                  to 18+ across Argentina, Brazil, Mexico, Paraguay, and
                  Colombia, successfully onboarding over 8 million users in
                  fintech, crypto, and Web3.
                </p>
                <p className="cv-body-text">
                  Having built products from scratch in various roles, my
                  strength lies in combining empathy and visual thinking (User
                  Experience Design) with technical experience (8 years as a
                  developer). This holistic perspective allows me to translate
                  metrics into meaningful product experiences that drive
                  acquisition, retention, and long-term impact.
                </p>
                <p className="cv-body-text">
                  When it comes to building, I rely on data to surface real
                  problems and opportunities, and I craft products that
                  simplify people&apos;s lives. I hold a Certified Scrum Product
                  Owner (CSPO®), Certified Scrum Trainer (CST®), and several
                  other certifications from world-class universities.
                </p>
                <p className="cv-body-text">
                  My mission is to build trust, empower teams, and deliver
                  products that people love.
                </p>
              </div>

              <section className="mt-3" data-section="Key Achievements">
                <p className="cv-body-text mb-1 font-bold">Key achievements</p>
                <ul className="cv-body-text list-none space-y-0.5">
                  <li>• Boosted Bitso&apos;s onboarding conversion by +262% for over 8M users.</li>
                  <li>• Scaled Lemon from 60k to 2M users in 6 months (+3200% growth).</li>
                  <li>• Built and scaled UNID (Unified Identity), unifying ~3M users across 30 companies within the Grupo Vázquez ecosystem.</li>
                  <li>• Led multi-country onboarding launches across LatAm, acquiring over 1M users in the first year.</li>
                  <li>• Led Bitso&apos;s product expansion, scaling from 4 million to nearly 7 million users (+75% annual growth).</li>
                  <li>• Developed a new home screen for an exchange with over 8M users, driving a 35% increase in product activation.</li>
                  <li>• Led cross-functional teams from 0 to 18+ across Argentina, Brazil, Mexico, Paraguay, Colombia and United States.</li>
                </ul>
              </section>
            </section>

            <section
              className="order-2 md:col-start-1 md:row-start-2 md:h-full md:flex md:flex-col"
              data-section="Specialty"
            >
              <h2 className="cv-section-title mb-2">SPECIALTY</h2>
              <DottedSeparator />

              <div className="mt-3 flex flex-1 flex-col items-center gap-8 px-3 sm:gap-10 md:flex-row md:items-start md:justify-between md:gap-0 lg:px-4">
                <SpecialtyNode
                  label="Product"
                  iconClassName="text-[hsl(201_85%_52%)]"
                  icon={<Route className="h-10 w-10" strokeWidth={1.8} />}
                />
                <SpecialtyNode
                  label="Development"
                  iconClassName="text-[hsl(201_85%_52%)]"
                  icon={<Code2 className="h-10 w-10" strokeWidth={1.8} />}
                />
                <SpecialtyNode
                  label="Product Design"
                  iconClassName="text-[hsl(201_85%_52%)]"
                  icon={<LayoutGrid className="h-10 w-10" strokeWidth={1.8} />}
                />
              </div>
            </section>

            <section
              className="order-3 md:col-start-2 md:row-start-1"
              data-section="Experience"
            >
              <h2 className="cv-section-title mb-2">EXPERIENCE</h2>
              <DottedSeparator />

              <div className="mt-3 space-y-4">
                {experience.map((item) => (
                  <div
                    key={`${item.company}-${item.role}`}
                    className="flex items-start gap-3 rounded-[12px] px-2 py-1"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-[hsl(var(--cv-timeline-dot))]">▲</span>
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="mt-0.5 h-8 w-8 rounded object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[hsl(var(--cv-section-title))]">
                        {item.role}
                      </p>
                      <p className="text-[10px] text-[hsl(var(--cv-body))]">{item.company}</p>
                      <p className="text-[9px] text-[hsl(var(--cv-light-text))]">{item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="order-4 md:col-start-2 md:row-start-2 md:h-full md:flex md:flex-col"
              data-section="Languages"
            >
              <h2 className="cv-section-title mb-2">LANGUAGES</h2>
              <DottedSeparator />
              <div className="mt-2 grid flex-1 grid-cols-1 gap-6 px-2 min-[420px]:grid-cols-3 min-[420px]:gap-2 md:px-0">
                {languages.map((language) => (
                  <LanguageCircle key={language.label} {...language} />
                ))}
              </div>
            </section>

            <section
              className="order-5 md:col-start-1 md:row-start-3"
              data-section="Skills"
            >
              <h2 data-animate className="cv-section-title skills-title mb-2">
                TOOLS &amp; SKILLS
              </h2>
              <p
                data-animate
                className="skills-subtitle text-[11px] leading-[1.5] text-[hsl(var(--cv-light-text))]"
              >
                AI-native product work, design collaboration, and technical fluency.
              </p>
              <DottedSeparator />

              <ul className="skills-list mt-4 list-none">
                {tools.map((tool, index) => {
                  const fillWidth = `${(tool.level / 10) * 100}%`;
                  return (
                    <li
                      key={tool.name}
                      data-animate
                      className="group grid grid-cols-1 gap-3 border-t border-[rgba(17,24,39,0.06)] py-4 first:border-t-0 first:pt-0 md:grid-cols-[174px_minmax(0,1fr)_56px] md:items-center md:gap-4 md:py-[18px]"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <ToolIcon {...tool} />
                        <span className="text-[13px] font-medium tracking-[0.01em] text-[hsl(var(--cv-section-title))] transition-colors duration-200 group-hover:text-[hsl(var(--cv-body))]">
                          {tool.name}
                        </span>
                      </div>

                      <div
                        className="flex h-[4px] items-center overflow-hidden rounded-full bg-[rgba(17,24,39,0.08)]"
                        aria-hidden="true"
                      >
                        <span
                          className="skills-bar h-full rounded-full bg-[hsl(var(--cv-contact-bar))]"
                          style={{ ["--bar-width" as string]: fillWidth }}
                        />
                      </div>

                      <div className="text-right text-[12px] font-medium text-[hsl(var(--cv-light-text))]">
                        {tool.level}/10
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section
              className="order-6 md:col-start-2 md:row-start-3"
              data-section="Education"
            >
              <h2 data-animate className="education-title cv-section-title mb-2">
                EDUCATION &amp; CERTIFICATIONS
              </h2>
              <DottedSeparator />
              <ul className="education-list mt-3 list-none">
                {education.map((item, index) => (
                  <EducationTimelineItem key={`${item.year}-${item.title}`} item={item} index={index} />
                ))}
              </ul>
            </section>
          </div>

          <div className="h-10" />
        </article>
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
