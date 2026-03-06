# Denvan Holdings LLC

**Building Businesses. Creating Legacy.**

A multi-industry holding company providing strategic management, investment, and operational support across professional services, education, technology consulting, and personal services.

---

## Project Structure

```
Denvan-Holdings/
├── README.md                    # This file
├── docs/                        # Corporate documentation
│   ├── 01-company-overview.md   # Mission, vision, values, USPs
│   ├── 02-business-structure.md # Legal structure, EIN, banking, hierarchy
│   ├── 03-branding-guide.md     # Logo, colors, typography, style guide
│   ├── 04-email-it-setup.md     # Email structure, Google Workspace, IT tools
│   ├── 05-marketing-strategy.md # Social media, SEO, newsletter, content plan
│   └── 06-subsidiary-integration-outline.md # Full onboarding framework
├── website/                     # Next.js corporate website
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx         # Home page
│   │   │   ├── about/page.tsx   # About Us
│   │   │   ├── services/page.tsx # Services & Portfolio
│   │   │   ├── contact/page.tsx # Contact form
│   │   │   ├── blog/page.tsx    # Insights & News
│   │   │   ├── investors/page.tsx # Investor Information
│   │   │   ├── layout.tsx       # Root layout with header/footer
│   │   │   └── globals.css      # Global styles & brand tokens
│   │   └── components/
│   │       ├── Header.tsx       # Navigation header
│   │       └── Footer.tsx       # Site footer
│   └── public/images/
│       ├── logo.svg             # Primary logo (SVG)
│       └── favicon.svg          # Favicon
```

## Quick Start

### Run the website locally

```bash
cd website
npm install
npm run dev
```

Open http://localhost:3000

### Build for production

```bash
cd website
npm run build
npm start
```

## Documentation

All corporate documentation is in the `docs/` folder:

| Document | Contents |
|----------|----------|
| **01 - Company Overview** | Mission, vision, core values, target audience, unique selling points |
| **02 - Business Structure** | Corporate hierarchy, legal structure options, EIN/banking setup, subsidiary guidelines |
| **03 - Branding Guide** | Logo concepts, brand colors, typography, tagline, voice & tone, subsidiary branding framework |
| **04 - Email & IT Setup** | Professional email structure, Google Workspace setup, DNS records, IT tool stack |
| **05 - Marketing Strategy** | Social media plan, newsletter templates, SEO keywords, content calendar |
| **06 - Subsidiary Integration** | Full onboarding checklist, communication templates, document templates |

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Blue | `#1B2A4A` | Primary brand color |
| Gold | `#C5A55A` | Accents and CTAs |
| White | `#FFFFFF` | Backgrounds |
| Slate Gray | `#64748B` | Body text |
| Light Gray | `#F1F5F9` | Section backgrounds |
| Dark Charcoal | `#0F172A` | Footer, dark sections |

## Deployment

The website is built with Next.js 15 and can be deployed to:

- **Vercel** (recommended): Connect your GitHub repo and deploy automatically
- **Netlify**: Use `npm run build` with publish directory `.next`
- **Any Node.js host**: Use `npm run build && npm start`

## Next Steps

1. **Domain**: Purchase `denvanholdings.com`
2. **Email**: Set up Google Workspace and configure DNS
3. **Deploy**: Push to GitHub and connect to Vercel
4. **Content**: Replace placeholder text (addresses, phone numbers, team names)
5. **Logo**: Have the SVG logo concept refined by a designer
6. **Legal**: File LLC, obtain EIN, set up banking
7. **First subsidiary**: Follow the integration outline in `docs/06`
