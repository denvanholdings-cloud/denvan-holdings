"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PostImage from "@/components/PostImage";
import { posts, categories } from "./posts";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p style={styles.breadcrumb}>Home / Insights & News</p>
          <h1 className="page-hero-title">Insights & News</h1>
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
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: 100,
                border: cat === activeCategory ? "none" : "1px solid #E2E8F0",
                background: cat === activeCategory ? "#1B2A4A" : "transparent",
                color: cat === activeCategory ? "#FFFFFF" : "#64748B",
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
      {featured ? (
        <section className="section">
          <div className="container">
            <AnimateOnScroll animation="fade-up">
              <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="featured-post">
                  <PostImage category={featured.category} height={320} size="large" />
                  <div>
                    <div style={styles.badge}>{featured.category}</div>
                    <h2 style={{ fontSize: 28, fontWeight: 700, color: "#1B2A4A", marginBottom: 12, lineHeight: 1.3 }}>
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
                    <span style={styles.readMore}>Read Full Article &rarr;</span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="container text-center">
            <p style={{ color: "#64748B", fontSize: 18 }}>No articles found in this category.</p>
          </div>
        </section>
      )}

      {/* Post Grid */}
      {rest.length > 0 && (
      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container" style={{ paddingTop: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1B2A4A", marginBottom: 32 }}>
            {activeCategory === "All" ? "Recent Articles" : `More in ${activeCategory}`}
          </h2>
          <div className="grid-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article className="card" style={{ padding: 0, overflow: "hidden", height: "100%" }}>
                  <PostImage category={post.category} height={180} size="small" />
                  <div style={{ padding: 24 }}>
                    <div style={{ ...styles.badge, marginBottom: 12 }}>{post.category}</div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: "#1B2A4A", marginBottom: 8, lineHeight: 1.4 }}>
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
              </Link>
            ))}
          </div>
        </div>
      </section>
      )}

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
              {
                title: "Holding Company Strategy",
                desc: "Structuring, governance, and management frameworks for parent companies.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
              },
              {
                title: "Business Growth",
                desc: "Scaling strategies, market expansion, and revenue optimization approaches.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                  </svg>
                ),
              },
              {
                title: "Operations & Efficiency",
                desc: "Shared services, SOPs, and operational excellence across subsidiaries.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                ),
              },
              {
                title: "Investment & Finance",
                desc: "Capital allocation, revenue models, and financial planning for diversified portfolios.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
              },
            ].map((topic) => (
              <div key={topic.title} style={styles.topicCard}>
                <div style={{ marginBottom: 12 }}>{topic.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1B2A4A", marginBottom: 8 }}>{topic.title}</h3>
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
            <h2 className="section-title">Stay Informed</h2>
            <p className="section-subtitle" style={{ margin: "16px auto 32px" }}>
              Subscribe to The Holdings Report -- our monthly newsletter with corporate
              updates, industry insights, and strategic perspectives from Denvan Holdings.
            </p>
            <form style={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="form-input"
                style={{ maxWidth: 400 }}
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            <p style={{ fontSize: 13, color: "#94A3B8", marginTop: 12 }}>
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
    background: "linear-gradient(135deg, #1B2A4A 0%, #2A3F6A 100%)",
    padding: "100px 0 80px",
    color: "#FFFFFF",
    position: "relative",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 70% 50%, rgba(197, 165, 90, 0.06) 0%, transparent 60%)",
    pointerEvents: "none",
  },
  breadcrumb: { fontSize: 14, color: "#64748B", marginBottom: 16 },
  heroTitle: { fontSize: "2.75rem", fontWeight: 700, marginBottom: 16 },
  heroText: { fontSize: 18, color: "#94A3B8", maxWidth: 640, lineHeight: 1.7 },
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
  readMore: {
    display: "inline-block",
    marginTop: 16,
    fontSize: 15,
    fontWeight: 600,
    color: "#C5A55A",
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
