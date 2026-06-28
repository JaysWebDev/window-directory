import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, DollarSign, Clock, RefreshCw, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { servicesContent } from "@/config/services-content";
import { guidesContent } from "@/config/guides-content";
import { DIRECTORY_CITIES, cityToSlug } from "@/lib/directory";

const Icon = siteConfig.icon;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return servicesContent.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesContent.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: service.headline,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesContent.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedGuideItems = service.relatedGuides
    .map((g) => guidesContent.find((gd) => gd.slug === g))
    .filter(Boolean);

  const relatedServiceItems = service.relatedServices
    .map((s) => servicesContent.find((sv) => sv.slug === s))
    .filter(Boolean);

  // Pick 4 example cities with Northeast bias (high window cleaning search volume)
  const exampleCities = DIRECTORY_CITIES.filter((c) =>
    ["MA", "RI", "CT", "NH", "ME", "NY", "PA", "MD"].includes(c.stateAbbr)
  ).slice(0, 4);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: `${siteConfig.brand} ${siteConfig.brandSuffix}`,
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: service.name,
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.quickStats.costRange,
        priceCurrency: "USD",
      },
    },
  };

  const faqSchema = service.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}/services/${slug}` },
    ],
  };

  return (
    <main className="flex flex-col flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
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

      {/* ── HEADER ──────────────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1.5 text-xs text-[#94a3b8] mb-5">
            <Link href="/" className="hover:text-[var(--cp)] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[var(--cp)] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#475569]">{service.name}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight leading-tight" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
            {service.headline}
          </h1>
          <p className="text-[#64748b] text-lg mb-8">{service.subheadline}</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: DollarSign, label: "Typical Cost", value: service.quickStats.costRange },
              { icon: Clock, label: "Duration", value: service.quickStats.duration },
              { icon: RefreshCw, label: "Frequency", value: service.quickStats.frequency },
            ].map(({ icon: StatIcon, label, value }) => (
              <div key={label} className="flex items-start gap-3 p-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
                <StatIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--cp)" }} />
                <div>
                  <div className="text-xs text-[#94a3b8] mb-0.5">{label}</div>
                  <div className="font-semibold text-sm" style={{ color: "var(--cd)" }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/#quote-form"
            className="inline-flex items-center gap-2 text-white font-bold px-6 py-3.5 rounded-xl shadow-md nav-cta-btn transition-colors"
          >
            Get Free Quotes <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── INTRO + SECTIONS ────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#475569] text-lg leading-relaxed mb-10">{service.intro}</p>

          <div className="space-y-10">
            {service.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold mb-4 leading-snug" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
                  {section.heading}
                </h2>
                {section.content.map((para, j) => (
                  <p key={j} className="text-[#475569] leading-relaxed mb-3">{para}</p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet, k) => (
                      <li key={k} className="flex gap-3 text-sm text-[#475569] leading-relaxed">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--cp)" }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      {service.faqs.length > 0 && (
        <section className="py-12 border-t border-[#e2e8f0]" style={{ background: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#e2e8f0] p-5">
                  <h3 className="font-semibold mb-2 text-sm" style={{ color: "var(--cd)" }}>{faq.q}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(160deg, var(--cl) 0%, #e0f2fe 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <Icon className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--cp)" }} />
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
            Ready to Get {service.name}?
          </h2>
          <p className="text-[#64748b] mb-6">
            Get free, no-obligation quotes from licensed, insured {siteConfig.verticalProNoun} near you.
          </p>
          <a
            href="/#quote-form"
            className="inline-block text-white font-bold px-8 py-4 rounded-xl shadow-md nav-cta-btn transition-colors"
          >
            {siteConfig.cta.text}
          </a>
        </div>
      </section>

      {/* ── LOCAL CITIES ────────────────────────────────────── */}
      <section className="py-14 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-5">
            <MapPin className="w-5 h-5" style={{ color: "var(--cp)" }} />
            <h2 className="text-lg font-bold" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>
              Find {service.name} Near You
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {exampleCities.map((city) => (
              <Link
                key={`${city.city}-${city.stateAbbr}`}
                href={`/${cityToSlug(city.city, city.stateAbbr)}`}
                className="group flex items-center justify-between bg-[#f8fafc] rounded-xl border border-[#e2e8f0] px-4 py-3 hover:shadow-sm hover:border-[#bae6fd] transition-all"
              >
                <div>
                  <div className="font-semibold text-sm group-hover:underline" style={{ color: "var(--cd)" }}>{city.city}</div>
                  <div className="text-xs text-[#94a3b8]">{city.stateAbbr}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[var(--cp)] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED CONTENT ─────────────────────────────────── */}
      {(relatedGuideItems.length > 0 || relatedServiceItems.length > 0) && (
        <section className="py-14 border-t border-[#e2e8f0]" style={{ background: "#f8fafc" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {relatedGuideItems.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-4" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>Related Guides</h3>
                  <div className="space-y-3">
                    {relatedGuideItems.map((g) => g && (
                      <Link
                        key={g.slug}
                        href={`/guides/${g.slug}`}
                        className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#bae6fd] hover:shadow-sm transition-all group"
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
              {relatedServiceItems.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-4" style={{ color: "var(--cd)", fontFamily: "var(--font-display)" }}>Related Services</h3>
                  <div className="space-y-3">
                    {relatedServiceItems.map((svc) => svc && (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#bae6fd] hover:shadow-sm transition-all group"
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
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
