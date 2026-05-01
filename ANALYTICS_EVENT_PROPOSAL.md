# Amplitude Event Tracking Proposal

Scope: portfolio CV website at `ignacio-product-cv.vercel.app`

This proposal keeps the taxonomy compact, readable, and easy to analyze in Amplitude. Event names are intentionally human-friendly and the key context lives in event properties.

## Page and view events

| Event name | Trigger | Where implemented | Suggested properties | Why it matters |
| --- | --- | --- | --- | --- |
| `Page Viewed` | App loads or locale route changes (`/`, `/es`, `/pt`) | App shell / locale routing effect | `page_path`, `page_title`, `locale`, `referrer`, `device_type`, `canonical_url` | Measures landing traffic and language preference. |
| `Section Viewed` | A main section enters the viewport for the first time on a given page load | Section visibility observer | `page_path`, `section_name`, `component_name`, `locale`, `device_type` | Shows which parts of the CV get attention and in what order. |
| `Experience Viewed` | Experience section becomes visible | Same section observer, filtered by `section_name` | `page_path`, `section_name`, `component_name`, `locale` | Helps understand whether recruiters reach the work history. |
| `Skills Viewed` | Tools & Skills section becomes visible | Same section observer, filtered by `section_name` | `page_path`, `section_name`, `component_name`, `locale` | Indicates interest in tools / technical fluency. |
| `Languages Viewed` | Languages section becomes visible | Same section observer, filtered by `section_name` | `page_path`, `section_name`, `component_name`, `locale` | Useful for understanding multilingual conversion paths. |

## Navigation and locale events

| Event name | Trigger | Where implemented | Suggested properties | Why it matters |
| --- | --- | --- | --- | --- |
| `Language Changed` | User switches locale via header toggle or language cards | Locale switch handlers | `page_path`, `from_locale`, `to_locale`, `interaction_type`, `component_name`, `element_text` | Measures language preference and the effectiveness of the multilingual UX. |
| `Navigation Clicked` | User clicks the header language toggle or any in-page navigation control | Header locale switch | `page_path`, `component_name`, `element_text`, `destination_url`, `interaction_type` | Captures top-level navigation intent without duplicating custom events. |

## Click and link events

| Event name | Trigger | Where implemented | Suggested properties | Why it matters |
| --- | --- | --- | --- | --- |
| `Social Link Clicked` | User clicks LinkedIn or Medium in the hero | Hero contact links | `page_path`, `component_name`, `element_text`, `destination_url`, `link_type`, `interaction_type` | Tracks social proof and external profile intent. |
| `Contact Clicked` | User clicks the phone link | Hero contact links | `page_path`, `component_name`, `element_text`, `destination_url`, `contact_type`, `interaction_type` | Measures direct contact intent. |
| `External Link Clicked` | User clicks a tool, education, or other outbound link | Tools cards, education link, any external CTA | `page_path`, `component_name`, `element_text`, `destination_url`, `link_type`, `interaction_type` | Shows which external destinations are most compelling. |
| `Tool Link Clicked` | User clicks a specific tool card | Tools card wrapper | `page_path`, `component_name`, `tool_name`, `tool_category`, `destination_url`, `interaction_type` | Identifies which tools resonate most with recruiters. |
| `Education Link Clicked` | User opens a certification or learning resource | Education timeline item with URL | `page_path`, `component_name`, `education_title`, `destination_url`, `interaction_type` | Measures interest in certifications and learning history. |

## Conversion-oriented events

| Event name | Trigger | Where implemented | Suggested properties | Why it matters |
| --- | --- | --- | --- | --- |
| `LinkedIn Opened` | User opens the LinkedIn profile from the hero | Hero contact link | `page_path`, `component_name`, `destination_url`, `interaction_type` | Direct recruiter/professional-network intent. |
| `CV Opened` | User opens a downloadable or linked CV, if one is added later | CV CTA / download button (not currently present) | `page_path`, `component_name`, `destination_url`, `interaction_type` | Tracks one of the highest-intent conversion actions. |
| `Portfolio Project Opened` | User opens a project or case study link, if one is added later | Project CTA / case study card (not currently present) | `page_path`, `component_name`, `project_name`, `destination_url`, `interaction_type` | Measures deep engagement with proof-of-work content. |
| `Recruiter Intent Detected` | User clicks high-intent items like LinkedIn, phone, or CV | Derived from click events | `page_path`, `component_name`, `destination_url`, `interaction_type` | Provides a clean roll-up for recruiter-focused analysis. |

## Shared event properties

Use these whenever available:

- `page_path`
- `page_title`
- `locale`
- `section_name`
- `component_name`
- `element_text`
- `element_type`
- `destination_url`
- `interaction_type`
- `link_type`
- `tool_name`
- `tool_category`
- `education_title`
- `from_locale`
- `to_locale`
- `device_type`
- `referrer`
- `tracked_at`

## Implementation notes

- Keep a single analytics helper as the only place that talks to Amplitude.
- Initialize Amplitude only on the client and only when `VITE_AMPLITUDE_API_KEY` exists.
- Track section views with `IntersectionObserver` and dedupe them per page load.
- Track click events at the component boundary so UI code stays simple.
- Avoid sending sensitive data. No email addresses, no names beyond public labels, no personal identifiers.

