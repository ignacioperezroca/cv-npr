import { Fragment, useEffect, useState, type ReactNode } from "react";
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
  getLocaleFromPathname,
  getPathForLocale,
  translations,
  type Locale,
} from "./i18n";

const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

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

type EducationItem = {
  year: string;
  title: string;
  org: string;
  tags: string[];
  url?: string;
};

type KnowledgeItem = {
  name: string;
  icon: ReactNode;
};

type ToolItem = {
  name: string;
  category: string;
  logo: string;
  url: string;
};

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

function renderRichText(text: string) {
  const parts = text.split(/(\*\*.+?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-[hsl(var(--cv-section-title))]">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
  });
}

function DottedSeparator() {
  return <hr className="cv-dotted-separator" />;
}

function WhatsAppIcon() {
  return (
    <img
      src="/logos/whatsapp.svg"
      alt="WhatsApp logo"
      loading="lazy"
      decoding="async"
      className="h-4 w-4 object-contain"
    />
  );
}

function MediumIcon() {
  return (
    <img
      src="/logos/medium.svg"
      alt="Medium logo"
      loading="lazy"
      decoding="async"
      className="h-4 w-4 object-contain"
    />
  );
}

function LinkedInIcon() {
  return (
    <img
      src="/logos/linkedin.svg"
      alt="LinkedIn logo"
      loading="lazy"
      decoding="async"
      className="h-4 w-4 object-contain"
    />
  );
}

function LocaleSwitch({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (next: Locale) => void;
}) {
  return (
    <div
      className="inline-flex rounded-full border border-[rgba(15,23,42,0.08)] bg-white/85 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-[2px]"
      role="group"
      aria-label="Language switcher"
    >
      {(["en", "es"] as Locale[]).map((item) => {
        const active = item === locale;
        return (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-pressed={active}
            aria-label={item === "en" ? "Switch to English" : "Cambiar a español"}
            className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,164,237,0.35)] ${
              active
                ? "bg-[hsl(var(--cv-contact-bar))] text-white shadow-[0_8px_18px_rgba(29,164,237,0.22)]"
                : "text-[hsl(var(--cv-light-text))] hover:bg-[rgba(29,164,237,0.08)] hover:text-[hsl(var(--cv-section-title))]"
            }`}
          >
            {item.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
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
      <div className="mb-[10px] flex h-[104px] w-[104px] items-center justify-center rounded-full border-[1.5px] border-[hsl(var(--cv-dotted-line))] sm:h-[110px] sm:w-[110px] md:h-[104px] md:w-[104px]">
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
  const isBritishBlue = language.name === "English";
  const accent =
    language.accent === "blue"
      ? {
          ring: isBritishBlue ? "hsl(215 100% 47%)" : "hsl(201 85% 52%)",
          pillBg: isBritishBlue ? "rgba(17,92,214,0.10)" : "rgba(29,164,237,0.10)",
          pillText: isBritishBlue ? "text-[hsl(215_100%_47%)]" : "text-[hsl(201_85%_52%)]",
          pillBorder: isBritishBlue ? "rgba(17,92,214,0.16)" : "rgba(29,164,237,0.16)",
        }
      : {
          ring: "hsl(140 71% 29%)",
          pillBg: "rgba(23,166,95,0.10)",
          pillText: "text-[hsl(140_71%_29%)]",
          pillBorder: "rgba(23,166,95,0.16)",
        };
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (language.value / 100) * circumference;

  return (
    <article
      data-animate
      className="cv-load-in cv-load-in--stagger group flex h-full flex-col rounded-[24px] border border-[rgba(15,23,42,0.08)] bg-white px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(15,23,42,0.14)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] motion-reduce:transform-none motion-reduce:transition-none"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex flex-1 flex-col items-center justify-between gap-3 py-1.5">
        <div className="relative flex h-[94px] w-[94px] items-center justify-center sm:h-[100px] sm:w-[100px] md:h-[108px] md:w-[108px]">
          <svg width="100%" height="100%" viewBox="0 0 108 108" aria-hidden="true">
            <circle
              cx="54"
              cy="54"
              r={radius}
              fill="none"
              stroke="rgba(15,23,42,0.10)"
              strokeWidth="7"
            />
            <circle
              cx="54"
              cy="54"
              r={radius}
              fill="none"
              stroke={accent.ring}
              strokeWidth="7"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              transform="rotate(-90 54 54)"
              className="transition-[stroke-dashoffset,stroke] duration-300"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-2 pb-1">
          <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[hsl(var(--cv-section-title))] transition-colors duration-200 group-hover:text-[hsl(var(--cv-body))]">
            {language.name}
          </h3>
          <span
            className="rounded-full border px-4 py-1.5 text-[10px] font-medium"
            style={{
              backgroundColor: accent.pillBg,
              borderColor: accent.pillBorder,
              color: language.accent === "blue" ? (isBritishBlue ? "hsl(215 100% 47%)" : "hsl(201 85% 52%)") : "hsl(140 71% 29%)",
            }}
          >
            {language.level}
          </span>
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
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    return getLocaleFromPathname(window.location.pathname);
  });
  const content = translations[locale];
  const sections = content.sections;
  const tools = content.sections.tools.items;
  const education = content.sections.education.items;
  const experience = content.sections.experience.items.map((item, index) => ({
    ...item,
    logo: [ittiLogo, bitsoLogo, lemonLogo, personalPayLogo, iunigoLogo, ripioLogo, telecomLogo, thetLogo][index],
  }));
  const languages = content.sections.languages.items;

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

  useEffect(() => {
    const applyLocale = () => {
      const nextLocale = getLocaleFromPathname(window.location.pathname);
      setLocale(nextLocale);
      const canonicalPath = getPathForLocale(nextLocale);
      if (window.location.pathname !== canonicalPath) {
        window.history.replaceState({}, "", canonicalPath);
      }
    };

    applyLocale();
    window.document.documentElement.lang = locale;

    const handlePopState = () => {
      applyLocale();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content.meta.title;

    const ensureMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
      if (!el) {
        el = selector.startsWith('link') ? document.createElement('link') : document.createElement('meta');
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    ensureMeta('meta[name="description"]', "content", content.meta.description);
    ensureMeta('meta[property="og:title"]', "content", content.meta.ogTitle);
    ensureMeta('meta[property="og:description"]', "content", content.meta.ogDescription);
    ensureMeta('meta[property="og:url"]', "content", `${window.location.origin}${locale === "es" ? "/es" : "/"}`);
    ensureMeta('meta[property="og:type"]', "content", "website");
    ensureMeta('meta[property="og:image"]', "content", `${window.location.origin}/og-image.svg`);
    ensureMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    ensureMeta('meta[name="twitter:title"]', "content", content.meta.ogTitle);
    ensureMeta('meta[name="twitter:description"]', "content", content.meta.ogDescription);
    ensureMeta('meta[name="twitter:image"]', "content", `${window.location.origin}/og-image.svg`);

    const canonical = `${window.location.origin}${locale === "es" ? "/es" : "/"}`;
    const alternates = [
      { hreflang: "en", href: `${window.location.origin}/` },
      { hreflang: "es", href: `${window.location.origin}/es` },
      { hreflang: "x-default", href: `${window.location.origin}/` },
    ];

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    alternates.forEach(({ hreflang, href }) => {
      const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
      let link = document.head.querySelector<HTMLLinkElement>(selector);
      if (!link) {
        link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = hreflang;
        document.head.appendChild(link);
      }
      link.href = href;
    });
  }, [content.meta.description, content.meta.ogDescription, content.meta.ogTitle, content.meta.title, locale]);

  const navigateToLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    const nextPath = getPathForLocale(nextLocale);
    window.history.pushState({}, "", nextPath);
    setLocale(nextLocale);
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <main
        className="cv-load-in min-h-screen bg-background px-0 py-0 md:flex md:justify-center md:px-4"
        
      >
        <article
          className="cv-load-in cv-load-in--hero w-full bg-background md:my-0 md:w-[850px] lg:w-[972px]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          <header
            className="cv-load-in cv-load-in--hero px-6 pb-8 pt-8 sm:px-8 md:px-10 md:pb-10 md:pt-10"
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.58, ease: MOTION_EASE, delay: 0.05 }
            }
          >
            <div className="grid items-center gap-6 md:grid-cols-[240px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-10">
              <div className="flex justify-center md:justify-start">
                <div
                  className="cv-load-in cv-load-in--hero relative h-[252px] w-[252px] overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_22px_50px_rgba(15,23,42,0.10)] transition duration-300 hover:shadow-[0_28px_60px_rgba(15,23,42,0.14)] sm:h-[276px] sm:w-[276px] lg:h-[302px] lg:w-[302px]"
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.45, ease: MOTION_EASE, delay: 0.08 }
                  }
                >
                  <img
                    src={profileImage}
                    alt="Ignacio Perez Roca"
                    className="h-full w-full scale-[1.04] object-cover"
                    style={{ objectPosition: "46% 16%" }}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { duration: 0.35, ease: MOTION_EASE, delay: 0.08 }
                    }
                  />
                </div>
              </div>

              <div className="relative rounded-[30px] border border-[rgba(15,23,42,0.08)] bg-[rgba(255,255,255,0.92)] px-6 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-[2px] sm:px-7 sm:py-7 md:px-8 md:py-8">
                <div className="absolute right-4 top-4 md:right-6 md:top-6">
                  <LocaleSwitch locale={locale} onChange={navigateToLocale} />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-[34px] font-semibold tracking-[-0.03em] text-[hsl(var(--cv-section-title))] sm:text-[40px] lg:text-[46px]">
                    Ignacio Perez Roca
                  </h1>
                  <p className="mt-2 max-w-[34rem] text-[15px] leading-[1.45] text-[hsl(var(--cv-light-text))] sm:text-[16px]">
                    {content.header.headline}
                  </p>
                </div>

                <address className="not-italic">
                  <div className="mt-6 flex items-stretch gap-4">
                    <div className="w-[3px] rounded bg-[hsl(var(--cv-contact-bar))]" />
                    <div className="flex flex-col gap-3 text-left">
                      <a
                        href="tel:+5491158077847"
                        className="group flex items-center gap-3 text-[13px] text-[hsl(var(--cv-body))] transition-colors duration-200 hover:text-[hsl(var(--cv-section-title))]"
                        aria-label={content.header.phoneAria}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(15,23,42,0.08)] bg-white/80 text-[hsl(var(--cv-contact-bar))] transition duration-200 group-hover:border-[rgba(29,164,237,0.18)] group-hover:bg-[rgba(29,164,237,0.06)]">
                        <WhatsAppIcon />
                        </span>
                        <span>+54 911 5807 7847</span>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/ignacio-perez-roca-10101010/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-[13px] text-[hsl(var(--cv-body))] transition-colors duration-200 hover:text-[hsl(var(--cv-section-title))]"
                        aria-label={content.header.linkedinAria}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(15,23,42,0.08)] bg-white/80 text-[hsl(var(--cv-contact-bar))] transition duration-200 group-hover:border-[rgba(29,164,237,0.18)] group-hover:bg-[rgba(29,164,237,0.06)]">
                          <LinkedInIcon />
                        </span>
                        <span>{content.header.linkedinLabel}</span>
                      </a>

                      <a
                        href="https://medium.com/@ignacio-perezroca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-[13px] text-[hsl(var(--cv-body))] transition-colors duration-200 hover:text-[hsl(var(--cv-section-title))]"
                        aria-label={content.header.mediumAria}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(15,23,42,0.08)] bg-white/80 text-[hsl(var(--cv-contact-bar))] transition duration-200 group-hover:border-[rgba(29,164,237,0.18)] group-hover:bg-[rgba(29,164,237,0.06)]">
                        <MediumIcon />
                        </span>
                        <span>{content.header.mediumLabel}</span>
                      </a>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </header>

          <div className="cv-load-in cv-load-in--row flex flex-col gap-5 px-6 pb-12 sm:px-8 md:px-10">
            <div className="cv-load-in cv-load-in--row flex flex-col gap-5 md:gap-4">
              <div className="cv-load-in cv-load-in--row mb-8 flex flex-col gap-6 md:mb-8 md:grid md:grid-cols-2 md:items-stretch md:gap-x-[32px] md:gap-y-0 lg:mb-8 lg:gap-x-[34px]">
                <section
                  className="cv-load-in cv-load-in--section order-1 h-full md:order-none md:flex md:flex-col"
                  data-section="Personal Statement"
                  
                >
                  <h2 className="cv-section-title">
                    {sections.personalStatement.title}
                  </h2>
                  <p className="cv-section-subtitle">
                    {sections.personalStatement.subtitle}
                  </p>
                  <DottedSeparator />

                  <div className="mt-2 space-y-2">
                    <p className="cv-body-text">
                      {renderRichText(sections.personalStatement.paragraphs[0])}
                    </p>
                    <p className="cv-body-text">
                      {renderRichText(sections.personalStatement.paragraphs[1])}
                    </p>
                    <p className="cv-body-text">
                      {renderRichText(sections.personalStatement.paragraphs[2])}
                    </p>
                    <p className="cv-body-text">
                      {renderRichText(sections.personalStatement.paragraphs[3])}
                    </p>
                    <p className="cv-body-text">
                      {renderRichText(sections.personalStatement.paragraphs[4])}
                    </p>
                  </div>

                  <section className="mt-3" data-section="Key Achievements">
                    <p className="cv-body-text mb-1 font-bold">
                      {sections.personalStatement.achievementsTitle}
                    </p>
                    <ul className="cv-body-text list-none space-y-0.5">
                      {sections.personalStatement.achievements.map((item) => (
                        <li key={item}>• {renderRichText(item)}</li>
                      ))}
                    </ul>
                  </section>
                </section>

                <section
                  className="cv-load-in cv-load-in--section order-3 h-full md:order-none md:flex md:flex-col"
                  data-section="Experience"
                  
                >
                  <h2 className="cv-section-title">{sections.experience.title}</h2>
                  <p className="cv-section-subtitle">
                    {sections.experience.subtitle}
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

              <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:items-stretch md:gap-x-[32px] md:gap-y-0 lg:gap-x-[34px]">
                <section
                  className="cv-load-in cv-load-in--section order-2 h-full md:order-none md:flex md:min-h-[300px] md:flex-col"
                  data-section="Specialty"
                  
                >
                  <h2 className="cv-section-title">{sections.specialty.title}</h2>
                  <p className="cv-section-subtitle">
                    {sections.specialty.subtitle}
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
                        label={sections.specialty.items[0]}
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
                        label={sections.specialty.items[1]}
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
                        label={sections.specialty.items[2]}
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
                  <h2 className="cv-section-title">{sections.languages.title}</h2>
                  <p className="cv-section-subtitle">
                    {sections.languages.subtitle}
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

              <div className="mt-12 flex flex-col gap-6 md:mt-14 md:grid md:grid-cols-2 md:items-stretch md:gap-x-[32px] md:gap-y-0 lg:mt-16 lg:gap-x-[34px]">
                <section
                  className="cv-load-in cv-load-in--section order-5 h-full md:order-none md:flex md:self-start md:flex-col"
                  data-section="Skills"
                  
                >
                  <h2 data-animate className="cv-section-title skills-title">
                    {sections.tools.title}
                  </h2>
                  <p
                    data-animate
                    className="skills-subtitle cv-section-subtitle"
                  >
                    {sections.tools.subtitle}
                  </p>
                  <DottedSeparator />

                  <ul
                    className="skills-list cv-load-in cv-load-in--row mt-4 grid list-none grid-cols-1 gap-3 min-[420px]:grid-cols-2"
                  >
                    {tools.map((tool, index) => (
                      <li
                        key={tool.name}
                        data-animate
                        className="cv-load-in cv-load-in--stagger h-full"
                        style={{ animationDelay: `${index * 55}ms` }}
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { duration: 0.45, ease: MOTION_EASE, delay: index * 0.04 }
                        }
                      >
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${tool.name} official website`}
                          className="group flex h-full items-start gap-3 rounded-[16px] border border-[rgba(17,24,39,0.08)] bg-white px-3 py-3 text-left shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(29,164,237,0.18)] hover:bg-white hover:shadow-[0_8px_24px_rgba(17,24,39,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,164,237,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transform-none motion-reduce:transition-none"
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
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>

                <section
                  className="cv-load-in cv-load-in--section order-6 h-full md:order-none md:flex md:self-start md:flex-col"
                  data-section="Education"
                  
                >
                  <h2 data-animate className="education-title cv-section-title">
                    {sections.education.title}
                  </h2>
                  <p className="cv-section-subtitle">
                    {sections.education.subtitle}
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
