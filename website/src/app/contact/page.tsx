"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section style={styles.hero}>
        <div className="container">
          <p style={styles.breadcrumb}>Home / Contact</p>
          <h1 style={styles.heroTitle}>Get in Touch</h1>
          <p style={styles.heroText}>
            Whether you&apos;re a potential partner, investor, client, or entrepreneur --
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div style={styles.grid}>
            {/* Form */}
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1B2A4A", marginBottom: 8 }}>
                Send Us a Message
              </h2>
              <p style={{ color: "#64748B", marginBottom: 32, fontSize: 15 }}>
                Fill out the form below and our team will respond within 1-2 business days.
              </p>

              {submitted ? (
                <div style={styles.success}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: "#16A34A", marginBottom: 8 }}>
                    Message Sent
                  </h3>
                  <p style={{ color: "#64748B" }}>
                    Thank you for reaching out. A member of our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={styles.formRow}>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="form-label">First Name *</label>
                      <input type="text" className="form-input" required />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="form-label">Last Name *</label>
                      <input type="text" className="form-input" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input type="email" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Inquiry Type *</label>
                    <select className="form-select" required defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option>General Inquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Investor Relations</option>
                      <option>Subsidiary / Business Opportunity</option>
                      <option>Career Inquiry</option>
                      <option>Media / Press</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company / Organization</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea className="form-textarea" required placeholder="Tell us how we can help..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <div style={styles.infoCard}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1B2A4A", marginBottom: 24 }}>
                  Contact Information
                </h3>

                {[
                  { label: "General Inquiries", value: "info@denvanholdings.com", href: "mailto:info@denvanholdings.com" },
                  { label: "Partnerships", value: "partnerships@denvanholdings.com", href: "mailto:partnerships@denvanholdings.com" },
                  { label: "Investor Relations", value: "investors@denvanholdings.com", href: "mailto:investors@denvanholdings.com" },
                  { label: "Careers", value: "careers@denvanholdings.com", href: "mailto:careers@denvanholdings.com" },
                  { label: "Phone", value: "(202) 415-9373", href: "tel:+12024159373" },
                ].map((item) => (
                  <div key={item.label} style={styles.infoItem}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                      {item.label}
                    </div>
                    <a href={item.href} style={{ color: "#1B2A4A", fontWeight: 500, textDecoration: "none" }}>{item.value}</a>
                  </div>
                ))}

                <div style={{ ...styles.infoItem, borderBottom: "none" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                    Office Address
                  </div>
                  <div style={{ color: "#1B2A4A", fontWeight: 500 }}>
                    5900 Balcones Drive, STE 100<br />
                    Austin, TX 78731
                  </div>
                </div>
              </div>

              <div style={styles.infoCard}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1B2A4A", marginBottom: 12 }}>
                  Business Hours
                </h3>
                <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.7 }}>
                  Monday - Friday: 9:00 AM - 6:00 PM CST<br />
                  Saturday - Sunday: Closed
                </p>
              </div>

              <div style={{ ...styles.infoCard, background: "#1B2A4A", color: "#FFFFFF" }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
                  Investor Inquiries
                </h3>
                <p style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                  Interested in investment or partnership opportunities with Denvan Holdings?
                </p>
                <a href="/investors" className="btn btn-primary" style={{ width: "100%", textAlign: "center" }}>
                  View Investor Info
                </a>
              </div>
            </div>
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
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 380px",
    gap: 48,
    alignItems: "start",
  },
  formRow: {
    display: "flex",
    gap: 16,
  },
  success: {
    padding: 48,
    textAlign: "center",
    background: "#F0FDF4",
    borderRadius: 12,
    border: "1px solid #BBF7D0",
  },
  infoCard: {
    background: "#F1F5F9",
    borderRadius: 12,
    padding: 28,
    marginBottom: 20,
  },
  infoItem: {
    paddingBottom: 16,
    marginBottom: 16,
    borderBottom: "1px solid #E2E8F0",
  },
};
