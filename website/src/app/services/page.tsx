import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Portfolio | Denvan Holdings LLC",
  description:
    "Discover how Denvan Holdings manages and supports subsidiaries across professional services, education, technology consulting, and personal services.",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section style={styles.hero}>
        <div className="container">
          <p style={styles.breadcrumb}>Home / Services & Portfolio</p>
          <h1 style={styles.heroTitle}>Services & Portfolio</h1>
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

          <div style={styles.serviceGrid}>
            {[
              {
                title: "Corporate Strategy",
                items: [
                  "Long-term strategic planning and vision setting",
                  "Market research and competitive analysis",
                  "Growth roadmap development",
                  "Performance benchmarking and KPI tracking",
                ],
              },
              {
                title: "Financial Management",
                items: [
                  "Centralized bookkeeping and accounting",
                  "Tax planning and preparation",
                  "Cash flow management and forecasting",
                  "Capital allocation and investment decisions",
                ],
              },
              {
                title: "Legal & Compliance",
                items: [
                  "Business entity formation and maintenance",
                  "Contract review and management",
                  "Regulatory compliance oversight",
                  "Intellectual property protection",
                ],
              },
              {
                title: "Technology & IT",
                items: [
                  "IT infrastructure setup and management",
                  "Software and tool procurement",
                  "Cybersecurity and data protection",
                  "Digital transformation consulting",
                ],
              },
              {
                title: "Marketing & Branding",
                items: [
                  "Brand strategy and identity development",
                  "Website design and management",
                  "Social media strategy and content",
                  "SEO and digital marketing support",
                ],
              },
              {
                title: "Human Resources",
                items: [
                  "Recruitment and talent acquisition",
                  "Employee onboarding and training",
                  "Payroll and benefits administration",
                  "Performance management frameworks",
                ],
              },
            ].map((service) => (
              <div key={service.title} className="card">
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

      {/* Portfolio Sectors */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2 className="section-title">Portfolio Sectors</h2>
            <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
              Denvan Holdings operates across several strategic industry sectors, each
              chosen for its growth potential and alignment with our expertise.
            </p>
          </div>

          {[
            {
              name: "Professional Services",
              color: "#0D9488",
              desc: "Our professional services subsidiaries deliver consulting, staffing, and specialized business support to organizations of all sizes. From strategic advisory to operational support, we help businesses perform at their best.",
              offerings: ["Business Consulting", "Staffing & Recruitment", "Project Management", "Administrative Support"],
            },
            {
              name: "Education & Training",
              color: "#7C3AED",
              desc: "Our education subsidiaries develop and deliver learning programs that help individuals and organizations grow. From tutoring services to professional development, we invest in human potential.",
              offerings: ["Tutoring & Academic Support", "Professional Development", "Workforce Training", "Online Learning Programs"],
            },
            {
              name: "Technology Consulting",
              color: "#2563EB",
              desc: "Our technology consulting subsidiaries help businesses harness the power of technology. From IT strategy to digital transformation, we bridge the gap between business goals and technical solutions.",
              offerings: ["IT Strategy & Advisory", "Digital Transformation", "Software Selection & Implementation", "Cybersecurity Consulting"],
            },
            {
              name: "Personal Services",
              color: "#F97316",
              desc: "Our personal services subsidiaries deliver consumer-focused services that improve quality of life. From wellness to lifestyle services, we build businesses that serve individuals and families.",
              offerings: ["Wellness & Health Services", "Lifestyle & Concierge", "Personal Development", "Community Services"],
            },
          ].map((sector, i) => (
            <div key={sector.name} style={{
              ...styles.sectorRow,
              flexDirection: i % 2 === 0 ? "row" : "row-reverse",
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: sector.color }} />
                  <h3 style={{ fontSize: 24, fontWeight: 600, color: "#1B2A4A" }}>{sector.name}</h3>
                </div>
                <p style={{ color: "#64748B", lineHeight: 1.7, marginBottom: 20 }}>{sector.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {sector.offerings.map((o) => (
                    <span key={o} style={{ ...styles.tag, borderColor: sector.color, color: sector.color }}>
                      {o}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{
                flex: "0 0 280px",
                height: 200,
                background: `linear-gradient(135deg, ${sector.color}22, ${sector.color}44)`,
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `2px solid ${sector.color}33`,
              }}>
                <span style={{ fontSize: 48, fontWeight: 700, color: sector.color, opacity: 0.5 }}>
                  {sector.name.charAt(0)}
                </span>
              </div>
            </div>
          ))}
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
          <h2 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 16 }}>
            Interested in Joining Our Portfolio?
          </h2>
          <p style={{ color: "#94A3B8", fontSize: 18, maxWidth: 560, margin: "0 auto 32px" }}>
            We&apos;re always evaluating new business opportunities and partnerships.
            Let&apos;s discuss how Denvan Holdings can support your venture.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">Discuss a Partnership</Link>
            <Link href="/investors" className="btn btn-secondary">Investor Information</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(135deg, #0F172A 0%, #1B2A4A 100%)",
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
    background: "linear-gradient(135deg, #0F172A 0%, #1B2A4A 100%)",
    padding: "96px 0",
  },
};
