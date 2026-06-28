import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

const brand = `${siteConfig.brand} ${siteConfig.brandSuffix}`;

export const metadata: Metadata = {
  title: `Contact Us | ${brand}`,
  description: `Get in touch with ${brand}. Questions about listings, claiming your business, or getting a free window cleaning quote? We're here to help.`,
  alternates: { canonical: `https://${siteConfig.domain}/contact` },
};

export default function ContactPage() {
  const { colors: c } = siteConfig;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "var(--cp)" }}>
        ← Back to home
      </Link>

      <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--cd)" }}>
        Contact {brand}
      </h1>
      <p className="text-[#64748b] text-lg mb-12">
        Have a question about a listing, want to claim your business, or need help finding a local pro? Reach out — we typically respond within one business day.
      </p>

      <div className="grid gap-6 sm:grid-cols-3 mb-14">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 text-center">
          <Mail className="w-8 h-8 mx-auto mb-3" style={{ color: "var(--cp)" }} />
          <h2 className="font-bold mb-1" style={{ color: "var(--cd)" }}>Email</h2>
          <p className="text-sm text-[#64748b]">
            <a href={`mailto:hello@${siteConfig.domain}`} className="hover:underline" style={{ color: "var(--cp)" }}>
              hello@{siteConfig.domain}
            </a>
          </p>
        </div>
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 text-center">
          <MessageSquare className="w-8 h-8 mx-auto mb-3" style={{ color: "var(--cp)" }} />
          <h2 className="font-bold mb-1" style={{ color: "var(--cd)" }}>Business Inquiries</h2>
          <p className="text-sm text-[#64748b]">Claim a listing, report incorrect info, or add your company</p>
        </div>
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 text-center">
          <Clock className="w-8 h-8 mx-auto mb-3" style={{ color: "var(--cp)" }} />
          <h2 className="font-bold mb-1" style={{ color: "var(--cd)" }}>Response Time</h2>
          <p className="text-sm text-[#64748b]">Mon–Fri, usually within 1 business day</p>
        </div>
      </div>

      <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--cd)" }}>Send a Message</h2>
        <form
          action={`https://formsubmit.co/hello@${siteConfig.domain}`}
          method="POST"
          className="space-y-5"
        >
          <input type="hidden" name="_subject" value={`${brand} Contact Form`} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={`https://${siteConfig.domain}/contact?sent=1`} />

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--cd)" }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-[#e2e8f0] px-4 py-3 text-sm focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": c.primary } as React.CSSProperties}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--cd)" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[#e2e8f0] px-4 py-3 text-sm focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": c.primary } as React.CSSProperties}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--cd)" }}>
              What can we help with?
            </label>
            <select
              name="topic"
              className="w-full rounded-xl border border-[#e2e8f0] px-4 py-3 text-sm focus:outline-none focus:ring-2 bg-white"
            >
              <option value="quote">I need a window cleaning quote</option>
              <option value="claim">I want to claim my business listing</option>
              <option value="incorrect">Report incorrect listing info</option>
              <option value="add">Add my company to the directory</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--cd)" }}>
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us more..."
              className="w-full rounded-xl border border-[#e2e8f0] px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none"
              style={{ "--tw-ring-color": c.primary } as React.CSSProperties}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white font-semibold py-3 rounded-xl transition-colors"
            style={{ background: c.primary }}
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-10 rounded-2xl p-6" style={{ background: "var(--cl)" }}>
        <h3 className="font-bold mb-2" style={{ color: "var(--cd)" }}>Looking for a window cleaning quote?</h3>
        <p className="text-sm text-[#64748b] mb-4">
          The fastest way to get quotes is through our directory — search your city, browse local pros, and submit a quote request directly.
        </p>
        <Link
          href="/"
          className="inline-block text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
          style={{ background: c.primary }}
        >
          Find local pros →
        </Link>
      </div>
    </main>
  );
}
