import { useEffect, useState, type ReactNode } from "react";
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

const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

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
  code: string;
  name: string;
  level: string;
  value: number;
  accent: "blue" | "green";
};

type KnowledgeItem = {
  name: string;
  icon: ReactNode;
};

type ToolItem = {
  name: string;
  category: string;
  logo: string;
};

const tools: ToolItem[] = [
  {
    name: "Figma",
    category: "Design & Prototyping",
    logo: "https://cdn.simpleicons.org/figma",
  },
  {
    name: "Miro",
    category: "Product Discovery & Workshops",
    logo: "https://cdn.simpleicons.org/miro",
  },
  {
    name: "ChatGPT",
    category: "AI Copilot & Product Strategy",
    logo: "/logos/openai.svg",
  },
  {
    name: "Claude",
    category: "AI Writing & Analysis",
    logo: "https://cdn.simpleicons.org/anthropic",
  },
  {
    name: "Gemini",
    category: "AI Research & Productivity",
    logo: "https://cdn.simpleicons.org/googlegemini",
  },
  {
    name: "Jira",
    category: "Delivery & Roadmapping",
    logo: "https://cdn.simpleicons.org/jira",
  },
  {
    name: "Confluence",
    category: "Documentation",
    logo: "https://cdn.simpleicons.org/confluence",
  },
  {
    name: "Notion",
    category: "Product Docs & Knowledge Base",
    logo: "https://cdn.simpleicons.org/notion",
  },
  {
    name: "Slack",
    category: "Team Communication",
    logo: "/logos/slack.svg",
  },
  {
    name: "Amplitude",
    category: "Product Analytics",
    logo: "/logos/amplitude.svg",
  },
  {
    name: "Looker",
    category: "BI & Data Visualization",
    logo: "https://cdn.simpleicons.org/looker",
  },
  {
    name: "CleverTap",
    category: "Lifecycle & Engagement",
    logo: "/logos/clevertap.svg",
  },
  {
    name: "Keycloak",
    category: "Identity & Authentication",
    logo: "https://cdn.simpleicons.org/keycloak",
  },
  {
    name: "Firebase",
    category: "App Infrastructure",
    logo: "/logos/firebase.svg",
  },
  {
    name: "Postman",
    category: "API Testing",
    logo: "https://cdn.simpleicons.org/postman",
  },
  {
    name: "GitHub",
    category: "Code Collaboration",
    logo: "https://cdn.simpleicons.org/github",
  },
  {
    name: "Vercel",
    category: "Frontend Deployment",
    logo: "https://cdn.simpleicons.org/vercel",
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
  { code: "ES", name: "Español", level: "Native", value: 100, accent: "blue" },
  { code: "EN", name: "English", level: "Advanced", value: 95, accent: "blue" },
  { code: "PT", name: "Portuguese", level: "Basic", value: 45, accent: "green" },
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

function ToolLogo({ name, logo }: ToolItem) {
  const prefersReducedMotion = false;
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const fallbackLabel = name.slice(0, 1).toUpperCase();
  const isWideBrandLogo = name === "Amplitude" || name === "CleverTap";

  return (
    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[12px] border border-[rgba(17,24,39,0.08)] bg-white shadow-[0_1px_1px_rgba(17,24,39,0.03)] transition duration-200 group-hover:border-[rgba(29,164,237,0.18)] group-hover:brightness-105">
      {status !== "loaded" ? (
        <div
          aria-hidden="true"
          className="cv-logo-skeleton absolute inset-0 rounded-[12px]"
        />
      ) : null}

      {status === "error" ? (
        <span
          aria-hidden="true"
          className="relative z-10 text-[11px] font-semibold tracking-[0.02em] text-[hsl(var(--cv-section-title))]"
        >
          {fallbackLabel}
        </span>
      ) : (
        <img
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          decoding="async"
          className={`relative z-10 flex-shrink-0 object-contain ${
            isWideBrandLogo ? "h-8 w-8" : "h-7 w-7"
          }`}
          animate={
            status === "loaded"
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.96 }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.3, ease: MOTION_EASE }
          }
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  );
}

function ExperienceLogo({
  src,
  alt,
  delay = 0,
}: {
  src: string;
  alt: string;
  delay?: number;
}) {
  const prefersReducedMotion = false;
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="mt-0.5 h-9 w-9 rounded object-contain"
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.3, ease: MOTION_EASE, delay }
      }
      onLoad={() => setLoaded(true)}
    />
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

function LanguageCard({
  language,
  index,
}: {
  language: Language;
  index: number;
}) {
  const accent =
    language.accent === "blue"
      ? {
          bg: "rgba(29,164,237,0.10)",
          text: "text-[hsl(201_85%_52%)]",
          border: "rgba(29,164,237,0.18)",
          fill: "bg-[hsl(201_85%_52%)]",
        }
      : {
          bg: "rgba(23,166,95,0.10)",
          text: "text-[hsl(140_71%_29%)]",
          border: "rgba(23,166,95,0.18)",
          fill: "bg-[hsl(140_71%_29%)]",
        };

  return (
    <article
      data-animate
      className="cv-load-in cv-load-in--stagger group flex h-full flex-col rounded-[18px] border border-[rgba(15,23,42,0.08)] bg-white px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(15,23,42,0.14)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)] motion-reduce:transform-none motion-reduce:transition-none"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] border"
          style={{
            backgroundColor: accent.bg,
            borderColor: accent.border,
          }}
        >
          <span className={`text-[11px] font-semibold tracking-[0.08em] ${accent.text}`}>
            {language.code}
          </span>
        </div>
        <span className={`text-[12px] font-semibold ${accent.text}`}>
          {language.value}%
        </span>
      </div>

      <div className="mt-3">
        <h3 className="text-[18px] font-semibold tracking-[0.01em] text-[hsl(var(--cv-section-title))] transition-colors duration-200 group-hover:text-[hsl(var(--cv-body))]">
          {language.name}
        </h3>
        <p className={`mt-1 text-[11px] italic ${accent.text} opacity-85`}>
          {language.level}
        </p>
      </div>

      <div className="mt-4 border-t border-[rgba(15,23,42,0.08)] pt-4">
        <div className="flex items-center justify-between text-[10px] font-medium text-[hsl(var(--cv-light-text))]">
          <span>Proficiency</span>
          <span className={accent.text}>{language.value}%</span>
        </div>

        <div
          aria-label={`${language.name} proficiency ${language.value}%`}
          className="mt-3 flex gap-1.5"
        >
          {Array.from({ length: 5 }, (_, segment) => {
            const filledSegments = Math.max(1, Math.round(language.value / 20));
            return (
              <span
                key={segment}
                className={`h-[7px] flex-1 rounded-full transition-all duration-300 ${
                  segment < filledSegments
                    ? accent.fill
                    : "bg-[rgba(15,23,42,0.10)]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}

function EducationTimelineItem({ item, index }: { item: EducationItem; index: number }) {
  const prefersReducedMotion = false;

  return (
    <li
      data-animate
      className="group grid grid-cols-[18px_54px_minmax(0,1fr)] gap-x-4 border-t border-[rgba(17,24,39,0.06)] py-5 first:border-t-0 first:pt-0"
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.45, ease: MOTION_EASE, delay: index * 0.06 }
      }
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
  const prefersReducedMotion = false;

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
      <main
        className="cv-load-in min-h-screen bg-background px-0 py-0 md:flex md:justify-center md:px-4"
        
      >
        <article
          className="cv-load-in cv-load-in--hero w-full bg-background md:my-0 md:w-[850px]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          <header
            className="cv-load-in cv-load-in--hero flex flex-col items-center gap-5 px-6 pb-8 pt-8 text-center sm:px-8 md:flex-row md:items-start md:gap-8 md:px-10 md:pb-8 md:pt-10 md:text-left"
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.58, ease: MOTION_EASE, delay: 0.05 }
            }
          >
            <div
              className="h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full bg-white sm:h-[202px] sm:w-[202px] md:h-[216px] md:w-[216px]"
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.45, ease: MOTION_EASE, delay: 0.08 }
              }
              >
              <img
                src={profileImage}
                alt="Ignacio Perez Roca"
                className="h-full w-full scale-[1.06] object-cover"
                style={{ objectPosition: "46% 16%" }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.35, ease: MOTION_EASE, delay: 0.08 }
                }
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

          <div className="cv-load-in cv-load-in--row flex flex-col gap-5 px-6 pb-12 sm:px-8 md:px-10">
            <div className="cv-load-in cv-load-in--row flex flex-col gap-5 md:gap-4">
              <div className="cv-load-in cv-load-in--row flex flex-col gap-6 md:grid md:grid-cols-2 md:items-stretch md:gap-x-[32px] md:gap-y-0 lg:gap-x-[34px]">
                <section
                  className="cv-load-in cv-load-in--section order-1 h-full md:order-none md:flex md:flex-col"
                  data-section="Personal Statement"
                  
                >
                  <h2 className="cv-section-title">PERSONAL STATEMENT</h2>
                  <p className="cv-section-subtitle">
                    Human-first product leadership for scalable onboarding,
                    identity, and growth systems.
                  </p>
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
                  className="cv-load-in cv-load-in--section order-3 h-full md:order-none md:flex md:flex-col"
                  data-section="Experience"
                  
                >
                  <h2 className="cv-section-title">EXPERIENCE</h2>
                  <p className="cv-section-subtitle">
                    A career focused on fintech, crypto, onboarding, growth,
                    and digital identity across LatAm.
                  </p>
                  <DottedSeparator />

                  <div className="mt-3 space-y-4">
                    {experience.map((item) => (
                      <div
                        key={`${item.company}-${item.role}`}
                        className="cv-load-in cv-load-in--stagger flex items-start gap-3.5 rounded-[12px] px-2.5 py-1.5"
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { duration: 0.45, ease: MOTION_EASE, delay: 0.04 }
                        }
                      >
                        <div className="flex flex-col items-center">
                          <span className="text-[9px] text-[hsl(var(--cv-timeline-dot))]">▲</span>
                          <ExperienceLogo
                            src={item.logo}
                            alt={item.company}
                          />
                        </div>
                        <div>
                          <p className="text-[12px] font-bold text-[hsl(var(--cv-section-title))]">
                            {item.role}
                          </p>
                          <p className="text-[11px] text-[hsl(var(--cv-body))]">{item.company}</p>
                          <p className="text-[10px] text-[hsl(var(--cv-light-text))]">{item.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-8 flex flex-col gap-6 md:mt-10 md:grid md:grid-cols-2 md:items-stretch md:gap-x-[32px] md:gap-y-0 lg:gap-x-[34px]">
                <section
                  className="cv-load-in cv-load-in--section order-2 h-full md:order-none md:flex md:min-h-[300px] md:flex-col"
                  data-section="Specialty"
                  
                >
                  <h2 className="cv-section-title">SPECIALTY</h2>
                  <p className="cv-section-subtitle">
                    Core domains where I create the most impact as a Product
                    Manager.
                  </p>
                  <DottedSeparator />

                  <div className="cv-load-in cv-load-in--row mt-3 flex flex-1 flex-col items-center gap-8 px-3 sm:gap-10 md:flex-row md:items-start md:justify-between md:gap-0 lg:px-4">
                    <div
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 0.45, ease: MOTION_EASE, delay: 0 }
                      }
                    >
                      <SpecialtyNode
                        label="Product"
                        iconClassName="text-[hsl(201_85%_52%)]"
                        icon={<Route className="h-10 w-10" strokeWidth={1.8} />}
                      />
                    </div>
                    <div
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 0.45, ease: MOTION_EASE, delay: 0.05 }
                      }
                    >
                      <SpecialtyNode
                        label="Development"
                        iconClassName="text-[hsl(201_85%_52%)]"
                        icon={<Code2 className="h-10 w-10" strokeWidth={1.8} />}
                      />
                    </div>
                    <div
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 0.45, ease: MOTION_EASE, delay: 0.1 }
                      }
                    >
                      <SpecialtyNode
                        label="Product Design"
                        iconClassName="text-[hsl(201_85%_52%)]"
                        icon={<LayoutGrid className="h-10 w-10" strokeWidth={1.8} />}
                      />
                    </div>
                  </div>
                </section>

                <section
                  className="cv-load-in cv-load-in--section order-4 h-full md:order-none md:flex md:min-h-[300px] md:flex-col"
                  data-section="Languages"
                  
                >
                  <h2 className="cv-section-title">LANGUAGES</h2>
                  <p className="cv-section-subtitle">
                    Multilingual communication for international teams.
                  </p>
                  <DottedSeparator />
                  <div className="cv-load-in cv-load-in--row mt-3 grid flex-1 grid-cols-1 gap-4 px-2 md:px-0 xl:grid-cols-3">
                    {languages.map((language, index) => (
                      <LanguageCard
                        key={language.code}
                        language={language}
                        index={index}
                      />
                    ))}
                  </div>
                </section>
              </div>

              <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:items-stretch md:gap-x-[32px] md:gap-y-0 lg:gap-x-[34px]">
                <section
                  className="cv-load-in cv-load-in--section order-5 h-full md:order-none md:flex md:flex-col"
                  data-section="Skills"
                  
                >
                  <h2 data-animate className="cv-section-title skills-title mb-2">
                    TOOLS &amp; SKILLS
                  </h2>
                  <p
                    data-animate
                    className="skills-subtitle cv-section-subtitle"
                  >
                    AI-native product work, design, delivery, and analytics
                    fluency.
                  </p>
                  <DottedSeparator />

                  <ul
                    className="skills-list cv-load-in cv-load-in--row mt-4 grid list-none grid-cols-1 gap-3 min-[420px]:grid-cols-2"
                  >
                    {tools.map((tool, index) => (
                      <li
                        key={tool.name}
                        data-animate
                        className="cv-load-in cv-load-in--stagger group flex h-full items-start gap-3 rounded-[16px] border border-[rgba(17,24,39,0.08)] bg-white px-3 py-3 shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(29,164,237,0.18)] hover:bg-white hover:shadow-[0_8px_24px_rgba(17,24,39,0.06)] motion-reduce:transform-none motion-reduce:transition-none"
                        style={{ animationDelay: `${index * 55}ms` }}
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { duration: 0.45, ease: MOTION_EASE, delay: index * 0.04 }
                        }
                      >
                        <ToolLogo {...tool} />

                        <div className="min-w-0 flex-1">
                          <span className="block text-[13px] font-medium leading-[1.2] tracking-[0.01em] text-[hsl(var(--cv-section-title))] transition-colors duration-200 group-hover:text-[hsl(var(--cv-body))]">
                            {tool.name}
                          </span>
                          <span className="mt-1 block text-[10px] leading-[1.4] text-[hsl(var(--cv-light-text))]">
                            {tool.category}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section
                  className="cv-load-in cv-load-in--section order-6 h-full md:order-none md:flex md:flex-col"
                  data-section="Education"
                  
                >
                  <h2 data-animate className="education-title cv-section-title">
                    EDUCATION &amp; CERTIFICATIONS
                  </h2>
                  <p className="cv-section-subtitle">
                    Formal training across product, development, design,
                    agile and growth.
                  </p>
                  <DottedSeparator />
                  <ul className="education-list cv-load-in cv-load-in--row mt-3 list-none">
                    {education.map((item, index) => (
                      <EducationTimelineItem key={`${item.year}-${item.title}`} item={item} index={index} />
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>

          <div className="h-10" />
        </article>
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
