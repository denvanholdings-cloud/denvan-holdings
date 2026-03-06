import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroInner}>
          <p style={styles.heroBadge}>Multi-Industry Holding Company</p>
          <h1 style={styles.heroTitle}>
            Building Businesses.<br />
            <span className="font-playfair" style={{ color: "#B8942A" }}>Creating Legacy.</span>
          </h1>
          <p style={styles.heroText}>
            Denvan Holdings LLC owns and manages a diversified portfolio of businesses
            across several diverse business sectors. We provide the strategic leadership,
            infrastructure, and resources our subsidiaries need to thrive.
          </p>
          <div style={styles.heroCTA}>
            <Link href="/contact" className="btn btn-primary">
              Partner With Us
            </Link>
            <Link href="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2 className="section-title">Why Denvan Holdings</h2>
            <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
              We bring enterprise-grade management and resources to growing businesses
              across multiple industries.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: "01",
                title: "Strategic Management",
                desc: "We provide C-suite leadership, strategic planning, and performance oversight to every subsidiary in our portfolio.",
              },
              {
                icon: "02",
                title: "Shared Resources",
                desc: "Subsidiaries benefit from centralized HR, legal, IT, marketing, and financial services -- reducing overhead and accelerating growth.",
              },
              {
                icon: "03",
                title: "Multi-Industry Expertise",
                desc: "Deep knowledge across several industries allows us to spot opportunities others miss and apply proven strategies to new markets.",
              },
              {
                icon: "04",
                title: "Scalable Infrastructure",
                desc: "Proven frameworks for launching, acquiring, and scaling businesses -- designed to grow with each subsidiary.",
              },
              {
                icon: "05",
                title: "Diversified Portfolio",
                desc: "Multiple revenue streams across industries create stability, reduce risk, and open doors for cross-subsidiary collaboration.",
              },
              {
                icon: "06",
                title: "Entrepreneurial Support",
                desc: "We empower subsidiary leaders with autonomy and corporate backing -- the best of independence with the strength of a parent company.",
              },
            ].map((item) => (
              <div key={item.icon} className="card">
                <div style={styles.cardIcon}>{item.icon}</div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2 className="section-title">Our Portfolio</h2>
            <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
              Denvan Holdings operates across several different industry sectors.
              Our diversified approach allows us to identify opportunities, manage risk,
              and build lasting businesses wherever we see potential.
            </p>
          </div>
          <div className="grid-3">
            {[
              { title: "Diverse Industries", icon: "01", desc: "We build and manage businesses across a wide range of sectors -- adapting our expertise to each unique market." },
              { title: "Growing Portfolio", icon: "02", desc: "Our portfolio continues to expand as we launch new subsidiaries and explore strategic acquisitions in emerging sectors." },
              { title: "Strategic Expansion", icon: "03", desc: "Every new venture is carefully evaluated for market fit, growth potential, and alignment with our corporate vision." },
            ].map((item) => (
              <div key={item.title} className="card">
                <div style={styles.cardIcon}>{item.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#1B5E37" }}>{item.title}</h3>
                <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section">
        <div className="container">
          <div style={styles.missionGrid}>
            <div>
              <h2 className="section-title">Our Mission</h2>
              <p style={{ fontSize: 18, color: "#64748B", lineHeight: 1.7, marginBottom: 32 }}>
                To build, acquire, and grow a diversified portfolio of businesses that
                deliver exceptional value across industries -- empowering entrepreneurs,
                serving communities, and creating lasting impact.
              </p>
              <Link href="/about" className="btn btn-outline">
                About Denvan Holdings
              </Link>
            </div>
            <div style={styles.valuesGrid}>
              {[
                { name: "Excellence", desc: "Highest standards in everything we do" },
                { name: "Integrity", desc: "Transparency and ethical responsibility" },
                { name: "Innovation", desc: "Embracing new ideas and technologies" },
                { name: "Scalability", desc: "Designed to grow efficiently" },
              ].map((value) => (
                <div key={value.name} style={styles.valueItem}>
                  <h4 style={{ fontWeight: 600, color: "#1B5E37", marginBottom: 4 }}>{value.name}</h4>
                  <p style={{ fontSize: 14, color: "#64748B" }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div className="container text-center">
          <h2 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 16 }}>
            Ready to Build Something Together?
          </h2>
          <p style={{ fontSize: 18, color: "#94A3B8", marginBottom: 32, maxWidth: 600, margin: "0 auto 32px" }}>
            Whether you&apos;re a potential partner, investor, or entrepreneur looking for
            corporate support -- we&apos;d love to hear from you.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            <Link href="/investors" className="btn btn-secondary">Investor Information</Link>
            <Link href="/contact" className="btn btn-secondary">Partnership Inquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(135deg, #0D2818 0%, #1B5E37 50%, #267A48 100%)",
    color: "#FFFFFF",
    padding: "120px 0 100px",
    position: "relative",
    overflow: "hidden",
  },
  heroInner: {
    maxWidth: 800,
    position: "relative",
    zIndex: 1,
  },
  heroBadge: {
    display: "inline-block",
    padding: "6px 16px",
    background: "rgba(197, 165, 90, 0.15)",
    color: "#B8942A",
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 24,
    border: "1px solid rgba(197, 165, 90, 0.3)",
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
  },
  cardIcon: {
    width: 48,
    height: 48,
    background: "#F1F5F9",
    color: "#B8942A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
    color: "#1B5E37",
  },
  cardDesc: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 1.6,
  },
  sectorDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    marginBottom: 16,
  },
  missionGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 64,
    alignItems: "center",
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
  },
  valueItem: {
    padding: 24,
    background: "#F1F5F9",
    borderRadius: 12,
  },
  cta: {
    background: "linear-gradient(135deg, #0D2818 0%, #1B5E37 100%)",
    padding: "96px 0",
  },
};
