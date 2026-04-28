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
  Sparkles,
  Boxes,
  BarChart3,
  Database,
  Asterisk,
  Triangle,
  Bot,
  Diamond,
} from "lucide-react";

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
  { name: "ChatGPT", level: 10, icon: <Bot className="h-4 w-4" /> },
  { name: "Gemini", level: 10, icon: <Sparkles className="h-4 w-4" /> },
  { name: "Claude", level: 10, icon: <Asterisk className="h-4 w-4" /> },
  {
    name: "Figma",
    level: 10,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path d="M8.2 3.2h4.4a3.1 3.1 0 0 1 0 6.2H8.2a3.1 3.1 0 0 1 0-6.2Z" fill="#f24e1e" />
        <path d="M8.2 9.4h4.4a3.1 3.1 0 0 1 0 6.2H8.2a3.1 3.1 0 0 1 0-6.2Z" fill="#ff7262" />
        <path d="M8.2 15.6h4.4a3.1 3.1 0 0 1 0 6.2H8.2a3.1 3.1 0 0 1 0-6.2Z" fill="#1abcfe" />
        <path d="M12.6 9.4a3.1 3.1 0 1 0 0-6.2" fill="none" stroke="#a259ff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Miro",
    level: 10,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#ffd84d" />
        <path d="M7 6l2.3 12L15 6" fill="none" stroke="#0f172a" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.1 6l2.3 12" fill="none" stroke="#0f172a" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    level: 9,
    icon: <span className="text-[11px] font-bold">JS</span>,
  },
  {
    name: "Bootstrap",
    level: 9,
    icon: <span className="text-[11px] font-bold">B</span>,
  },
  {
    name: "TypeScript",
    level: 8,
    icon: <span className="text-[11px] font-bold">TS</span>,
  },
  {
    name: "Angular",
    level: 7,
    icon: <span className="text-[11px] font-bold">A</span>,
  },
  {
    name: "Solidity",
    level: 6,
    icon: <span className="text-[11px] font-bold">S</span>,
  },
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

function ToolIcon({ name, icon }: ToolItem) {
  return (
    <div className="skills-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-[rgba(17,24,39,0.08)] bg-white text-[hsl(var(--cv-contact-bar))] transition-colors duration-200 group-hover:border-[rgba(29,164,237,0.18)] group-hover:bg-[rgba(29,164,237,0.04)]">
      {icon || <span className="text-[11px] font-semibold">{name.slice(0, 1)}</span>}
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

          <div className="flex flex-col gap-10 px-6 pb-8 sm:px-8 md:grid md:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] md:grid-rows-3 md:gap-x-[34px] md:gap-y-[22px] md:px-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-x-[36px] lg:gap-y-[24px]">
            <section
              className="order-1 md:col-start-1 md:row-start-1"
              data-section="Personal Statement"
            >
              <h2 className="cv-section-title mb-2">PERSONAL STATEMENT</h2>
              <DottedSeparator />

              <div className="mt-3 space-y-3">
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

              <section className="mt-5" data-section="Key Achievements">
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

              <div className="mt-4 flex flex-col items-center gap-8 px-3 sm:gap-10 md:flex-1 md:flex-row md:items-start md:justify-between md:gap-0 lg:px-4">
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
              <div className="mt-2 grid grid-cols-1 gap-6 px-2 min-[420px]:grid-cols-3 min-[420px]:gap-2 md:flex-1 md:px-0">
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
                        className="flex h-[5px] items-center overflow-hidden rounded-full bg-[rgba(17,24,39,0.08)]"
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
