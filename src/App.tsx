import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import profileImage from "./assets/profile.png";
import educationIcon from "./assets/education-icon.png";
import bitsoLogo from "./assets/bitso-logo.png";
import ittiLogo from "./assets/itti-logo.png";
import lemonLogo from "./assets/lemon-logo.png";
import personalPayLogo from "./assets/personalpay-logo.png";
import iunigoLogo from "./assets/iunigo-logo.png";
import ripioLogo from "./assets/ripio-logo.png";
import telecomLogo from "./assets/telecom-logo.png";
import thetLogo from "./assets/thet-logo.png";

type Skill = {
  name: string;
  level: number;
};

type EducationItem = {
  year: string;
  title: string;
  org: string;
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

const skills: Skill[] = [
  { name: "HTML5", level: 10 },
  { name: "CSS3", level: 10 },
  { name: "Javascript", level: 9 },
  { name: "Typescript", level: 8 },
  { name: "Angular", level: 8 },
  { name: "Solidity", level: 6 },
  { name: "Bootstrap", level: 9 },
  { name: "Adobe Photoshop", level: 10 },
  { name: "Adobe Illustrator", level: 10 },
];

const knowledge = [
  "Product Strategy",
  "Product Vision",
  "Roadmap",
  "Team Leadership",
  "Scrum Master",
  "User Experience",
  "Web Development",
  "Product Development",
  "Product Management",
  "Blockchain | DEFI",
];

const education: EducationItem[] = [
  { year: "2023", title: "Growth Product Management", org: "Reforge®" },
  {
    year: "2019",
    title: "Certified Scrum Product Owner (CSPO®)",
    org: "Scrum Alliance. International Certified",
  },
  {
    year: "2016",
    title: "Scrum Master Certified (SMC ®)",
    org: "Scrum Alliance. International Certified",
  },
  { year: "2015", title: "Angular", org: "Udemy. International Certified" },
  {
    year: "2012",
    title: "Frontend Developer",
    org: "Coderhouse, Buenos Aires. Argentina",
  },
  {
    year: "2012",
    title: "Web development",
    org: "Code Academy. International Certified",
  },
  {
    year: "2009",
    title: "Bachelor in Graphic Design",
    org: "Universidad de Buenos Aires. Argentina",
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
    <div className="flex gap-[3px]">
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
      <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full border-[1.5px] border-[hsl(var(--cv-dotted-line))] sm:h-[118px] sm:w-[118px] md:h-[110px] md:w-[110px]">
        <div className={iconClassName}>{icon}</div>
      </div>
      <span className="-mt-[2px] h-[8px] w-[8px] rounded-full bg-[hsl(var(--cv-section-title))]" />
      <span className="h-[30px] w-[1.5px] bg-[hsl(var(--cv-dotted-line))] sm:h-[40px] md:h-[48px]" />
      <span className="mt-2 text-center text-[12px] font-normal text-[hsl(var(--cv-section-title))] sm:text-[13px] md:mt-3 md:text-[10px]">
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
      ? "hsl(43 100% 51%)"
      : label === "ENGLISH"
        ? "hsl(211 73% 45%)"
        : "hsl(126 47% 38%)";

  return (
    <div className="flex flex-col items-center">
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle
          cx="45"
          cy="45"
          r="38"
          fill="none"
          stroke="hsl(var(--cv-skill-dot-empty))"
          strokeWidth="6"
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

export default function App() {
  return (
    <>
      <main className="min-h-screen bg-background px-0 py-0 md:flex md:justify-center md:px-4">
        <article
          className="w-full bg-background md:my-0 md:w-[850px]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          <header className="flex flex-col items-center gap-5 px-6 pb-6 pt-8 text-center sm:px-8 md:flex-row md:items-start md:gap-8 md:px-10 md:pb-6 md:pt-10 md:text-left">
            <div className="h-[124px] w-[124px] shrink-0 overflow-hidden rounded-full bg-white sm:h-[140px] sm:w-[140px] md:h-[150px] md:w-[150px]">
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

          <div className="flex flex-col gap-10 px-6 pb-8 sm:px-8 md:flex-row md:gap-8 md:px-10">
            <div className="flex w-full flex-col md:w-[55%]">
              <section>
                <h2 className="cv-section-title mb-2">PERSONAL STATEMENT</h2>
                <DottedSeparator />

                <div className="mt-3 space-y-3">
                  <p className="cv-body-text">
                    I&apos;m a Senior Product Manager with 16+ years of
                    experience building human-first, scalable onboarding
                    journeys.
                  </p>
                  <p className="cv-body-text">
                    Over the years, I&apos;ve acquired a wide range of tools,
                    tactics, and experience across various roles and industries.
                    I specialize in digital identity, KYC, authentication, and
                    product-led growth. I&apos;ve led international teams from
                    0 to 18+ across Argentina, Brazil, Mexico, Paraguay, and
                    Colombia, successfully onboarding over 8 million users in
                    fintech, crypto, and Web3.
                  </p>
                  <p className="cv-body-text">
                    Having built products from scratch in various roles, my
                    strength lies in combining empathy and visual thinking (User
                    Experience Design) with technical experience (8 years as a
                    developer). This holistic perspective allows me to
                    translate metrics into meaningful product experiences that
                    drive acquisition, retention, and long-term impact.
                  </p>
                  <p className="cv-body-text">
                    When it comes to building, I rely on data to surface real
                    problems and opportunities, and I craft products that
                    simplify people&apos;s lives. I hold a Certified Scrum
                    Product Owner (CSPO®), Certified Scrum Trainer (CST®), and
                    several other certifications from world-class universities.
                  </p>
                  <p className="cv-body-text">
                    My mission is to build trust, empower teams, and deliver
                    products that people love.
                  </p>
                </div>
              </section>

            <section className="mt-5">
              <p className="cv-body-text mb-1 font-bold">Key achievements</p>
              <ul className="cv-body-text list-none space-y-0.5">
                <li>
                  • Boosted Bitso&apos;s onboarding conversion by +262% for
                  over 8M users.
                </li>
                <li>
                  • Scaled Lemon from 60k to 2M users in 6 months (+3200%
                  growth).
                </li>
                <li>
                  • Built and scaled UNID (Unified Identity), unifying ~3M
                  users across 30 companies within the Grupo Vázquez
                  ecosystem.
                </li>
                <li>
                  • Led multi-country onboarding launches across LatAm,
                  acquiring over 1M users in the first year.
                </li>
                <li>
                  • Led Bitso&apos;s product expansion, scaling from 4 million
                  to nearly 7 million users (+75% annual growth).
                </li>
                <li>
                  • Developed a new home screen for an exchange with over 8M
                  users, driving a 35% increase in product activation.
                </li>
                <li>
                  • Led cross-functional teams from 0 to 18+ across Argentina,
                  Brazil, Mexico, Paraguay, Colombia and United States.
                </li>
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="cv-section-title mb-2">SPECIALTY</h2>
              <DottedSeparator />

              <div className="mt-6 flex flex-col items-center gap-8 px-3 sm:gap-10 md:flex-row md:items-start md:justify-between md:gap-0">
                <SpecialtyNode
                  label="Product"
                  iconClassName="text-[hsl(201_85%_52%)]"
                  icon={
                    <svg
                      width="34"
                      height="48"
                      viewBox="0 0 34 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M17 2C9.6 2 4 7.5 4 14.6c0 4.3 1.9 7.5 4.1 11 2 3.2 4.2 6.8 4.7 11.4h8.4c.5-4.6 2.7-8.2 4.7-11.4 2.2-3.5 4.1-6.7 4.1-11C30 7.5 24.4 2 17 2Z"
                        fill="currentColor"
                      />
                      <rect x="10" y="39" width="14" height="3" rx="1.5" fill="currentColor" />
                      <rect x="11" y="44" width="12" height="3" rx="1.5" fill="currentColor" />
                    </svg>
                  }
                />

                <SpecialtyNode
                  label="Development"
                  iconClassName="text-[hsl(201_85%_52%)]"
                  icon={
                    <svg
                      width="46"
                      height="40"
                      viewBox="0 0 46 40"
                      aria-hidden="true"
                    >
                      <rect x="6" y="14" width="22" height="22" fill="currentColor" />
                      <rect
                        x="17"
                        y="8"
                        width="22"
                        height="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <rect
                        x="24"
                        y="3"
                        width="19"
                        height="19"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                    </svg>
                  }
                />

                <SpecialtyNode
                  label="UX / UI Design"
                  iconClassName="text-[hsl(201_85%_52%)]"
                  icon={
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      aria-hidden="true"
                    >
                      <rect
                        x="5"
                        y="5"
                        width="34"
                        height="34"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <line
                        x1="5"
                        y1="14"
                        x2="39"
                        y2="14"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <line
                        x1="22"
                        y1="14"
                        x2="22"
                        y2="39"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                  }
                />
              </div>
            </section>

            <section className="mt-6">
              <h2 className="cv-section-title mb-2">SKILLS</h2>
              <DottedSeparator />

              <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:gap-8">
                <div>
                  <p className="mb-2 text-[11px] italic text-[hsl(var(--cv-light-text))]">
                    Languages
                  </p>
                  <div className="space-y-1.5">
                    {skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3"
                      >
                        <span className="w-[100px] text-[10px] text-[hsl(var(--cv-body))]">
                          {skill.name}
                        </span>
                        <SkillDots filled={skill.level} />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[11px] italic text-[hsl(var(--cv-light-text))]">
                    Knowledge
                  </p>
                  <div className="space-y-1.5 text-[10px] text-[hsl(var(--cv-body))]">
                    {knowledge.map((item) => (
                      <p key={item} className="leading-[1.8]">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
                <div>
                  <p className="mb-1.5 text-[10px] italic text-[hsl(var(--cv-light-text))]">
                    Frameworks
                  </p>
                  <div className="space-y-1 text-[10px] text-[hsl(var(--cv-body))]">
                    <p>Material Design</p>
                    <p>Angular</p>
                    <p>React</p>
                  </div>
                </div>

                <div>
                  <p className="mb-1.5 text-[10px] italic text-[hsl(var(--cv-light-text))]">
                    Product Strategy
                  </p>
                  <div className="space-y-1 text-[10px] text-[hsl(var(--cv-body))]">
                    <p>Roadmap</p>
                    <p>Prioritization + Slicing</p>
                    <p>Jira / Trello / Notion</p>
                  </div>
                </div>

                <div>
                  <p className="mb-1.5 text-[10px] italic text-[hsl(var(--cv-light-text))]">
                    Business Analytics
                  </p>
                  <div className="space-y-1 text-[10px] text-[hsl(var(--cv-body))]">
                    <p>Google Analytics</p>
                    <p>Amplitude</p>
                    <p>Looker</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="flex w-full flex-col md:w-[45%]">
            <section>
              <div className="mb-2 flex items-center gap-2">
                <img
                  src={educationIcon}
                  alt="Education"
                  className="h-8 w-8"
                />
              </div>
              <h2 className="cv-section-title mb-2">EDUCATION</h2>
              <DottedSeparator />

              <div className="mt-3 space-y-3">
                {education.map((item, index) => (
                  <div key={`${item.year}-${item.title}`} className="flex gap-3">
                    <div className="mt-1 flex flex-col items-center">
                      <span className="cv-timeline-dot" />
                      {index < education.length - 1 ? (
                        <span className="cv-timeline-line mt-1 h-8" />
                      ) : null}
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-[hsl(var(--cv-section-title))]">
                        {item.year}
                      </p>
                      <p className="text-[10px] font-semibold text-[hsl(var(--cv-body))]">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-[hsl(var(--cv-light-text))]">
                        {item.org}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h2 className="cv-section-title mb-2">EXPERIENCE</h2>
              <DottedSeparator />

              <div className="mt-3 space-y-4">
                {experience.map((item) => (
                  <div
                    key={`${item.company}-${item.role}`}
                    className="flex items-start gap-3"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-[hsl(var(--cv-timeline-dot))]">
                        ▲
                      </span>
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
                      <p className="text-[10px] text-[hsl(var(--cv-body))]">
                        {item.company}
                      </p>
                      <p className="text-[9px] text-[hsl(var(--cv-light-text))]">
                        {item.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h2 className="cv-section-title mb-2">LANGUAGES</h2>
              <DottedSeparator />

              <div className="mt-4 grid grid-cols-1 gap-6 px-2 min-[420px]:grid-cols-3 min-[420px]:gap-2">
                {languages.map((language) => (
                  <LanguageCircle key={language.label} {...language} />
                ))}
              </div>
            </section>
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
