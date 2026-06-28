import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Clock, DollarSign, RefreshCw } from "lucide-react";
import { siteConfig } from "@/config/site";
import { servicesContent } from "@/config/services-content";

const Icon = siteConfig.icon;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  title: `Window Cleaning Services | ${siteConfig.brand} ${siteConfig.brandSuffix}`,
  description:
    "Find local pros for exterior and interior window cleaning, screen cleaning, skylight washing, and more. Free quotes from licensed, insured contractors.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: `Window Cleaning Services | ${siteConfig.brand} ${siteConfig.brandSuffix}`,
    description: "Exterior, interior, screens, skylights, and commercial — find local window cleaning pros and get free quotes.",
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
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
            <span className="text-white/80">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {siteConfig.verticalName} Services
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            From basic exterior cleaning to skylights, screens, and high-rise — find local pros for every window cleaning service your property needs.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ───────────────────────────────────── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesContent.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-[#e2e8f0] p-6 hover:shadow-md hover:border-[#bae6fd] transition-all"
              >
                <h2
                  className="font-bold text-xl mb-2 group-hover:underline"
                  style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}
                >
                  {service.name}
                </h2>
                <p className="text-sm text-[#64748b] leading-relaxed mb-5 flex-1">
                  {service.subheadline}
                </p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-[#94a3b8]">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span className="text-xs">Cost</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "var(--cd)" }}>{service.quickStats.costRange}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-[#94a3b8]">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs">Time</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "var(--cd)" }}>{service.quickStats.duration}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-[#94a3b8]">
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span className="text-xs">How often</span>
                    </div>
                    <span className="text-xs font-semibold leading-tight" style={{ color: "var(--cd)" }}>{service.quickStats.frequency}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--cp)" }}>
                  Learn more <ArrowRight className="w-4 h-4" />
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
            Get Free Quotes Today
          </h2>
          <p className="text-[#64748b] mb-6">
            Match with top-rated {siteConfig.verticalProNoun} in your area. Licensed, insured, and vetted.
          </p>
          <a
            href="/#quote-form"
            className="inline-block text-white font-bold px-8 py-4 rounded-xl shadow-md nav-cta-btn transition-colors"
          >
            {siteConfig.cta.text}
          </a>
        </div>
      </section>
    </main>
  );
}
