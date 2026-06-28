/**
 * Vertical configuration — the ONLY file to change per directory vertical.
 * Vertical: Window Cleaning | Domain: windows.outdoorwashing.com
 */

import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Eye,
  Grid3X3,
  Building2,
  Sun,
  Home,
  Search,
  Wrench,
  MapPin,
  Zap,
  BadgeCheck,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";

// ─── Types (same interface as powerwash template) ─────────────────────────────

export interface HeadlineLine {
  text: string;
  highlight?: boolean;
}

export interface ServiceItem {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

export interface PropertyType {
  id: string;
  label: string;
}

export interface SiteColors {
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryXLight: string;
  dark: string;
  darkDeep: string;
  lightBg: string;
}

export interface SiteConfig {
  brand: string;
  brandSuffix: string;
  icon: LucideIcon;
  verticalSlug: string;
  verticalName: string;
  verticalProNoun: string;
  domain: string;
  adsenseClient: string;
  colors: SiteColors;
  seo: {
    title: string;
    description: string;
    keywords: string;
    schemaServiceCategory: string;
    schemaServiceNames: string[];
  };
  hero: {
    badge: string;
    headlineLines: HeadlineLine[];
    subtext: string;
    trustSignals: { icon: LucideIcon; label: string }[];
  };
  stats: { icon: LucideIcon; value: string; label: string }[];
  reviews: { name: string; city: string; initials: string; text: string }[];
  faqs: { q: string; a: string }[];
  services: ServiceItem[];
  propertyTypes: PropertyType[];
  cta: {
    text: string;
    zipPlaceholder: string;
    zipSubtext: string;
  };
  cityPage: {
    headlineVerb: string;
    metaTitleTemplate: string;
    metaDescTemplate: string;
    ogTitleTemplate: string;
    ogDescTemplate: string;
  };
}

// ─── Config ──────────────────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  brand: "ClearView",
  brandSuffix: "Directory",
  icon: Sparkles,

  verticalSlug: "window-cleaning",
  verticalName: "Window Cleaning",
  verticalProNoun: "window cleaning professionals",

  domain: "windows.outdoorwashing.com",
  adsenseClient: "ca-pub-3493426366115346",

  colors: {
    primary:       "#059669",  // emerald-600
    primaryHover:  "#047857",  // emerald-700
    primaryLight:  "#34d399",  // emerald-400
    primaryXLight: "#a7f3d0",  // emerald-200
    dark:          "#064e3b",  // emerald-900
    darkDeep:      "#022c22",
    lightBg:       "#ecfdf5",  // emerald-50
  },

  seo: {
    title: "ClearView Directory — Find Top-Rated Local Window Cleaning Pros",
    description:
      "Get free quotes from licensed, insured window cleaning professionals in your area. Crystal-clear results, competitive rates, no obligation.",
    keywords:
      "window cleaning, window washers, window cleaning service, local pros, free quotes, residential window cleaning, commercial window cleaning",
    schemaServiceCategory: "Window Cleaning Services",
    schemaServiceNames: [
      "Exterior Window Cleaning",
      "Interior Window Cleaning",
      "Screen Cleaning & Repair",
      "Track & Sill Cleaning",
      "Skylight Cleaning",
      "Commercial Window Washing",
      "High-Rise Window Cleaning",
      "Post-Construction Window Cleanup",
    ],
  },

  hero: {
    badge: "Free quotes from local window cleaning pros",
    headlineLines: [
      { text: "Crystal-Clear Windows," },
      { text: "Zero Effort", highlight: true },
      { text: "On Your End" },
    ],
    subtext: "Local window pros · Fast quotes · No obligation",
    trustSignals: [
      { icon: CheckCircle, label: "Licensed & Insured Pros" },
      { icon: Clock,       label: "Quotes in 24 Hours" },
      { icon: Star,        label: "Streak-Free Guaranteed" },
    ],
  },

  stats: [
    { icon: MapPin,      value: "280+",     label: "Cities Covered" },
    { icon: Zap,         value: "< 24 hrs", label: "Avg. Response Time" },
    { icon: BadgeCheck,  value: "100%",     label: "Free & No Obligation" },
    { icon: CheckCircle, value: "0",        label: "Hidden Fees" },
  ],

  reviews: [],

  faqs: [
    {
      q: "How much does professional window cleaning cost?",
      a: "Most single-story homes run $150–$250 for exterior-only and $200–$350 for interior + exterior. Multi-story homes and large commercial properties are priced per pane or by square footage. Getting quotes through ClearView ensures you compare fair local rates.",
    },
    {
      q: "How often should I have my windows professionally cleaned?",
      a: "Twice a year is the standard for residential homes — once in spring after pollen season and once in fall. Homes near highways, ocean salt air, or construction zones often benefit from quarterly cleaning. Commercial storefronts typically need monthly service.",
    },
    {
      q: "What's included in a standard window cleaning service?",
      a: "A standard service covers exterior glass cleaning, sill and frame wipe-down, and screen removal and cleaning. Interior cleaning, track scrubbing, and hard water stain removal are often add-ons — confirm scope when getting quotes.",
    },
    {
      q: "Are window cleaning pros on ClearView licensed and insured?",
      a: "Yes. All listed pros carry liability insurance. Working at height carries real risk — always verify insurance before hiring.",
    },
    {
      q: "Can window cleaners remove hard water stains?",
      a: "Yes, but it typically requires a separate treatment with a mineral deposit remover. This is charged as an add-on. Severe buildup may require multiple treatments or professional-grade restoration compounds.",
    },
  ],

  services: [
    {
      id: "exterior-windows",
      label: "Exterior Window Cleaning",
      icon: Eye,
      description: "Full exterior glass cleaning with streak-free finish — the core service",
    },
    {
      id: "interior-windows",
      label: "Interior Window Cleaning",
      icon: Home,
      description: "Inside glass cleaned from your living spaces, frames and sills included",
    },
    {
      id: "screen-cleaning",
      label: "Screen Cleaning & Repair",
      icon: Grid3X3,
      description: "Remove, clean, and reinstall window screens — minor tears repaired on-site",
    },
    {
      id: "track-cleaning",
      label: "Track & Sill Cleaning",
      icon: Wrench,
      description: "Deep clean of window tracks and sills where dirt, bugs, and mold accumulate",
    },
    {
      id: "skylight-cleaning",
      label: "Skylight Cleaning",
      icon: Sun,
      description: "Interior and exterior skylight cleaning — maximizes natural light",
    },
    {
      id: "commercial",
      label: "Commercial Window Washing",
      icon: Building2,
      description: "Storefronts, offices, and retail — scheduled maintenance contracts available",
    },
    {
      id: "high-rise",
      label: "High-Rise & Multi-Story",
      icon: Search,
      description: "Rope access or lift-equipped pros for buildings above 3 stories",
    },
    {
      id: "post-construction",
      label: "Post-Construction Cleanup",
      icon: Sparkles,
      description: "Remove paint overspray, concrete splatter, and construction debris from glass",
    },
  ],

  propertyTypes: [
    { id: "single-family", label: "Single Family Home" },
    { id: "townhouse",     label: "Townhouse / Condo" },
    { id: "commercial",    label: "Commercial" },
    { id: "other",         label: "Other" },
  ],

  cta: {
    text: "Get Free Quote",
    zipPlaceholder: "Enter your ZIP code...",
    zipSubtext: "Service available in 280+ cities · Typical response: under 24 hours",
  },

  cityPage: {
    headlineVerb: "Window Cleaning in",
    metaTitleTemplate:
      "Best Window Cleaning in {city}, {state} — Free Quotes | ClearView Directory",
    metaDescTemplate:
      "Find top-rated window cleaning companies in {city}, {state}. Compare reviews, get free quotes from licensed & insured local pros. Streak-free results guaranteed.",
    ogTitleTemplate:
      "Window Cleaning in {city}, {state} — Top Rated Local Pros",
    ogDescTemplate:
      "Compare the best window cleaning companies in {city}, {state}. Free quotes, verified reviews.",
  },
};

/** Interpolate {city} and {state} placeholders in city page templates. */
export function cityTemplate(template: string, city: string, state: string) {
  return template.replace(/\{city\}/g, city).replace(/\{state\}/g, state);
}
