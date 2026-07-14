import { createServerClient } from "./supabase";
import { siteConfig } from "@/config/site";

export interface Company {
  id: string;
  slug: string;
  business_name: string;
  phone: string | null;
  address: string | null;
  city: string;
  state: string;
  website: string | null;
  rating: number | null;
  review_count: number;
  services: string[];
  is_verified: boolean;
  is_featured: boolean;
  is_claimed: boolean;
  latitude: number | null;
  longitude: number | null;
  short_description: string | null;
  description: string | null;
  logo_url: string | null;
}

export interface CityPageData {
  city: string;
  state: string;
  companies: Company[];
}

// Canonical city list — only cities with verified scraped company data
export const DIRECTORY_CITIES: { city: string; state: string; stateAbbr: string }[] = [
  // ── Arizona ──────────────────────────────────────────────────────────────────
  { city: "Chandler",         state: "Arizona",          stateAbbr: "AZ" },
  { city: "Mesa",             state: "Arizona",          stateAbbr: "AZ" },
  { city: "Phoenix",          state: "Arizona",          stateAbbr: "AZ" },
  { city: "Scottsdale",       state: "Arizona",          stateAbbr: "AZ" },
  { city: "Tempe",            state: "Arizona",          stateAbbr: "AZ" },
  { city: "Tucson",           state: "Arizona",          stateAbbr: "AZ" },
  // ── California ───────────────────────────────────────────────────────────────
  { city: "Anaheim",          state: "California",       stateAbbr: "CA" },
  { city: "Costa Mesa",       state: "California",       stateAbbr: "CA" },
  { city: "Fresno",           state: "California",       stateAbbr: "CA" },
  { city: "Irvine",           state: "California",       stateAbbr: "CA" },
  { city: "Long Beach",       state: "California",       stateAbbr: "CA" },
  { city: "Los Angeles",      state: "California",       stateAbbr: "CA" },
  { city: "Riverside",        state: "California",       stateAbbr: "CA" },
  { city: "Sacramento",       state: "California",       stateAbbr: "CA" },
  { city: "San Diego",        state: "California",       stateAbbr: "CA" },
  { city: "San Jose",         state: "California",       stateAbbr: "CA" },
  // ── Colorado ──────────────────────────────────────────────────────────────────
  { city: "Centennial",       state: "Colorado",         stateAbbr: "CO" },
  { city: "Colorado Springs", state: "Colorado",         stateAbbr: "CO" },
  { city: "Denver",           state: "Colorado",         stateAbbr: "CO" },
  // ── Florida ───────────────────────────────────────────────────────────────────
  { city: "Jacksonville",     state: "Florida",          stateAbbr: "FL" },
  { city: "Miami",            state: "Florida",          stateAbbr: "FL" },
  { city: "Orlando",          state: "Florida",          stateAbbr: "FL" },
  { city: "Tampa",            state: "Florida",          stateAbbr: "FL" },
  { city: "Winter Park",      state: "Florida",          stateAbbr: "FL" },
  // ── Georgia ───────────────────────────────────────────────────────────────────
  { city: "Atlanta",          state: "Georgia",          stateAbbr: "GA" },
  // ── Illinois ──────────────────────────────────────────────────────────────────
  { city: "Chicago",          state: "Illinois",         stateAbbr: "IL" },
  // ── Indiana ───────────────────────────────────────────────────────────────────
  { city: "Indianapolis",     state: "Indiana",          stateAbbr: "IN" },
  // ── Kentucky ──────────────────────────────────────────────────────────────────
  { city: "Louisville",       state: "Kentucky",         stateAbbr: "KY" },
  // ── Maryland ──────────────────────────────────────────────────────────────────
  { city: "Baltimore",        state: "Maryland",         stateAbbr: "MD" },
  // ── Minnesota ─────────────────────────────────────────────────────────────────
  { city: "Minneapolis",      state: "Minnesota",        stateAbbr: "MN" },
  { city: "St Paul",          state: "Minnesota",        stateAbbr: "MN" },
  // ── Missouri ──────────────────────────────────────────────────────────────────
  { city: "Kansas City",      state: "Missouri",         stateAbbr: "MO" },
  { city: "St. Louis",        state: "Missouri",         stateAbbr: "MO" },
  // ── Nebraska ──────────────────────────────────────────────────────────────────
  { city: "Omaha",            state: "Nebraska",         stateAbbr: "NE" },
  // ── Nevada ────────────────────────────────────────────────────────────────────
  { city: "Las Vegas",        state: "Nevada",           stateAbbr: "NV" },
  // ── New Mexico ────────────────────────────────────────────────────────────────
  { city: "Albuquerque",      state: "New Mexico",       stateAbbr: "NM" },
  // ── New York ──────────────────────────────────────────────────────────────────
  { city: "Brooklyn",         state: "New York",         stateAbbr: "NY" },
  { city: "New York",         state: "New York",         stateAbbr: "NY" },
  // ── North Carolina ────────────────────────────────────────────────────────────
  { city: "Charlotte",        state: "North Carolina",   stateAbbr: "NC" },
  { city: "Raleigh",          state: "North Carolina",   stateAbbr: "NC" },
  // ── Ohio ──────────────────────────────────────────────────────────────────────
  { city: "Cincinnati",       state: "Ohio",             stateAbbr: "OH" },
  { city: "Columbus",         state: "Ohio",             stateAbbr: "OH" },
  // ── Oklahoma ──────────────────────────────────────────────────────────────────
  { city: "Oklahoma City",    state: "Oklahoma",         stateAbbr: "OK" },
  // ── Oregon ────────────────────────────────────────────────────────────────────
  { city: "Portland",         state: "Oregon",           stateAbbr: "OR" },
  // ── Pennsylvania ──────────────────────────────────────────────────────────────
  { city: "Philadelphia",     state: "Pennsylvania",     stateAbbr: "PA" },
  { city: "Pittsburgh",       state: "Pennsylvania",     stateAbbr: "PA" },
  // ── Tennessee ─────────────────────────────────────────────────────────────────
  { city: "Memphis",          state: "Tennessee",        stateAbbr: "TN" },
  { city: "Nashville",        state: "Tennessee",        stateAbbr: "TN" },
  // ── Texas ─────────────────────────────────────────────────────────────────────
  { city: "Austin",           state: "Texas",            stateAbbr: "TX" },
  { city: "Cedar Park",       state: "Texas",            stateAbbr: "TX" },
  { city: "Dallas",           state: "Texas",            stateAbbr: "TX" },
  { city: "Fort Worth",       state: "Texas",            stateAbbr: "TX" },
  { city: "Houston",          state: "Texas",            stateAbbr: "TX" },
  { city: "San Antonio",      state: "Texas",            stateAbbr: "TX" },
  // ── Virginia ──────────────────────────────────────────────────────────────────
  { city: "Virginia Beach",   state: "Virginia",         stateAbbr: "VA" },
  // ── Washington ────────────────────────────────────────────────────────────────
  { city: "Seattle",          state: "Washington",       stateAbbr: "WA" },
];

export function cityToSlug(city: string, stateAbbr: string): string {
  const citySlug = city
    .toLowerCase()
    .replace(/[.']/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${siteConfig.verticalSlug}-${citySlug}-${stateAbbr.toLowerCase()}`;
}

export function parseLocationSlug(slug: string): { city: string; state: string } | null {
  const prefix = `${siteConfig.verticalSlug}-`;
  if (!slug.startsWith(prefix)) return null;

  const match = DIRECTORY_CITIES.find((c) => cityToSlug(c.city, c.stateAbbr) === slug);
  if (match) return { city: match.city, state: match.stateAbbr };

  const rest = slug.replace(prefix, "");
  const parts = rest.split("-");
  if (parts.length < 2) return null;
  const state = parts[parts.length - 1].toUpperCase();
  if (state.length !== 2) return null;
  const city = parts
    .slice(0, -1)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
  return { city, state };
}

// ── State helpers ─────────────────────────────────────────────────────────────

export const DIRECTORY_STATES: { state: string; stateAbbr: string }[] =
  Array.from(
    new Map(DIRECTORY_CITIES.map((c) => [c.stateAbbr, { state: c.state, stateAbbr: c.stateAbbr }])).values()
  ).sort((a, b) => a.state.localeCompare(b.state));

function slugifyState(stateName: string): string {
  return stateName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function stateToSlug(stateAbbr: string): string {
  const entry = DIRECTORY_STATES.find((s) => s.stateAbbr === stateAbbr);
  if (!entry) return `${siteConfig.verticalSlug}-${stateAbbr.toLowerCase()}`;
  return `${siteConfig.verticalSlug}-${slugifyState(entry.state)}`;
}

export function parseStateSlug(slug: string): { state: string; stateAbbr: string } | null {
  const prefix = `${siteConfig.verticalSlug}-`;
  if (!slug.startsWith(prefix)) return null;
  const rest = slug.slice(prefix.length);
  return DIRECTORY_STATES.find((s) => slugifyState(s.state) === rest) ?? null;
}

export function getCitiesInState(stateAbbr: string) {
  return DIRECTORY_CITIES.filter((c) => c.stateAbbr === stateAbbr);
}

// Regional groups for cross-state "nearby cities" linking
export const REGIONAL_GROUPS: Record<string, string[]> = {
  newengland:   ["MA", "RI", "CT", "NH", "VT", "ME"],
  midatlantic:  ["NY", "NJ", "PA", "MD", "DE", "DC", "VA"],
  southeast:    ["FL", "GA", "NC", "SC", "TN", "AL", "MS", "KY", "WV"],
  midwest:      ["OH", "IN", "IL", "MI", "WI", "MN", "IA", "MO", "ND", "SD", "NE", "KS"],
  southwest:    ["TX", "OK", "AR", "LA", "NM", "AZ"],
  west:         ["CA", "NV", "CO", "UT", "WY", "MT", "ID", "OR", "WA", "AK", "HI"],
};

export function getNearbyCities(city: string, stateAbbr: string, limit = 8) {
  const region = Object.values(REGIONAL_GROUPS).find((states) =>
    states.includes(stateAbbr)
  );

  // Same state first, then cross-state in same region
  const sameState = DIRECTORY_CITIES.filter(
    (c) => c.stateAbbr === stateAbbr && c.city !== city
  );
  const crossState = region
    ? DIRECTORY_CITIES.filter(
        (c) => c.stateAbbr !== stateAbbr && region.includes(c.stateAbbr)
      )
    : [];

  return [...sameState, ...crossState].slice(0, limit);
}

export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("window_companies")
    .select(
      "id,slug,business_name,phone,address,city,state,website,rating,review_count,services,is_verified,is_featured,is_claimed,latitude,longitude,short_description,description,logo_url"
    )
    .eq("slug", slug)
    .eq("is_approved", true)
    .single();

  if (error || !data) return null;
  return data as Company;
}

export async function getCompanyNeighbors(city: string, state: string, excludeSlug: string): Promise<Company[]> {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("window_companies")
    .select("id,slug,business_name,phone,address,city,state,rating,review_count,services,is_verified,is_featured,logo_url,short_description,latitude,longitude,website")
    .eq("city", city)
    .eq("state", state)
    .eq("is_approved", true)
    .neq("slug", excludeSlug)
    .order("rating", { ascending: false })
    .limit(4);

  return (data as Company[]) ?? [];
}

export async function getCityCompanyCounts(
  cities: { city: string; stateAbbr: string }[]
): Promise<Record<string, number>> {
  if (cities.length === 0) return {};
  const supabase = createServerClient();
  const counts: Record<string, number> = {};

  await Promise.all(
    cities.map(async ({ city, stateAbbr }) => {
      const { count } = await supabase
        .from("window_companies")
        .select("id", { count: "exact", head: true })
        .eq("city", city)
        .eq("state", stateAbbr)
        .eq("is_approved", true);
      counts[`${city}-${stateAbbr}`] = count ?? 0;
    })
  );

  return counts;
}

export async function getAllCompanySlugs(): Promise<string[]> {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("window_companies")
    .select("slug")
    .eq("is_approved", true)
    .limit(10000);

  return (data ?? []).map((r: { slug: string }) => r.slug).filter(Boolean);
}

export async function getCompaniesByCity(city: string, state: string): Promise<Company[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("window_companies")
    .select(
      "id,slug,business_name,phone,address,city,state,website,rating,review_count,services,is_verified,is_featured,latitude,longitude,short_description,logo_url"
    )
    .eq("city", city)
    .eq("state", state)
    .eq("is_approved", true)
    .order("is_featured", { ascending: false })
    .order("rating", { ascending: false })
    .limit(50);

  if (error) {
    console.error("getCompaniesByCity error:", error);
    return [];
  }
  return (data as Company[]) ?? [];
}
