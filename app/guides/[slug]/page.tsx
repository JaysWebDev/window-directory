import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ChevronRight, BookOpen, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { guidesContent } from "@/config/guides-content";
import { servicesContent } from "@/config/services-content";

const Icon = siteConfig.icon;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return guidesContent.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidesContent.find((g) => g.slug === slug);
  if (!guide) return { title: "Not Found" };
  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: `${SITE_URL}/guides/${slug}` },
    openGraph: {
      title: guide.headline,
      description: guide.metaDescription,
      url: `${SITE_URL}/guides/${slug}`,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guidesContent.find((g) => g.slug === slug);
  if (!guide) notFound();

  const relatedGuideItems = guide.relatedGuides
    .map((s) => guidesContent.find((g) => g.slug === s))
    .filter(Boolean);

  const relatedServiceItems = guide.relatedServices
    .map((s) => servicesContent.find((sv) => sv.slug === s))
    .filter(Boolean);

  const faqItems = guide.sections.flatMap((s) =>
    (s.bullets ?? []).length === 0 && s.content.length > 0 ? [] : []
  );

  // Collect all FAQ-like data from a dedicated section if present
  // Build FAQ schema from sections named with ? pattern
  const faqSections = guide.sections.filter((s) => s.heading.includes("?") || s.heading.toLowerCase().includes("faq"));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.headline,
    description: guide.metaDescription,
    datePublished: guide.publishDate,
    dateModified: guide.updatedDate,
    author: { "@type": "Organization", name: `${siteConfig.brand} ${siteConfig.brandSuffix}` },
    publisher: { "@type": "Organization", name: `${siteConfig.brand} ${siteConfig.brandSuffix}`, url: SITE_URL },
    url: `${SITE_URL}/guides/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: guide.headline, item: `${SITE_URL}/guides/${slug}` },
    ],
  };

  return (
    <main className="flex flex-col flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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

      {/* ── BREADCRUMB + HEADER ─────────────────────────────── */}
      <section className="py-12 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1.5 text-xs text-[#94a3b8] mb-5">
            <Link href="/" className="hover:text-[var(--cp)] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/guides" className="hover:text-[var(--cp)] transition-colors">Guides</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#475569]">{guide.headline}</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 flex-shrink-0" style={{ color: "var(--cp)" }} />
            <span className="text-sm font-medium" style={{ color: "var(--cp)" }}>Guide</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
            {guide.headline}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{guide.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>Updated {new Date(guide.updatedDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ─────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Intro */}
          <p className="text-[#475569] text-lg leading-relaxed mb-10">
            {guide.intro}
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {guide.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold mb-4 leading-snug" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
                  {section.heading}
                </h2>
                {section.content.map((para, j) => (
                  <p key={j} className="text-[#475569] leading-relaxed mb-3">
                    {para}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet, k) => (
                      <li key={k} className="flex gap-3 text-sm text-[#475569] leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--cp)" }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.numbered && section.numbered.length > 0 && (
                  <ol className="mt-4 space-y-3">
                    {section.numbered.map((item, k) => (
                      <li key={k} className="flex gap-3 text-sm text-[#475569] leading-relaxed">
                        <span
                          className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ background: "var(--cp)" }}
                        >
                          {k + 1}
                        </span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(160deg, var(--cl) 0%, #e0f2fe 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <Icon className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--cp)" }} />
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
            Get Free Quotes from Local Pros
          </h2>
          <p className="text-[#64748b] mb-6">
            Connect with licensed, insured {siteConfig.verticalProNoun} in your area. No obligation.
          </p>
          <a
            href="/#quote-form"
            className="inline-block text-white font-bold px-8 py-4 rounded-xl shadow-md nav-cta-btn transition-colors"
          >
            {siteConfig.cta.text}
          </a>
        </div>
      </section>

      {/* ── RELATED CONTENT ─────────────────────────────────── */}
      {(relatedServiceItems.length > 0 || relatedGuideItems.length > 0) && (
        <section className="py-14 bg-white border-t border-[#e2e8f0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {relatedServiceItems.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-4" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
                    Related Services
                  </h3>
                  <div className="space-y-3">
                    {relatedServiceItems.map((svc) => svc && (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="flex items-center justify-between p-4 rounded-xl border border-[#e2e8f0] hover:border-[#bae6fd] hover:shadow-sm transition-all group"
                      >
                        <div>
                          <div className="font-semibold text-sm group-hover:underline" style={{ color: "var(--cd)" }}>{svc.name}</div>
                          <div className="text-xs text-[#94a3b8] mt-0.5">{svc.quickStats.costRange}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[var(--cp)] transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {relatedGuideItems.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-4" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
                    Related Guides
                  </h3>
                  <div className="space-y-3">
                    {relatedGuideItems.map((g) => g && (
                      <Link
                        key={g.slug}
                        href={`/guides/${g.slug}`}
                        className="flex items-center justify-between p-4 rounded-xl border border-[#e2e8f0] hover:border-[#bae6fd] hover:shadow-sm transition-all group"
                      >
                        <div>
                          <div className="font-semibold text-sm group-hover:underline" style={{ color: "var(--cd)" }}>{g.headline}</div>
                          <div className="text-xs text-[#94a3b8] mt-0.5">{g.readTime}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[var(--cp)] transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
