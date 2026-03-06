import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.top}>
          <div style={styles.brand}>
            <div style={styles.logoRow}>
              <Image src="/denvan-holdings/images/logo.png" alt="Denvan Holdings" width={40} height={40} style={{ borderRadius: 4 }} />
              <div>
                <div style={styles.logoText}>DENVAN HOLDINGS</div>
                <div style={styles.logoSub}>LLC</div>
              </div>
            </div>
            <p style={styles.tagline} className="font-playfair">
              Building Businesses. Creating Legacy.
            </p>
            <p style={styles.description}>
              A multi-industry holding company providing strategic management,
              investment, and operational support across several diverse
              business sectors.
            </p>
          </div>

          <div style={styles.links}>
            <div>
              <h4 style={styles.linkTitle}>Company</h4>
              <ul style={styles.linkList}>
                <li><Link href="/about" style={styles.link}>About Us</Link></li>
                <li><Link href="/services" style={styles.link}>Services</Link></li>
                <li><Link href="/blog" style={styles.link}>Insights</Link></li>
                <li><Link href="/contact" style={styles.link}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={styles.linkTitle}>Resources</h4>
              <ul style={styles.linkList}>
                <li><Link href="/investors" style={styles.link}>Investor Info</Link></li>
                <li><Link href="/contact" style={styles.link}>Partnership Inquiry</Link></li>
                <li><Link href="/blog" style={styles.link}>Press Releases</Link></li>
                <li><Link href="/contact" style={styles.link}>Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={styles.linkTitle}>Contact</h4>
              <ul style={styles.linkList}>
                <li style={styles.contactItem}>info@denvanholdings.com</li>
                <li style={styles.contactItem}>(202) 415-9373</li>
                <li style={styles.contactItem}>
                  5900 Balcones Drive, STE 100<br />
                  Austin, TX 78731
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>
            &copy; {currentYear} Denvan Holdings LLC. All rights reserved.
          </p>
          <div style={styles.bottomLinks}>
            <Link href="#" style={styles.bottomLink}>Privacy Policy</Link>
            <Link href="#" style={styles.bottomLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: "#0D2818",
    color: "#94A3B8",
    padding: "64px 0 0",
  },
  top: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: 64,
    paddingBottom: 48,
    borderBottom: "1px solid #1B4A2E",
  },
  brand: {},
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  logoMark: {
    width: 40,
    height: 40,
    background: "#B8942A",
    color: "#0D2818",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 20,
    borderRadius: 8,
    fontFamily: "'Playfair Display', serif",
  },
  logoText: {
    fontWeight: 700,
    fontSize: 16,
    color: "#FFFFFF",
    letterSpacing: "0.05em",
    lineHeight: 1.2,
  },
  logoSub: {
    fontSize: 10,
    color: "#64748B",
    letterSpacing: "0.15em",
    fontWeight: 500,
  },
  tagline: {
    color: "#B8942A",
    fontSize: 18,
    marginBottom: 12,
    fontStyle: "italic",
  },
  description: {
    fontSize: 14,
    lineHeight: 1.7,
    color: "#94A3B8",
  },
  links: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 32,
  },
  linkTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    marginBottom: 16,
  },
  linkList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  link: {
    color: "#94A3B8",
    fontSize: 14,
    transition: "color 0.2s",
  },
  contactItem: {
    fontSize: 14,
    lineHeight: 1.5,
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 0",
  },
  copyright: {
    fontSize: 13,
  },
  bottomLinks: {
    display: "flex",
    gap: 24,
  },
  bottomLink: {
    fontSize: 13,
    color: "#64748B",
  },
};
