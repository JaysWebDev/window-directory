import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ChevronRight, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { guidesContent } from "@/config/guides-content";

const Icon = siteConfig.icon;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  title: `Window Cleaning Guides & Resources | ${siteConfig.brand} ${siteConfig.brandSuffix}`,
  description:
    "Expert guides on window cleaning costs, frequency, DIY vs professional, hard water stain removal, and more. Everything you need for crystal-clear windows.",
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: `Window Cleaning Guides | ${siteConfig.brand} ${siteConfig.brandSuffix}`,
    description: "Expert guides on window cleaning costs, maintenance schedules, and getting streak-free results.",
    url: `${SITE_URL}/guides`,
  },
};

export default function GuidesPage() {
  return (
    <main className="flex flex-col flex-1">
      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Icon className="w-7 h-7" style={{ color: "var(--cp)" }} />
            <span className="font-bold text-xl tracking-tight" style={{ color: "var(--cd)" }}>
              {siteConfig.brand}{" "}
              <span style={{ color: "var(--cp)" }}>{siteConfig.brandSuffix}</span>
            </span>
          </Link>
          <a
            href="/#quote-form"
            className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm nav-cta-btn"
          >
            {siteConfig.cta.text}
          </a>
        </div>
      </nav>

      {/* ── HEADER ──────────────────────────────────────────── */}
      <section className="py-16" style={{ background: `linear-gradient(135deg, var(--cd) 0%, color-mix(in srgb, var(--cd) 80%, var(--cp)) 100%)` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1.5 text-white/50 text-xs mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">Guides</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8" style={{ color: "var(--cp-l)" }} />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Window Cleaning Guides
            </h1>
          </div>
          <p className="text-white/75 text-lg max-w-2xl">
            Everything you need to know about keeping your windows spotless, removing hard water stains, and hiring the right pros.
          </p>
        </div>
      </section>

      {/* ── GUIDES GRID ─────────────────────────────────────── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidesContent.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-[#e2e8f0] p-6 hover:shadow-md hover:border-[#bae6fd] transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#94a3b8]" />
                  <span className="text-xs text-[#94a3b8]">{guide.readTime}</span>
                </div>
                <h2 className="font-bold text-lg mb-3 group-hover:underline leading-snug" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
                  {guide.headline}
                </h2>
                <p className="text-sm text-[#64748b] leading-relaxed flex-1 mb-4 line-clamp-3">
                  {guide.intro}
                </p>
                <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--cp)" }}>
                  Read guide <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <Icon className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--cp)" }} />
          <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
            Ready to Get It Done?
          </h2>
          <p className="text-[#64748b] mb-6">
            Connect with top-rated local {siteConfig.verticalProNoun} and get free quotes today.
          </p>
          <a
            href="/#quote-form"
            className="inline-block text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-md nav-cta-btn"
          >
            {siteConfig.cta.text}
          </a>
        </div>
      </section>
    </main>
  );
}
