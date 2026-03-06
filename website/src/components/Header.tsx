"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div className="container" style={styles.inner}>
        <Link href="/" style={styles.logo}>
          <div style={styles.logoMark}>
            <span style={styles.logoD}>D</span>
            <span style={styles.logoH}>H</span>
            <span style={styles.logoDot}>.</span>
          </div>
          <div>
            <div style={styles.logoText}>DENVAN HOLDINGS</div>
            <div style={styles.logoSub}>LLC</div>
          </div>
        </Link>

        <nav style={styles.nav}>
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/blog", label: "Insights" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link key={link.href} href={link.href} style={styles.navLink}>
              {link.label}
            </Link>
          ))}
          <Link href="/investors" className="btn btn-primary" style={{ padding: "10px 24px", fontSize: "14px" }}>
            Investor Info
          </Link>
        </nav>

        <button
          style={styles.mobileToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ ...styles.hamburger, ...(menuOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}) }} />
          <span style={{ ...styles.hamburger, ...(menuOpen ? { opacity: 0 } : {}) }} />
          <span style={{ ...styles.hamburger, ...(menuOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}) }} />
        </button>
      </div>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/blog", label: "Insights" },
            { href: "/contact", label: "Contact" },
            { href: "/investors", label: "Investor Info" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "#FFFFFF",
    borderBottom: "1px solid #E2E8F0",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    textDecoration: "none",
  },
  logoMark: {
    width: 52,
    height: 52,
    background: "linear-gradient(145deg, #1B2A4A, #2A3F6A)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    fontFamily: "'Playfair Display', serif",
    boxShadow: "0 2px 8px rgba(27, 42, 74, 0.3)",
    position: "relative",
  },
  logoD: {
    fontWeight: 700,
    fontSize: 22,
    color: "#FFFFFF",
    letterSpacing: "-1px",
  },
  logoH: {
    fontWeight: 700,
    fontSize: 22,
    color: "#C5A55A",
    letterSpacing: "-1px",
  },
  logoDot: {
    fontWeight: 700,
    fontSize: 26,
    color: "#C5A55A",
    lineHeight: 0.6,
    marginLeft: 1,
  },
  logoText: {
    fontWeight: 700,
    fontSize: 18,
    color: "#1B2A4A",
    letterSpacing: "0.05em",
    lineHeight: 1.2,
  },
  logoSub: {
    fontSize: 11,
    color: "#64748B",
    letterSpacing: "0.15em",
    fontWeight: 500,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 32,
  },
  navLink: {
    fontSize: 15,
    fontWeight: 500,
    color: "#1B2A4A",
    transition: "color 0.2s",
  },
  mobileToggle: {
    display: "none",
    flexDirection: "column",
    gap: 6,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 8,
  },
  hamburger: {
    display: "block",
    width: 26,
    height: 2.5,
    background: "#1B2A4A",
    borderRadius: 2,
    transition: "all 0.3s",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    padding: "16px 24px 24px",
    background: "#FFFFFF",
    borderTop: "1px solid #E2E8F0",
  },
  mobileLink: {
    padding: "14px 0",
    fontSize: 17,
    fontWeight: 500,
    color: "#1B2A4A",
    borderBottom: "1px solid #F1F5F9",
  },
};
