import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Portfolio | Denvan Holdings LLC",
  description:
    "Discover how Denvan Holdings manages and supports subsidiaries across several diverse business sectors.",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section style={styles.hero}>
        <div className="container">
          <p style={styles.breadcrumb}>Home / Services & Portfolio</p>
          <h1 className="page-hero-title">Services & Portfolio</h1>
          <p style={styles.heroText}>
            As a holding company, Denvan Holdings provides strategic management, shared
            services, and operational support to a diversified portfolio of subsidiary
            businesses.
          </p>
        </div>
      </section>

      {/* How We Support */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2 className="section-title">How We Support Our Subsidiaries</h2>
            <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
              Every business in the Denvan Holdings portfolio benefits from corporate-level
              resources and management expertise.
            </p>
          </div>

          <div className="service-grid">
            {[
              {
                title: "Corporate Strategy",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
                items: [
                  "Long-term strategic planning and vision setting",
                  "Market research and competitive analysis",
                  "Growth roadmap development",
                  "Performance benchmarking and KPI tracking",
                ],
              },
              {
                title: "Financial Management",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
                items: [
                  "Centralized bookkeeping and accounting",
                  "Tax planning and preparation",
                  "Cash flow management and forecasting",
                  "Capital allocation and investment decisions",
                ],
              },
              {
                title: "Legal & Compliance",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                items: [
                  "Business entity formation and maintenance",
                  "Contract review and management",
                  "Regulatory compliance oversight",
                  "Intellectual property protection",
                ],
              },
              {
                title: "Technology & IT",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
                items: [
                  "IT infrastructure setup and management",
                  "Software and tool procurement",
                  "Cybersecurity and data protection",
                  "Digital transformation consulting",
                ],
              },
              {
                title: "Marketing & Branding",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
                items: [
                  "Brand strategy and identity development",
                  "Website design and management",
                  "Social media strategy and content",
                  "SEO and digital marketing support",
                ],
              },
              {
                title: "Human Resources",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                items: [
                  "Recruitment and talent acquisition",
                  "Employee onboarding and training",
                  "Payroll and benefits administration",
                  "Performance management frameworks",
                ],
              },
            ].map((service) => (
              <div key={service.title} className="card">
                <div style={{ width: 44, height: 44, background: "rgba(197, 165, 90, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, marginBottom: 16 }}>{service.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "#1B2A4A", marginBottom: 16 }}>
                  {service.title}
                </h3>
                <ul style={styles.serviceList}>
                  {service.items.map((item) => (
                    <li key={item} style={styles.serviceItem}>
                      <span style={styles.checkmark}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Approach */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2 className="section-title">Our Portfolio Approach</h2>
            <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
              Denvan Holdings operates across several different industry sectors. We
              strategically build and manage businesses wherever we see opportunity,
              growth potential, and alignment with our expertise.
            </p>
          </div>
          <div className="grid-2">
            {[
              {
                title: "Multi-Industry Reach",
                desc: "We don't limit ourselves to a single market. Our subsidiaries span diverse sectors, allowing us to leverage cross-industry insights and build a resilient, diversified portfolio.",
              },
              {
                title: "DBA-Based Flexibility",
                desc: "Each subsidiary operates as a DBA under Denvan Holdings, giving us the agility to launch new ventures quickly and pivot into emerging markets as opportunities arise.",
              },
              {
                title: "Strategic Selection",
                desc: "Every new business is carefully evaluated for market demand, revenue potential, and strategic fit before joining our portfolio. We grow with intention, not impulse.",
              },
              {
                title: "Continuous Expansion",
                desc: "Our portfolio is always evolving. As we identify new sectors and opportunities, we build subsidiary businesses backed by the full resources of Denvan Holdings.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "#1B2A4A", marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p style={{ color: "#64748B", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">How We Grow Our Portfolio</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
            A systematic approach to identifying, launching, and scaling businesses.
          </p>
          <div className="grid-4">
            {[
              { step: "01", title: "Identify", desc: "Research opportunities and validate market demand" },
              { step: "02", title: "Launch", desc: "Set up legal, financial, and operational infrastructure" },
              { step: "03", title: "Grow", desc: "Execute strategy with corporate resources and support" },
              { step: "04", title: "Scale", desc: "Expand operations and maximize subsidiary potential" },
            ].map((item) => (
              <div key={item.step} style={styles.stepCard}>
                <div style={styles.stepNumber}>{item.step}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1B2A4A", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#64748B" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div className="container text-center">
          <h2 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#1B2A4A", marginBottom: 16 }}>
            Interested in Joining Our Portfolio?
          </h2>
          <p style={{ color: "#64748B", fontSize: 18, maxWidth: 560, margin: "0 auto 32px" }}>
            We&apos;re always evaluating new business opportunities and partnerships.
            Let&apos;s discuss how Denvan Holdings can support your venture.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">Discuss a Partnership</Link>
            <Link href="/investors" className="btn btn-outline">Investor Information</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(135deg, #1B2A4A 0%, #2A3F6A 100%)",
    padding: "80px 0",
    color: "#FFFFFF",
  },
  breadcrumb: { fontSize: 14, color: "#64748B", marginBottom: 16 },
  heroTitle: { fontSize: "2.75rem", fontWeight: 700, marginBottom: 16 },
  heroText: { fontSize: 18, color: "#94A3B8", maxWidth: 640, lineHeight: 1.7 },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
  },
  serviceList: { listStyle: "none", display: "flex", flexDirection: "column", gap: 12 },
  serviceItem: { display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#64748B", lineHeight: 1.5 },
  checkmark: { color: "#16A34A", fontWeight: 700, fontSize: 14, flexShrink: 0, marginTop: 2 },
  sectorRow: {
    display: "flex",
    gap: 48,
    alignItems: "center",
    marginBottom: 48,
    padding: 32,
    background: "#FFFFFF",
    borderRadius: 16,
  },
  tag: {
    padding: "4px 12px",
    borderRadius: 100,
    fontSize: 13,
    fontWeight: 500,
    border: "1px solid",
  },
  stepCard: { padding: 32 },
  stepNumber: {
    fontSize: 36,
    fontWeight: 700,
    color: "#C5A55A",
    marginBottom: 12,
  },
  cta: {
    background: "#F8FAFC",
    padding: "96px 0",
    borderTop: "1px solid #E2E8F0",
  },
};
