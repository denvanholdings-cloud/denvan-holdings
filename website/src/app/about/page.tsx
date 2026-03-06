import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Denvan Holdings LLC",
  description:
    "Learn about Denvan Holdings LLC -- our leadership, mission, and role as a strategic parent company managing businesses across multiple industries.",
};

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section style={styles.hero}>
        <div className="container">
          <p style={styles.breadcrumb}>Home / About Us</p>
          <h1 style={styles.heroTitle}>About Denvan Holdings</h1>
          <p style={styles.heroText}>
            We are a strategic holding company that builds, acquires, and manages
            businesses across professional services, education, technology consulting,
            and personal services.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div style={styles.twoCol}>
            <div>
              <h2 className="section-title">Our Story</h2>
              <p style={styles.bodyText}>
                Denvan Holdings LLC was founded with a clear vision: to create a
                corporate structure that empowers diverse businesses to thrive under
                unified, professional leadership. We recognized that many growing
                businesses struggle not because their ideas lack merit, but because
                they lack the infrastructure, strategy, and shared resources that
                larger organizations take for granted.
              </p>
              <p style={styles.bodyText}>
                By building a holding company model, we provide each subsidiary with
                enterprise-grade management, financial oversight, legal support, and
                operational guidance -- while preserving the entrepreneurial spirit
                that makes each business unique.
              </p>
              <p style={styles.bodyText}>
                Today, Denvan Holdings operates across several industry sectors, with a
                clear roadmap for strategic growth and acquisition. Our goal is to
                build a portfolio of high-performing businesses that create lasting
                value for clients, communities, and stakeholders.
              </p>
            </div>
            <div style={styles.storyCard}>
              <div style={styles.statGrid}>
                {[
                  { number: "Multiple", label: "Industry Sectors" },
                  { number: "1", label: "Parent Company" },
                  { number: "100%", label: "Commitment to Excellence" },
                  { number: "2026", label: "Year Founded" },
                ].map((stat) => (
                  <div key={stat.label} style={styles.stat}>
                    <div style={styles.statNumber}>{stat.number}</div>
                    <div style={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Company Role */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2 className="section-title">What We Do as a Parent Company</h2>
            <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
              Denvan Holdings provides the strategic backbone that allows each subsidiary
              to focus on what it does best -- serving clients and growing revenue.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                title: "Strategic Management",
                desc: "We set the long-term vision, growth strategy, and performance benchmarks for every business in our portfolio. Our leadership team works closely with subsidiary management to align operations with corporate goals.",
              },
              {
                title: "Financial Oversight",
                desc: "Centralized accounting, budgeting, financial reporting, and capital allocation ensure every subsidiary operates with fiscal discipline and transparency. We manage cash flow, taxes, and investment decisions at the corporate level.",
              },
              {
                title: "Administrative Support",
                desc: "Shared services including HR, legal compliance, IT infrastructure, and procurement reduce overhead for subsidiaries and ensure consistent standards across the portfolio.",
              },
              {
                title: "Brand Stewardship",
                desc: "We maintain brand consistency, marketing standards, and reputation management across all Denvan Holdings companies, ensuring each subsidiary benefits from our corporate credibility.",
              },
              {
                title: "Investment & Acquisition",
                desc: "We continuously evaluate new business opportunities -- from launching new ventures to acquiring existing businesses -- that align with our multi-industry growth strategy.",
              },
              {
                title: "Operational Guidance",
                desc: "We provide best practices, standard operating procedures, and operational frameworks that help subsidiary leaders run their businesses more effectively and efficiently.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1B2A4A", marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2 className="section-title">Leadership</h2>
            <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
              Our leadership team brings diverse expertise across business management,
              finance, technology, and operations.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                name: "[Founder Name]",
                role: "Founder & CEO",
                bio: "Visionary leader with experience across multiple industries. Responsible for corporate strategy, subsidiary oversight, and long-term growth planning for Denvan Holdings.",
              },
              {
                name: "[Name]",
                role: "Chief Operations Officer",
                bio: "Oversees day-to-day operations, subsidiary management, and shared services. Ensures operational excellence and consistency across the portfolio.",
              },
              {
                name: "[Name]",
                role: "Chief Financial Officer",
                bio: "Manages financial strategy, accounting, tax planning, and capital allocation. Ensures fiscal responsibility and transparent financial reporting.",
              },
            ].map((person) => (
              <div key={person.role} className="card text-center">
                <div style={styles.avatar}>
                  {person.name.charAt(1)}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>
                  {person.name}
                </h3>
                <p style={{ color: "#C5A55A", fontWeight: 500, fontSize: 14, marginBottom: 12 }}>
                  {person.role}
                </p>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="section section-dark">
        <div className="container">
          <div style={styles.twoCol}>
            <div>
              <h2 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 16 }}>
                Our Vision
              </h2>
              <p className="font-playfair" style={{ fontSize: 22, color: "#C5A55A", lineHeight: 1.5, marginBottom: 24 }}>
                To become a leading multi-industry holding company recognized for
                operational excellence, strategic growth, and the development of
                high-performing subsidiary businesses.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: 1.7 }}>
                We envision a future where Denvan Holdings is synonymous with
                professional management, scalable growth, and meaningful impact
                across every industry we serve.
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 24 }}>
                Our Core Values
              </h2>
              {[
                { name: "Excellence", desc: "We hold ourselves and our subsidiaries to the highest standards of quality and performance." },
                { name: "Integrity", desc: "We conduct business with transparency, honesty, and ethical responsibility." },
                { name: "Innovation", desc: "We embrace new ideas, technologies, and approaches to continuously improve." },
                { name: "Scalability", desc: "We design systems and processes that grow efficiently without sacrificing quality." },
                { name: "Community Impact", desc: "We invest in people and communities, building on meaningful relationships." },
              ].map((value) => (
                <div key={value.name} style={styles.valueRow}>
                  <div style={styles.valueDot} />
                  <div>
                    <h4 style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: 4 }}>{value.name}</h4>
                    <p style={{ color: "#94A3B8", fontSize: 14 }}>{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Interested in Working With Us?</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 32px" }}>
            We&apos;re always looking for talented people, strategic partners, and
            promising business opportunities.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link href="/services" className="btn btn-outline">Our Services</Link>
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
  breadcrumb: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: "2.75rem",
    fontWeight: 700,
    marginBottom: 16,
  },
  heroText: {
    fontSize: 18,
    color: "#94A3B8",
    maxWidth: 640,
    lineHeight: 1.7,
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 64,
    alignItems: "start",
  },
  bodyText: {
    color: "#64748B",
    lineHeight: 1.7,
    marginBottom: 16,
    fontSize: 16,
  },
  storyCard: {
    background: "#F1F5F9",
    borderRadius: 16,
    padding: 40,
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 32,
  },
  stat: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: 36,
    fontWeight: 700,
    color: "#1B2A4A",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: 500,
  },
  avatar: {
    width: 80,
    height: 80,
    background: "linear-gradient(135deg, #1B2A4A, #2A3F6A)",
    color: "#C5A55A",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    fontWeight: 700,
    margin: "0 auto 16px",
    fontFamily: "'Playfair Display', serif",
  },
  valueRow: {
    display: "flex",
    gap: 16,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  valueDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#C5A55A",
    marginTop: 8,
    flexShrink: 0,
  },
};
