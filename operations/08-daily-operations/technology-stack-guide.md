# Technology Stack Guide

## Tools & Platforms for Running Denvan Holdings

---

## Core Business Tools

### 1. Google Workspace (Required)
**Cost:** $7.20/user/month (Business Starter)

| Tool | Use Case |
|------|----------|
| Gmail | Professional email (@denvanholdings.com) |
| Google Drive | Document storage and sharing |
| Google Docs | Proposals, SOPs, internal documents |
| Google Sheets | Budgets, trackers, quick analysis |
| Google Calendar | Scheduling, meeting management |
| Google Meet | Video calls and virtual meetings |

**Setup:**
1. Purchase domain through Google Domains or Squarespace
2. Set up Google Workspace admin at admin.google.com
3. Create email aliases: info@, accounting@, hr@
4. Set up shared drives per subsidiary
5. Enable 2FA for all accounts

---

### 2. QuickBooks Online (Required)
**Cost:** $30-90/month (Plus or Essentials plan)

**What it does:**
- Invoicing and accounts receivable
- Bill pay and accounts payable
- Bank reconciliation
- Profit & Loss reports per subsidiary (using Classes)
- Tax preparation reports

**Setup:**
1. Subscribe to QuickBooks Online Plus (supports Classes)
2. Set up Chart of Accounts (see `04-financial-operations/chart-of-accounts.md`)
3. Create Classes for each subsidiary
4. Connect bank accounts and credit cards
5. Set up recurring invoices for management fees
6. Enable bank feeds for auto-importing transactions

**Key Settings:**
- Turn on "Track classes" in Settings > Advanced
- Set fiscal year start month
- Enable "Close the books" after monthly reconciliation
- Set up automated payment reminders

---

### 3. Project Management Tool (Required)
**Recommended:** Notion, Asana, or Monday.com

| Tool | Best For | Cost |
|------|----------|------|
| **Notion** | All-in-one workspace, docs + tasks | Free - $10/user/mo |
| **Asana** | Task management, team coordination | Free - $11/user/mo |
| **Monday.com** | Visual project tracking | $9/user/mo |

**What to track:**
- Subsidiary launch checklists
- Weekly/monthly task lists
- Client project progress
- Content calendars
- Meeting action items

---

### 4. CRM (Customer Relationship Management)
**Recommended:** HubSpot CRM (Free tier)

**What it does:**
- Track leads and prospects per subsidiary
- Log calls, emails, and meetings
- Pipeline management
- Contact database
- Basic reporting

**Alternatives:**
- Zoho CRM (Free for 3 users)
- Pipedrive ($15/user/month - simpler interface)

---

## Communication Tools

### 5. Slack (Team Communication)
**Cost:** Free (sufficient for small teams) or $7.25/user/month

**Channel Structure:**
```
#general           - Company-wide announcements
#finance           - Financial discussions
#marketing         - Marketing team
#[subsidiary-name] - Per-subsidiary channel
#random            - Non-work chat
```

**Rules:**
- Use channels, not DMs, for work discussions
- Pin important messages
- Set status when unavailable
- Respond within 4 business hours

### 6. Zoom or Google Meet (Video Calls)
- Google Meet is included with Google Workspace
- Zoom free tier: 40-minute meetings, unlimited 1-on-1
- Zoom Pro ($13/month): unlimited meeting length

---

## Marketing & Sales Tools

### 7. Website
**Current:** Next.js on GitHub Pages (free hosting)
- Source code in `website/` directory
- Deployed via GitHub Actions
- Custom domain: denvanholdings.com

### 8. Social Media Management
**Recommended:** Buffer (Free - 3 channels) or Hootsuite

**What it does:**
- Schedule posts across platforms
- Track engagement metrics
- Manage multiple accounts
- Content calendar view

### 9. Email Marketing
**Recommended:** Mailchimp (Free up to 500 contacts)

**Setup:**
1. Create account and import contacts
2. Design email template with brand colors
3. Set up welcome automation sequence
4. Create monthly newsletter template
5. Add signup form to website

### 10. Graphic Design
**Recommended:** Canva (Free or $13/month Pro)

**Use for:**
- Social media graphics
- Presentations
- Business cards
- Simple flyers and marketing materials
- Brand kit storage (Pro)

---

## Financial & Legal Tools

### 11. Banking
**Primary:** Chase Business Complete (or Mercury for online-first)
- See `01-company-setup/banking-setup-guide.md` for full details

### 12. Payment Processing
**Recommended:** Stripe or Square

| Tool | Best For | Fees |
|------|----------|------|
| **Stripe** | Online payments, invoicing | 2.9% + $0.30 |
| **Square** | In-person + online | 2.6% + $0.10 |
| **PayPal** | Client convenience | 2.99% + $0.49 |

### 13. Contract & E-Signatures
**Recommended:** DocuSign or HelloSign

| Tool | Cost | Notes |
|------|------|-------|
| **DocuSign** | $10/month | Industry standard |
| **HelloSign** | Free (3/month) | Simple, clean interface |
| **PandaDoc** | $19/month | Proposals + signatures |

### 14. Tax Filing
- **TurboTax Business** or **CPA** for annual filing
- **EFTPS.gov** for quarterly estimated tax payments
- **Texas Comptroller** website for Franchise Tax

---

## Security & IT

### 15. Password Manager (Required)
**Recommended:** 1Password Business ($8/user/month) or Bitwarden ($3/user/month)

**Setup:**
1. Create organization account
2. Set up shared vaults:
   - `Company-Wide` - shared logins (social media, tools)
   - `Finance` - banking, QuickBooks, payment processors
   - `Admin` - domain registrar, hosting, IT accounts
3. Require master password + 2FA for all users
4. Never share passwords via email, Slack, or text

### 16. Two-Factor Authentication
- Enable on ALL business accounts
- Use authenticator app (Google Authenticator, Authy)
- Store backup codes in password manager
- Priority accounts: email, banking, QuickBooks, domain registrar

### 17. Cloud Backup
- Google Drive serves as primary cloud storage
- Enable Google Vault for email archiving (if needed)
- Monthly backup of critical files to secondary location

---

## Tool Stack by Phase

### Phase 1: Launch (Month 1) - ~$50/month
| Tool | Cost |
|------|------|
| Google Workspace (1 user) | $7.20/mo |
| QuickBooks Online Essentials | $30/mo |
| HubSpot CRM | Free |
| Canva | Free |
| Buffer | Free |
| Bitwarden | Free |
| **Total** | **~$37/mo** |

### Phase 2: Growth (3-6 months) - ~$100/month
Add:
| Tool | Cost |
|------|------|
| Notion (team) | $10/mo |
| Mailchimp | Free |
| HelloSign | Free |
| Slack (free tier) | Free |
| Zoom Pro | $13/mo |
| **Total** | **~$60/mo** |

### Phase 3: Scale (6-12 months) - ~$200-400/month
Add:
| Tool | Cost |
|------|------|
| QuickBooks Plus upgrade | +$30/mo |
| 1Password Business | $8/user/mo |
| Buffer paid plan | $6/mo |
| DocuSign | $10/mo |
| Additional Google Workspace users | $7.20/user/mo |

---

## Account Naming Conventions

- **Email:** firstname@denvanholdings.com
- **Username format:** denvanholdings or denvan_holdings
- **Social handles:** @DenvanHoldings (consistent across platforms)
- **File naming:** `YYYY-MM-DD Description` (e.g., `2026-03-06 Monthly P&L Report`)

---

## Vendor Evaluation Checklist

Before adding any new tool, answer:

1. [ ] Does it solve a real, current problem?
2. [ ] Is there a free or lower-cost alternative?
3. [ ] Does it integrate with our existing tools?
4. [ ] Is it easy to learn and use?
5. [ ] Can we cancel month-to-month?
6. [ ] Is data exportable if we switch later?
7. [ ] Does it meet our security requirements (2FA, encryption)?

**Rule:** Don't pay for tools you don't actively use. Review subscriptions quarterly.
