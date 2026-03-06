"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroGlow} />
        <div className="container" style={styles.heroInner}>
          <div style={{ animation: "fadeInUp 0.8s ease-out" }}>
            <p style={styles.heroBadge}>Multi-Industry Holding Company</p>
          </div>
          <h1 className="hero-title" style={{ ...styles.heroTitle, animation: "fadeInUp 0.8s ease-out 0.15s both" }}>
            Building Businesses.<br />
            <span className="font-playfair" style={{ color: "#C5A55A" }}>Creating Legacy.</span>
          </h1>
          <p style={{ ...styles.heroText, animation: "fadeInUp 0.8s ease-out 0.3s both" }}>
            Denvan Holdings LLC owns and manages a diversified portfolio of businesses
            across several diverse business sectors. We provide the strategic leadership,
            infrastructure, and resources our subsidiaries need to thrive.
          </p>
          <div style={{ ...styles.heroCTA, animation: "fadeInUp 0.8s ease-out 0.45s both" }}>
            <Link href="/contact" className="btn btn-primary">
              Partner With Us
            </Link>
            <Link href="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div style={styles.heroStats}>
          <div className="container">
            <div className="hero-stats-row">
              {[
                { value: <Counter end={100} suffix="%" />, label: "Commitment to Excellence" },
                { value: "Multiple", label: "Industry Sectors" },
                { value: "Austin, TX", label: "Headquarters" },
                { value: <Counter end={2026} />, label: "Year Founded" },
              ].map((stat) => (
                <div key={stat.label} style={styles.statItem}>
                  <div style={styles.statValue}>{stat.value}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <h2 className="section-title">Why Denvan Holdings</h2>
              <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
                We bring enterprise-grade management and resources to growing businesses
                across multiple industries.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid-3">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                ),
                title: "Strategic Management",
                desc: "We provide C-suite leadership, strategic planning, and performance oversight to every subsidiary in our portfolio.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: "Shared Resources",
                desc: "Subsidiaries benefit from centralized HR, legal, IT, marketing, and financial services -- reducing overhead and accelerating growth.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                title: "Multi-Industry Expertise",
                desc: "Deep knowledge across several industries allows us to spot opportunities others miss and apply proven strategies to new markets.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                ),
                title: "Scalable Infrastructure",
                desc: "Proven frameworks for launching, acquiring, and scaling businesses -- designed to grow with each subsidiary.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                ),
                title: "Diversified Portfolio",
                desc: "Multiple revenue streams across industries create stability, reduce risk, and open doors for cross-subsidiary collaboration.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                  </svg>
                ),
                title: "Entrepreneurial Support",
                desc: "We empower subsidiary leaders with autonomy and corporate backing -- the best of independence with the strength of a parent company.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <div style={styles.cardIcon}>{item.icon}</div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-dark">
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center" style={{ marginBottom: 56 }}>
              <h2 className="section-title">How We Operate</h2>
              <p className="section-subtitle" style={{ margin: "16px auto 0" }}>
                A streamlined approach to building and managing a diversified business portfolio.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid-4">
            {[
              { step: "01", title: "Identify", desc: "We research market opportunities and evaluate potential business ventures across diverse industries." },
              { step: "02", title: "Launch or Acquire", desc: "We establish new DBAs under Denvan Holdings or acquire existing businesses with strong fundamentals." },
              { step: "03", title: "Integrate & Support", desc: "Each subsidiary receives shared services, strategic guidance, and operational infrastructure from day one." },
              { step: "04", title: "Scale & Grow", desc: "With corporate backing and proven systems, each business is positioned for sustainable, long-term growth." },
            ].map((item) => (
              <div key={item.step} style={styles.stepCard}>
                <div style={styles.stepNumber}>{item.step}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1B2A4A", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section section-light">
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <h2 className="section-title">Our Portfolio</h2>
              <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
                Denvan Holdings operates across several different industry sectors.
                Our diversified approach allows us to identify opportunities, manage risk,
                and build lasting businesses wherever we see potential.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid-3">
            {[
              {
                title: "Diverse Industries",
                desc: "We build and manage businesses across a wide range of sectors -- adapting our expertise to each unique market.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                ),
              },
              {
                title: "Growing Portfolio",
                desc: "Our portfolio continues to expand as we launch new subsidiaries and explore strategic acquisitions in emerging sectors.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                  </svg>
                ),
              },
              {
                title: "Strategic Expansion",
                desc: "Every new venture is carefully evaluated for market fit, growth potential, and alignment with our corporate vision.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <div style={{ ...styles.cardIcon, background: "rgba(27, 42, 74, 0.08)" }}>{item.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#1B2A4A" }}>{item.title}</h3>
                <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section">
        <div className="container">
          <div className="mission-grid">
            <AnimateOnScroll animation="fade-left">
              <div>
                <h2 className="section-title">Our Mission</h2>
                <p style={{ fontSize: 18, color: "#64748B", lineHeight: 1.7, marginBottom: 32 }}>
                  To build, acquire, and grow a diversified portfolio of businesses that
                  deliver exceptional value across industries -- empowering entrepreneurs,
                  serving communities, and creating lasting impact.
                </p>
                <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 32 }}>
                  We believe every great business deserves strong corporate backing.
                  Through shared resources, strategic guidance, and operational support,
                  we help ambitious businesses reach their full potential -- while building
                  a legacy that lasts for generations.
                </p>
                <Link href="/about" className="btn btn-outline">
                  About Denvan Holdings
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right" delay={0.2}>
              <div className="values-grid">
                {[
                  { name: "Excellence", desc: "Highest standards in everything we do" },
                  { name: "Integrity", desc: "Transparency and ethical responsibility" },
                  { name: "Innovation", desc: "Embracing new ideas and technologies" },
                  { name: "Scalability", desc: "Designed to grow efficiently" },
                  { name: "Community", desc: "Creating impact in the markets we serve" },
                  { name: "Resilience", desc: "Diversified strength through any market" },
                ].map((value) => (
                  <div key={value.name} style={styles.valueItem}>
                    <h4 style={{ fontWeight: 600, color: "#1B2A4A", marginBottom: 4 }}>{value.name}</h4>
                    <p style={{ fontSize: 14, color: "#64748B" }}>{value.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="section section-light">
        <div className="container text-center">
          <AnimateOnScroll animation="fade-up">
            <div style={{ maxWidth: 700, margin: "0 auto" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="1.5" style={{ marginBottom: 24, opacity: 0.6 }}>
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
              </svg>
              <p className="font-playfair" style={{ fontSize: 24, color: "#1B2A4A", lineHeight: 1.5, marginBottom: 24 }}>
                We don&apos;t just manage businesses -- we build ecosystems where
                entrepreneurship thrives, innovation accelerates, and lasting value is
                created for every stakeholder.
              </p>
              <p style={{ color: "#C5A55A", fontWeight: 600, fontSize: 16 }}>Denvan Holdings Leadership</p>
              <p style={{ color: "#94A3B8", fontSize: 14 }}>Austin, Texas</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaGlow} />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <AnimateOnScroll animation="fade-up">
            <h2 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#1B2A4A", marginBottom: 16 }}>
              Ready to Build Something Together?
            </h2>
            <p style={{ fontSize: 18, color: "#64748B", marginBottom: 32, maxWidth: 600, margin: "0 auto 32px" }}>
              Whether you&apos;re a potential partner, investor, or entrepreneur looking for
              corporate support -- we&apos;d love to hear from you.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">Contact Us</Link>
              <Link href="/investors" className="btn btn-secondary">Investor Information</Link>
              <Link href="/contact" className="btn btn-secondary">Partnership Inquiry</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(135deg, #1B2A4A 0%, #2A3F6A 50%, #3B5998 100%)",
    color: "#FFFFFF",
    padding: "140px 0 0",
    position: "relative",
    overflow: "hidden",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 30% 50%, rgba(197, 165, 90, 0.08) 0%, transparent 60%)",
    pointerEvents: "none",
  },
  heroGlow: {
    position: "absolute",
    top: "-30%",
    right: "-10%",
    width: 600,
    height: 600,
    background: "radial-gradient(circle, rgba(42, 63, 106, 0.3) 0%, transparent 70%)",
    pointerEvents: "none",
    animation: "pulse 4s ease-in-out infinite",
  },
  heroInner: {
    maxWidth: 800,
    position: "relative",
    zIndex: 1,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heroBadge: {
    display: "inline-block",
    padding: "8px 20px",
    background: "rgba(197, 165, 90, 0.15)",
    color: "#C5A55A",
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 24,
    border: "1px solid rgba(197, 165, 90, 0.3)",
    backdropFilter: "blur(8px)",
  },
  heroTitle: {
    fontSize: "3.5rem",
    fontWeight: 700,
    lineHeight: 1.15,
    marginBottom: 24,
  },
  heroText: {
    fontSize: 18,
    lineHeight: 1.7,
    color: "#94A3B8",
    maxWidth: 640,
    marginBottom: 40,
  },
  heroCTA: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 80,
  },
  heroStats: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(0,0,0,0.1)",
    backdropFilter: "blur(12px)",
    position: "relative",
    zIndex: 1,
  },
  statItem: {
    textAlign: "center",
  },
  statValue: {
    fontSize: 28,
    fontWeight: 700,
    color: "#C5A55A",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: "rgba(255,255,255,0.6)",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  cardIcon: {
    width: 52,
    height: 52,
    background: "rgba(197, 165, 90, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
    color: "#1B2A4A",
  },
  cardDesc: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 1.6,
  },
  stepCard: {
    padding: 28,
    borderRadius: 12,
    background: "#FFFFFF",
    border: "1px solid #E2E8F0",
    transition: "all 0.3s ease",
  },
  stepNumber: {
    fontSize: 36,
    fontWeight: 700,
    color: "#C5A55A",
    marginBottom: 12,
    fontFamily: "'Playfair Display', serif",
  },
  valueItem: {
    padding: 24,
    background: "#F1F5F9",
    borderRadius: 12,
    transition: "all 0.3s ease",
  },
  cta: {
    background: "#F8FAFC",
    padding: "96px 0",
    position: "relative",
    overflow: "hidden",
    borderTop: "1px solid #E2E8F0",
  },
  ctaGlow: {
    position: "absolute",
    bottom: "-30%",
    left: "30%",
    width: 500,
    height: 500,
    background: "radial-gradient(circle, rgba(197, 165, 90, 0.1) 0%, transparent 70%)",
    pointerEvents: "none",
  },
};
