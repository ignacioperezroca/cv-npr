import * as amplitude from "@amplitude/analytics-browser";
import { ANALYTICS_EVENTS } from "./events";
import type { Locale } from "../i18n";

type Primitive = string | number | boolean | null | undefined;

export type AnalyticsProperties = Record<
  string,
  Primitive | Primitive[] | Record<string, Primitive>
>;

export type AnalyticsContext = {
  locale?: Locale;
  page_title?: string;
  page_path?: string;
  canonical_url?: string;
  component_name?: string;
  section_name?: string;
  element_text?: string;
  element_type?: string;
  destination_url?: string;
  interaction_type?: string;
  from_locale?: Locale;
  to_locale?: Locale;
  tool_name?: string;
  tool_category?: string;
  contact_type?: string;
  link_type?: string;
  education_title?: string;
  education_org?: string;
};

const apiKey = import.meta.env.VITE_AMPLITUDE_API_KEY as string | undefined;
const serverUrl = import.meta.env.VITE_AMPLITUDE_SERVER_URL as string | undefined;

let initialized = false;
let warnedMissingKey = false;

function isBrowser() {
  return typeof window !== "undefined";
}

function getDeviceType() {
  if (!isBrowser()) return "unknown";

  const width = window.innerWidth;
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

function getRuntimeProperties(): AnalyticsProperties {
  if (!isBrowser()) return {};

  return {
    device_type: getDeviceType(),
    referrer: document.referrer || undefined,
    tracked_at: new Date().toISOString(),
  };
}

function getBaseProperties(context: AnalyticsContext = {}): AnalyticsProperties {
  if (!isBrowser()) {
    return context;
  }

  return {
    ...getRuntimeProperties(),
    ...context,
    page_path: context.page_path ?? window.location.pathname,
    page_title: context.page_title ?? document.title,
    canonical_url:
      context.canonical_url ?? `${window.location.origin}${window.location.pathname}`,
  };
}

export function initAnalytics() {
  if (!isBrowser() || initialized) return;

  if (!apiKey) {
    if (import.meta.env.DEV && !warnedMissingKey) {
      console.info(
        "[analytics] Amplitude is disabled because VITE_AMPLITUDE_API_KEY is not set.",
      );
      warnedMissingKey = true;
    }
    return;
  }

  amplitude.init(apiKey, {
    autocapture: false,
    defaultTracking: false,
    serverUrl,
  });

  initialized = true;
}

export function trackEvent(name: string, context: AnalyticsContext = {}) {
  if (!isBrowser()) return;
  initAnalytics();

  if (!apiKey) return;

  amplitude.track(name, getBaseProperties(context));
}

export function trackPageViewed(context: AnalyticsContext = {}) {
  trackEvent(ANALYTICS_EVENTS.PageViewed, {
    ...context,
    interaction_type: "view",
  });
}

export function trackSectionViewed(context: AnalyticsContext = {}) {
  trackEvent(ANALYTICS_EVENTS.SectionViewed, {
    ...context,
    interaction_type: "view",
  });
}

export function trackNavigationClicked(context: AnalyticsContext = {}) {
  trackEvent(ANALYTICS_EVENTS.NavigationClicked, {
    ...context,
    interaction_type: "navigation",
  });
}

export function trackLanguageChanged(context: AnalyticsContext = {}) {
  trackEvent(ANALYTICS_EVENTS.LanguageChanged, {
    ...context,
    interaction_type: "language_switch",
  });
}

export function trackContactStarted(context: AnalyticsContext = {}) {
  trackEvent(ANALYTICS_EVENTS.ContactStarted, {
    ...context,
    interaction_type: "click",
  });
}

export function trackSocialLinkClicked(context: AnalyticsContext = {}) {
  trackEvent(ANALYTICS_EVENTS.SocialLinkClicked, {
    ...context,
    interaction_type: "click",
  });
}

export function trackLinkedInOpened(context: AnalyticsContext = {}) {
  trackEvent(ANALYTICS_EVENTS.LinkedInOpened, {
    ...context,
    interaction_type: "click",
  });
}

export function trackToolLinkClicked(context: AnalyticsContext = {}) {
  trackEvent(ANALYTICS_EVENTS.ToolLinkClicked, {
    ...context,
    interaction_type: "click",
  });
}

export function trackEducationLinkClicked(context: AnalyticsContext = {}) {
  trackEvent(ANALYTICS_EVENTS.EducationLinkClicked, {
    ...context,
    interaction_type: "click",
  });
}

