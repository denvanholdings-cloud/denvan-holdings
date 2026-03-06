import Link from "next/link";
import { posts } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: "120px 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "2rem", color: "#1B2A4A", marginBottom: 16 }}>Article Not Found</h1>
          <p style={{ color: "#64748B", marginBottom: 32 }}>The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="btn btn-primary">Back to Insights</Link>
        </div>
      </div>
    );
  }

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 16 }}>
            <Link href="/blog" style={styles.backLink}>
              &larr; Back to Insights
            </Link>
          </div>
          <div style={styles.badge}>{post.category}</div>
          <h1 style={styles.heroTitle}>{post.title}</h1>
          <div style={styles.meta}>
            <span>{post.date}</span>
            <span style={styles.metaDivider}>|</span>
            <span>{post.readTime}</span>
            <span style={styles.metaDivider}>|</span>
            <span>Denvan Holdings Team</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ padding: "64px 0 96px" }}>
        <div className="container">
          <div className="article-layout">
            <article style={styles.articleContent}>
              {post.content.map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2 key={i} style={styles.h2}>
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("**") && block.endsWith("**")) {
                  return (
                    <p key={i} style={{ ...styles.paragraph, fontWeight: 600, color: "#0F172A" }}>
                      {block.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                // Handle paragraphs with bold segments
                const parts = block.split(/(\*\*.*?\*\*)/g);
                return (
                  <p key={i} style={styles.paragraph}>
                    {parts.map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return <strong key={j} style={{ color: "#0F172A" }}>{part.replace(/\*\*/g, "")}</strong>;
                      }
                      return <span key={j}>{part}</span>;
                    })}
                  </p>
                );
              })}

              {/* Share / CTA */}
              <div style={styles.articleCta}>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "#1B2A4A", marginBottom: 8 }}>
                  Want to learn more?
                </h3>
                <p style={{ color: "#64748B", marginBottom: 20, lineHeight: 1.6 }}>
                  Denvan Holdings is a multi-industry holding company based in Austin, Texas.
                  We build, acquire, and grow diversified businesses under one corporate umbrella.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-primary">Contact Us</Link>
                  <Link href="/about" className="btn btn-outline">About Denvan Holdings</Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={styles.sidebar}>
              <div style={styles.sidebarCard}>
                <h3 style={styles.sidebarTitle}>About Denvan Holdings</h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>
                  A multi-industry holding company providing strategic management,
                  investment, and operational support across several diverse business sectors.
                </p>
                <Link href="/about" style={styles.sidebarLink}>Learn More &rarr;</Link>
              </div>

              <div style={styles.sidebarCard}>
                <h3 style={styles.sidebarTitle}>Related Articles</h3>
                {otherPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={styles.relatedPost}>
                    <span style={styles.relatedCategory}>{p.category}</span>
                    <span style={styles.relatedTitle}>{p.title}</span>
                    <span style={styles.relatedDate}>{p.date}</span>
                  </Link>
                ))}
              </div>

              <div style={styles.sidebarCard}>
                <h3 style={styles.sidebarTitle}>Get In Touch</h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, marginBottom: 8 }}>
                  (202) 415-9373
                </p>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>
                  info@denvanholdings.com
                </p>
                <Link href="/contact" style={styles.sidebarLink}>Contact Us &rarr;</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1B2A4A", marginBottom: 32 }}>
            More Insights
          </h2>
          <div className="grid-3">
            {otherPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                <article className="card" style={{ padding: 0, overflow: "hidden" }}>
                  <div style={{
                    height: 160,
                    background: "linear-gradient(135deg, #F1F5F9, #E2E8F0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <span style={{ fontSize: 32, fontWeight: 700, color: "#C5A55A", opacity: 0.3 }}>DH</span>
                  </div>
                  <div style={{ padding: 24 }}>
                    <div style={{ display: "inline-block", padding: "3px 10px", background: "#F1F5F9", color: "#1B2A4A", borderRadius: 100, fontSize: 11, fontWeight: 600, marginBottom: 10 }}>
                      {p.category}
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1B2A4A", marginBottom: 8, lineHeight: 1.4 }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 13, color: "#94A3B8" }}>{p.date} &middot; {p.readTime}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(135deg, #0F172A 0%, #1B2A4A 100%)",
    padding: "100px 0 60px",
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
  backLink: {
    color: "#94A3B8",
    fontSize: 14,
    transition: "color 0.2s",
  },
  badge: {
    display: "inline-block",
    padding: "5px 14px",
    background: "rgba(197, 165, 90, 0.15)",
    color: "#C5A55A",
    borderRadius: 100,
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 16,
    border: "1px solid rgba(197, 165, 90, 0.3)",
  },
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: 20,
    lineHeight: 1.25,
    maxWidth: 800,
  },
  meta: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 14,
    color: "#94A3B8",
    flexWrap: "wrap",
  },
  metaDivider: {
    color: "#475569",
  },
  articleLayout: {
    display: "grid",
    gridTemplateColumns: "1fr 340px",
    gap: 48,
    alignItems: "start",
  },
  articleContent: {
    maxWidth: "none",
  },
  h2: {
    fontSize: 24,
    fontWeight: 700,
    color: "#1B2A4A",
    marginTop: 40,
    marginBottom: 16,
    lineHeight: 1.3,
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 1.8,
    color: "#374151",
    marginBottom: 20,
  },
  articleCta: {
    marginTop: 48,
    padding: 32,
    background: "#F8FAFC",
    borderRadius: 12,
    border: "1px solid #E2E8F0",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    position: "sticky",
    top: 120,
  },
  sidebarCard: {
    padding: 24,
    background: "#F8FAFC",
    borderRadius: 12,
    border: "1px solid #E2E8F0",
  },
  sidebarTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: "#1B2A4A",
    marginBottom: 12,
  },
  sidebarLink: {
    fontSize: 14,
    fontWeight: 600,
    color: "#C5A55A",
    transition: "color 0.2s",
  },
  relatedPost: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: "12px 0",
    borderBottom: "1px solid #E2E8F0",
    textDecoration: "none",
  },
  relatedCategory: {
    fontSize: 11,
    fontWeight: 600,
    color: "#C5A55A",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  relatedTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: "#1B2A4A",
    lineHeight: 1.4,
  },
  relatedDate: {
    fontSize: 12,
    color: "#94A3B8",
  },
};
