"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const posts = [
  {
    slug: "what-is-a-holding-company",
    title: "What Is a Holding Company? A Simple Guide for Entrepreneurs",
    excerpt:
      "Thinking about structuring your businesses under a holding company? Here's everything you need to know about how holding companies work, their benefits, and whether it's right for you. A holding company is a parent corporation that owns controlling interests in subsidiary companies. Unlike operating companies, a holding company doesn't produce goods or services itself -- instead, it exists to own and manage other businesses.",
    category: "Business Strategy",
    date: "March 5, 2026",
    readTime: "6 min read",
  },
  {
    slug: "why-we-built-denvan-holdings",
    title: "Why We Built Denvan Holdings: Our Story",
    excerpt:
      "Every company has an origin story. Here's ours -- and why we believe the holding company model is the future of entrepreneurship and business management. We saw an opportunity to create a corporate structure that supports ambitious entrepreneurs while building lasting value across multiple industries.",
    category: "Company News",
    date: "March 1, 2026",
    readTime: "4 min read",
  },
  {
    slug: "multi-industry-diversification",
    title: "The Benefits of Multi-Industry Business Diversification",
    excerpt:
      "Why putting all your eggs in one basket is risky -- and how a diversified business portfolio creates stability, reduces risk, and opens doors to new opportunities. When one sector faces headwinds, others can continue to perform, providing a natural hedge against market volatility.",
    category: "Business Strategy",
    date: "February 25, 2026",
    readTime: "5 min read",
  },
  {
    slug: "parent-company-subsidiary-support",
    title: "How Parent Companies Support Subsidiary Growth",
    excerpt:
      "From shared services to strategic guidance, learn how a well-structured parent company can accelerate the growth of its subsidiary businesses. The relationship between a parent company and its subsidiaries is built on mutual benefit -- the parent provides resources, and the subsidiaries generate returns.",
    category: "Management",
    date: "February 18, 2026",
    readTime: "5 min read",
  },
  {
    slug: "shared-services-save-time-money",
    title: "How Shared Services Save Subsidiaries Time and Money",
    excerpt:
      "Centralized HR, legal, IT, and marketing services reduce overhead for every business in the portfolio. Here's how the shared services model works and why it matters. By pooling resources across multiple subsidiaries, holding companies can negotiate better rates, hire specialized talent, and eliminate redundant operations.",
    category: "Industry Insights",
    date: "February 10, 2026",
    readTime: "7 min read",
  },
  {
    slug: "scalable-business-structure",
    title: "Building a Scalable Business Structure from Day One",
    excerpt:
      "The decisions you make early on about structure, systems, and processes determine how efficiently your business can grow. Here's how to get it right. Scalability isn't just about technology -- it's about creating repeatable processes, clear governance, and flexible frameworks that adapt as your business evolves.",
    category: "Business Strategy",
    date: "February 3, 2026",
    readTime: "6 min read",
  },
  {
    slug: "dba-vs-llc-subsidiary",
    title: "DBA vs. LLC Subsidiary: Which Structure Is Right for Your Business?",
    excerpt:
      "Understanding the differences between operating as a DBA under a holding company versus forming a separate LLC for each business. Each approach has distinct advantages in terms of liability protection, tax implications, and operational flexibility. We break down when each option makes the most sense.",
    category: "Business Strategy",
    date: "January 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "corporate-governance-best-practices",
    title: "Corporate Governance Best Practices for Holding Companies",
    excerpt:
      "Strong governance is the backbone of any successful holding company. Learn the frameworks, policies, and structures that keep a multi-subsidiary operation running smoothly -- from board composition and reporting cadences to compliance requirements and risk management protocols.",
    category: "Management",
    date: "January 20, 2026",
    readTime: "7 min read",
  },
  {
    slug: "building-business-ecosystem",
    title: "Creating a Business Ecosystem: How Subsidiaries Can Support Each Other",
    excerpt:
      "One of the most powerful advantages of a holding company is the ability to create synergies between subsidiaries. Cross-referrals, shared customer bases, and complementary services can multiply growth. Here's how to build an ecosystem where every business in the portfolio lifts the others.",
    category: "Industry Insights",
    date: "January 12, 2026",
    readTime: "6 min read",
  },
];

const categories = ["All", "Business Strategy", "Company News", "Management", "Industry Insights"];

export default function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p style={styles.breadcrumb}>Home / Insights & News</p>
          <h1 style={styles.heroTitle}>Insights & News</h1>
          <p style={styles.heroText}>
            Corporate updates, industry insights, and thought leadership from the
            Denvan Holdings team. Stay informed about business strategy, holding company
            best practices, and the latest from our growing portfolio.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section style={{ borderBottom: "1px solid #E2E8F0", background: "#FFFFFF", position: "sticky", top: 88, zIndex: 50 }}>
        <div className="container" style={{ display: "flex", gap: 8, padding: "16px 24px", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              style={{
                padding: "8px 20px",
                borderRadius: 100,
                border: cat === "All" ? "none" : "1px solid #E2E8F0",
                background: cat === "All" ? "#1B5E37" : "transparent",
                color: cat === "All" ? "#FFFFFF" : "#64748B",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
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
          <AnimateOnScroll animation="fade-up">
            <div className="featured-post">
              <div style={styles.featuredImage}>
                <span style={{ fontSize: 72, fontWeight: 700, color: "#B8942A", opacity: 0.3 }}>DH</span>
              </div>
              <div>
                <div style={styles.badge}>{featured.category}</div>
                <h2 style={{ fontSize: 28, fontWeight: 700, color: "#1B5E37", marginBottom: 12, lineHeight: 1.3 }}>
                  {featured.title}
                </h2>
                <p style={{ color: "#64748B", lineHeight: 1.7, marginBottom: 20, fontSize: 16 }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#94A3B8", fontSize: 14, flexWrap: "wrap" }}>
                  <span>{featured.date}</span>
                  <span>|</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Post Grid */}
      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container" style={{ paddingTop: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1B5E37", marginBottom: 32 }}>
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
                  <span style={{ fontSize: 36, fontWeight: 700, color: "#B8942A", opacity: 0.3 }}>DH</span>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ ...styles.badge, marginBottom: 12 }}>{post.category}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "#1B5E37", marginBottom: 8, lineHeight: 1.4 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>
                    {post.excerpt.slice(0, 140)}...
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#94A3B8", flexWrap: "wrap", gap: 8 }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <h2 className="section-title">Topics We Cover</h2>
              <p className="section-subtitle" style={{ margin: "16px auto 48px" }}>
                Deep dives into the strategies and frameworks that drive successful
                multi-industry business operations.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid-4">
            {[
              { title: "Holding Company Strategy", desc: "Structuring, governance, and management frameworks for parent companies." },
              { title: "Business Growth", desc: "Scaling strategies, market expansion, and revenue optimization approaches." },
              { title: "Operations & Efficiency", desc: "Shared services, SOPs, and operational excellence across subsidiaries." },
              { title: "Investment & Finance", desc: "Capital allocation, revenue models, and financial planning for diversified portfolios." },
            ].map((topic) => (
              <div key={topic.title} style={styles.topicCard}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1B5E37", marginBottom: 8 }}>{topic.title}</h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section section-dark text-center">
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <h2 className="section-title" style={{ color: "#FFFFFF" }}>Stay Informed</h2>
            <p className="section-subtitle" style={{ margin: "16px auto 32px", color: "#94A3B8" }}>
              Subscribe to The Holdings Report -- our monthly newsletter with corporate
              updates, industry insights, and strategic perspectives from Denvan Holdings.
            </p>
            <form style={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="form-input"
                style={{ maxWidth: 400, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF" }}
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            <p style={{ fontSize: 13, color: "#64748B", marginTop: 12 }}>
              No spam. Unsubscribe anytime. Join business leaders who trust our insights.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(135deg, #0D2818 0%, #1B5E37 100%)",
    padding: "100px 0 80px",
    color: "#FFFFFF",
    position: "relative",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 70% 50%, rgba(184, 148, 42, 0.06) 0%, transparent 60%)",
    pointerEvents: "none",
  },
  breadcrumb: { fontSize: 14, color: "#64748B", marginBottom: 16 },
  heroTitle: { fontSize: "2.75rem", fontWeight: 700, marginBottom: 16 },
  heroText: { fontSize: 18, color: "#94A3B8", maxWidth: 640, lineHeight: 1.7 },
  featuredImage: {
    minHeight: 320,
    background: "linear-gradient(135deg, #1B5E37, #267A48)",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    display: "inline-block",
    padding: "4px 12px",
    background: "#F1F5F9",
    color: "#1B5E37",
    borderRadius: 100,
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 16,
  },
  topicCard: {
    padding: 24,
    borderRadius: 12,
    background: "#F8FAFC",
    border: "1px solid #E2E8F0",
    transition: "all 0.3s ease",
  },
  newsletterForm: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap",
  },
};
