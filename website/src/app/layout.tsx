import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denvan Holdings LLC | Building Businesses. Creating Legacy.",
  description:
    "Denvan Holdings is a multi-industry holding company providing strategic management, investment, and operational support across several diverse business sectors.",
  keywords: [
    "holding company",
    "business management",
    "professional services",
    "education",
    "technology consulting",
    "subsidiary management",
    "corporate holdings",
  ],
  openGraph: {
    title: "Denvan Holdings LLC | Building Businesses. Creating Legacy.",
    description:
      "A multi-industry holding company providing strategic management and operational support across several diverse business sectors.",
    type: "website",
    locale: "en_US",
    siteName: "Denvan Holdings LLC",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
