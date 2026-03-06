"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div className="container" style={styles.inner}>
        <Link href="/" style={styles.logo}>
          <Image src="/denvan-holdings/images/logo.png" alt="Denvan Holdings" width={48} height={48} style={{ borderRadius: 4 }} />
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
    width: 44,
    height: 44,
    background: "#1B5E37",
    color: "#B8942A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 22,
    borderRadius: 8,
    fontFamily: "'Playfair Display', serif",
  },
  logoText: {
    fontWeight: 700,
    fontSize: 18,
    color: "#1B5E37",
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
    color: "#1B5E37",
    transition: "color 0.2s",
  },
  mobileToggle: {
    display: "none",
    flexDirection: "column",
    gap: 5,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 8,
  },
  hamburger: {
    display: "block",
    width: 24,
    height: 2,
    background: "#1B5E37",
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
    padding: "12px 0",
    fontSize: 16,
    fontWeight: 500,
    color: "#1B5E37",
    borderBottom: "1px solid #F1F5F9",
  },
};

// Add responsive styles via CSS - the mobile toggle is hidden by default
// and shown via media query in globals.css
