"use client";

import Link from "next/link";

const posts = [
  {
    slug: "what-is-a-holding-company",
    title: "What Is a Holding Company? A Simple Guide for Entrepreneurs",
    excerpt:
      "Thinking about structuring your businesses under a holding company? Here's everything you need to know about how holding companies work, their benefits, and whether it's right for you.",
    category: "Business Strategy",
    date: "March 5, 2026",
    readTime: "6 min read",
  },
  {
    slug: "why-we-built-denvan-holdings",
    title: "Why We Built Denvan Holdings: Our Story",
    excerpt:
      "Every company has an origin story. Here's ours -- and why we believe the holding company model is the future of entrepreneurship and business management.",
    category: "Company News",
    date: "March 1, 2026",
    readTime: "4 min read",
  },
  {
    slug: "multi-industry-diversification",
    title: "The Benefits of Multi-Industry Business Diversification",
    excerpt:
      "Why putting all your eggs in one basket is risky -- and how a diversified business portfolio creates stability, reduces risk, and opens doors to new opportunities.",
    category: "Business Strategy",
    date: "February 25, 2026",
    readTime: "5 min read",
  },
  {
    slug: "parent-company-subsidiary-support",
    title: "How Parent Companies Support Subsidiary Growth",
    excerpt:
      "From shared services to strategic guidance, learn how a well-structured parent company can accelerate the growth of its subsidiary businesses.",
    category: "Management",
    date: "February 18, 2026",
    readTime: "5 min read",
  },
  {
    slug: "professional-services-trends-2026",
    title: "Professional Services Trends to Watch in 2026",
    excerpt:
      "The professional services industry is evolving rapidly. Here are the key trends shaping consulting, staffing, and business support services this year.",
    category: "Industry Insights",
    date: "February 10, 2026",
    readTime: "7 min read",
  },
  {
    slug: "technology-consulting-digital-strategy",
    title: "Technology Consulting: Why Every Business Needs a Digital Strategy",
    excerpt:
      "Digital transformation isn't optional anymore. Here's why businesses of every size need a clear technology strategy -- and how to get started.",
    category: "Technology",
    date: "February 3, 2026",
    readTime: "6 min read",
  },
];

const categories = ["All", "Business Strategy", "Company News", "Management", "Industry Insights", "Technology"];

export default function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* Hero */}
      <section style={styles.hero}>
        <div className="container">
          <p style={styles.breadcrumb}>Home / Insights & News</p>
          <h1 style={styles.heroTitle}>Insights & News</h1>
          <p style={styles.heroText}>
            Corporate updates, industry insights, and thought leadership from the
            Denvan Holdings team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section style={{ borderBottom: "1px solid #E2E8F0", background: "#FFFFFF" }}>
        <div className="container" style={{ display: "flex", gap: 8, padding: "16px 24px", overflowX: "auto" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              style={{
                padding: "8px 20px",
                borderRadius: 100,
                border: cat === "All" ? "none" : "1px solid #E2E8F0",
                background: cat === "All" ? "#1B2A4A" : "transparent",
                color: cat === "All" ? "#FFFFFF" : "#64748B",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="section">
        <div className="container">
          <div style={styles.featured}>
            <div style={styles.featuredImage}>
              <span style={{ fontSize: 64, fontWeight: 700, color: "#C5A55A", opacity: 0.3 }}>DH</span>
            </div>
            <div style={styles.featuredContent}>
              <div style={styles.badge}>{featured.category}</div>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: "#1B2A4A", marginBottom: 12, lineHeight: 1.3 }}>
                {featured.title}
              </h2>
              <p style={{ color: "#64748B", lineHeight: 1.7, marginBottom: 20 }}>
                {featured.excerpt}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#94A3B8", fontSize: 14 }}>
                <span>{featured.date}</span>
                <span>|</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container" style={{ paddingTop: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1B2A4A", marginBottom: 32 }}>
            Recent Articles
          </h2>
          <div className="grid-3">
            {rest.map((post) => (
              <article key={post.slug} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{
                  height: 180,
                  background: "linear-gradient(135deg, #F1F5F9, #E2E8F0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <span style={{ fontSize: 36, fontWeight: 700, color: "#C5A55A", opacity: 0.3 }}>DH</span>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ ...styles.badge, marginBottom: 12 }}>{post.category}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "#1B2A4A", marginBottom: 8, lineHeight: 1.4 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>
                    {post.excerpt.slice(0, 120)}...
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#94A3B8" }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Stay Informed</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 32px" }}>
            Subscribe to The Holdings Report -- our monthly newsletter with corporate
            updates, industry insights, and strategic perspectives.
          </p>
          <form style={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-input"
              style={{ maxWidth: 400, margin: "0 auto" }}
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <p style={{ fontSize: 13, color: "#94A3B8", marginTop: 12 }}>
            No spam. Unsubscribe anytime.
          </p>
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
  featured: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "center",
  },
  featuredImage: {
    height: 320,
    background: "linear-gradient(135deg, #1B2A4A, #2A3F6A)",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featuredContent: {},
  badge: {
    display: "inline-block",
    padding: "4px 12px",
    background: "#F1F5F9",
    color: "#1B2A4A",
    borderRadius: 100,
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 16,
  },
  newsletterForm: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap",
  },
};
