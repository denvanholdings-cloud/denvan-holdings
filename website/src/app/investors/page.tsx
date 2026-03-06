import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor Information | Denvan Holdings LLC",
  description:
    "Investment and partnership opportunities with Denvan Holdings LLC. Learn about our portfolio, growth strategy, and how to partner with us.",
};

export default function Investors() {
  return (
    <>
      {/* Hero */}
      <section style={styles.hero}>
        <div className="container">
          <p style={styles.breadcrumb}>Home / Investor Information</p>
          <h1 style={styles.heroTitle}>Investor Information</h1>
          <p style={styles.heroText}>
            Denvan Holdings offers a diversified portfolio across high-growth sectors.
            Learn about our strategy, structure, and partnership opportunities.
          </p>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="section">
        <div className="container">
          <div style={styles.twoCol}>
            <div>
              <h2 className="section-title">Investment Thesis</h2>
              <p style={styles.body}>
                Denvan Holdings operates on the principle that diversified, well-managed
                businesses create more stable and sustainable returns than single-industry
                ventures. Our holding company model allows us to:
              </p>
              <ul style={styles.list}>
                <li>Spread risk across multiple industries and revenue streams</li>
                <li>Leverage shared services to reduce overhead for each subsidiary</li>
                <li>Deploy capital strategically across high-potential ventures</li>
                <li>Create synergies between complementary businesses</li>
                <li>Build enterprise value that exceeds the sum of its parts</li>
              </ul>
            </div>
            <div style={styles.highlightCard}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: "#1B2A4A", marginBottom: 24 }}>
                Portfolio at a Glance
              </h3>
              {[
                { label: "Industry Sectors", value: "Multiple" },
                { label: "Business Model", value: "Multi-Industry Holdings" },
                { label: "Revenue Strategy", value: "Diversified Streams" },
                { label: "Growth Approach", value: "Organic + Acquisition" },
                { label: "Management", value: "Centralized Corporate" },
              ].map((item) => (
                <div key={item.label} style={styles.highlightRow}>
                  <span style={{ color: "#64748B", fontSize: 14 }}>{item.label}</span>
                  <span style={{ fontWeight: 600, color: "#1B2A4A", fontSize: 14 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="section section-light">
        <div className="container text-center">
          <h2 className="section-title">Growth Strategy</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
            Our roadmap for building a high-performing, diversified business portfolio.
          </p>
          <div className="grid-3">
            {[
              {
                phase: "Phase 1",
                title: "Foundation",
                period: "Year 1",
                items: [
                  "Establish parent company infrastructure",
                  "Launch initial subsidiaries across key sectors",
                  "Build shared services capabilities",
                  "Develop operational playbooks",
                ],
              },
              {
                phase: "Phase 2",
                title: "Growth",
                period: "Years 2-3",
                items: [
                  "Scale existing subsidiaries",
                  "Launch additional businesses in new sectors",
                  "Explore strategic acquisitions",
                  "Build cross-subsidiary synergies",
                ],
              },
              {
                phase: "Phase 3",
                title: "Scale",
                period: "Years 3-5",
                items: [
                  "Expand into adjacent markets",
                  "Pursue larger acquisitions",
                  "Optimize portfolio performance",
                  "Explore external investment",
                ],
              },
            ].map((phase) => (
              <div key={phase.phase} className="card" style={{ textAlign: "left" }}>
                <div style={{ color: "#C5A55A", fontWeight: 600, fontSize: 13, marginBottom: 4 }}>
                  {phase.phase} -- {phase.period}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: "#1B2A4A", marginBottom: 16 }}>
                  {phase.title}
                </h3>
                <ul style={{ ...styles.list, marginBottom: 0 }}>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 16 }}>
              Why Partner With Denvan Holdings
            </h2>
          </div>
          <div className="grid-2">
            {[
              {
                title: "Diversified Revenue",
                desc: "Multiple business lines across several industries reduce concentration risk and create multiple paths to growth.",
              },
              {
                title: "Professional Management",
                desc: "Enterprise-grade corporate leadership, financial controls, and operational systems -- not a side project.",
              },
              {
                title: "Scalable Model",
                desc: "Our holding company structure is designed to add new businesses efficiently, with shared infrastructure already in place.",
              },
              {
                title: "Clear Governance",
                desc: "Transparent reporting, defined management structures, and professional corporate governance at every level.",
              },
            ].map((item) => (
              <div key={item.title} style={styles.darkCard}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#FFFFFF", marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: 15 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Interested in Learning More?</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 32px" }}>
            We welcome conversations with potential investors, partners, and stakeholders.
            Reach out to schedule a discussion.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">Schedule a Conversation</Link>
            <a href="mailto:investors@denvanholdings.com" className="btn btn-outline">
              Email Investor Relations
            </a>
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
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 400px",
    gap: 48,
    alignItems: "start",
  },
  body: {
    color: "#64748B",
    lineHeight: 1.7,
    marginBottom: 20,
  },
  list: {
    color: "#64748B",
    lineHeight: 1.8,
    paddingLeft: 20,
    listStyle: "disc",
    marginBottom: 24,
  },
  highlightCard: {
    background: "#F1F5F9",
    borderRadius: 16,
    padding: 32,
  },
  highlightRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #E2E8F0",
  },
  darkCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: 28,
  },
};
