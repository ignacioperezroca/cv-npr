export const ANALYTICS_EVENTS = {
  PageViewed: "Page Viewed",
  SectionViewed: "Section Viewed",
  NavigationClicked: "Navigation Clicked",
  LanguageChanged: "Language Changed",
  ContactStarted: "Contact Started",
  SocialLinkClicked: "Social Link Clicked",
  LinkedInOpened: "LinkedIn Opened",
  ToolLinkClicked: "Tool Link Clicked",
  EducationLinkClicked: "Education Link Clicked",
} as const;

export type AnalyticsEventName =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

