# Denvan Holdings LLC - Implementation Playbook

## Step-by-Step Guide to Building and Operating the Holding Company

This is the complete, actionable playbook. Follow each phase in order. Each step has a clear action, who does it, and what "done" looks like.

---

## PHASE 1: LEGAL FOUNDATION (Week 1-2)

### Step 1.1: Form the LLC

| Item | Action |
|------|--------|
| **What** | File Articles of Organization for Denvan Holdings LLC |
| **Where** | Texas Secretary of State (or your state) |
| **Cost** | $300 filing fee (Texas) |
| **How** | File online at sos.state.tx.us or use a service like LegalZoom, Northwest, or Incfile |
| **Done when** | You receive a Certificate of Formation with a file number |

### Step 1.2: Get Your EIN

| Item | Action |
|------|--------|
| **What** | Apply for an Employer Identification Number |
| **Where** | IRS website (irs.gov) -- Form SS-4 |
| **Cost** | Free |
| **How** | Apply online, answer the questions, receive EIN immediately |
| **Done when** | You have a 9-digit EIN number (XX-XXXXXXX) |

### Step 1.3: Write the Operating Agreement

| Item | Action |
|------|--------|
| **What** | Draft the LLC Operating Agreement |
| **Why** | Defines ownership, management structure, profit distribution, and decision-making rules |
| **How** | Use a template (Northwest, LegalZoom) or hire an attorney |
| **Include** | Member names, ownership %, management structure (member-managed or manager-managed), profit distribution, DBA authority, dissolution terms |
| **Done when** | Signed and stored securely (not filed with the state -- keep it internal) |

### Step 1.4: Get a Registered Agent

| Item | Action |
|------|--------|
| **What** | Designate a registered agent in your state of formation |
| **Why** | Required by law -- receives legal documents on behalf of the LLC |
| **Options** | Self (your address), Northwest ($125/yr), Incfile ($119/yr) |
| **Done when** | Registered agent is listed on your formation documents |

### Step 1.5: File for Business Licenses

| Item | Action |
|------|--------|
| **What** | Check city and county business license requirements |
| **Where** | City of Austin and Travis County |
| **How** | Search your city/county website for business permit requirements |
| **Done when** | All required licenses obtained |

**Phase 1 Checklist:**
- [ ] Articles of Organization filed
- [ ] EIN obtained
- [ ] Operating Agreement signed
- [ ] Registered Agent designated
- [ ] Business licenses obtained
- [ ] Formation documents stored in secure folder

---

## PHASE 2: FINANCIAL SETUP (Week 2-3)

### Step 2.1: Open Business Bank Accounts

| Item | Action |
|------|--------|
| **What** | Open checking and savings accounts for Denvan Holdings |
| **Where** | Mercury (recommended), Relay, Chase Business, or Novo |
| **Documents needed** | EIN letter, Articles of Organization, Operating Agreement, government-issued ID |
| **Accounts to open** | 1. Operating Checking 2. Tax Savings 3. Emergency Reserve Savings |
| **Done when** | All accounts open, online access set up, debit card ordered |

### Step 2.2: Set Up Accounting

| Item | Action |
|------|--------|
| **What** | Set up QuickBooks Online (Simple Start - $30/mo) |
| **How** | 1. Sign up at quickbooks.com 2. Connect bank accounts 3. Set up Chart of Accounts 4. Create classes for each subsidiary |
| **Chart of Accounts** | Income: Service Revenue, Management Fee Income. Expenses: Software, Office, Insurance, Marketing, Professional Services, Payroll, Taxes |
| **Done when** | Bank feeds connected, chart of accounts configured, first transactions categorized |

### Step 2.3: Set Up Tax Strategy

| Item | Action |
|------|--------|
| **What** | Establish tax savings process and consult CPA |
| **How** | 1. Set aside 25-30% of net income quarterly into Tax Savings account 2. Find a CPA familiar with LLCs and holding companies 3. Discuss S-Corp election timing (typically beneficial at $40K+ net profit) |
| **Quarterly** | Estimated tax payments due: April 15, June 15, September 15, January 15 |
| **Done when** | CPA engaged, tax savings auto-transfer set up, quarterly reminders in calendar |

### Step 2.4: Business Insurance

| Item | Action |
|------|--------|
| **What** | Get General Liability Insurance at minimum |
| **Where** | Next Insurance, Hiscox, or a local agent |
| **Coverage** | General Liability ($1M/$2M), Professional Liability / E&O (if offering consulting) |
| **Cost** | $30-100/month depending on coverage |
| **Done when** | Policy active, certificate of insurance available |

**Phase 2 Checklist:**
- [ ] Business checking account open
- [ ] Tax savings account open
- [ ] Emergency reserve account open
- [ ] QuickBooks set up and bank connected
- [ ] Chart of accounts configured
- [ ] CPA identified and engaged
- [ ] Tax savings auto-transfer scheduled
- [ ] Business insurance active

---

## PHASE 3: TECHNOLOGY & INFRASTRUCTURE (Week 3-4)

### Step 3.1: Domain & Website

| Item | Action |
|------|--------|
| **What** | Purchase domain and connect to live website |
| **Domain** | Buy denvanholdings.com via Cloudflare ($10/yr) or Namecheap |
| **Website** | Already deployed at denvanholdings-cloud.github.io/denvan-holdings |
| **Connect** | Point custom domain to GitHub Pages (add CNAME record in DNS) |
| **Done when** | denvanholdings.com loads the website with HTTPS |

**How to connect custom domain to GitHub Pages:**
```
1. Go to Cloudflare DNS settings for denvanholdings.com
2. Add CNAME record:
   Name: www
   Target: denvanholdings-cloud.github.io
3. Add A records:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
4. In GitHub repo Settings > Pages > Custom domain:
   Enter: denvanholdings.com
5. Check "Enforce HTTPS"
```

### Step 3.2: Email Setup (Google Workspace)

| Item | Action |
|------|--------|
| **What** | Set up professional email with Google Workspace Business Standard ($14/user/mo) |
| **How** | 1. Sign up at workspace.google.com 2. Verify domain ownership 3. Add DNS records (MX, SPF, DKIM, DMARC) 4. Create email accounts |

**Email accounts to create (Day 1):**
```
info@denvanholdings.com        --> General inquiries
admin@denvanholdings.com       --> Administrative
[yourname]@denvanholdings.com  --> Personal
careers@denvanholdings.com     --> Forward to personal
investors@denvanholdings.com   --> Forward to personal
partnerships@denvanholdings.com --> Forward to personal
```

**DNS records to add:**
```
MX Records:
  Priority 1:  ASPMX.L.GOOGLE.COM
  Priority 5:  ALT1.ASPMX.L.GOOGLE.COM
  Priority 5:  ALT2.ASPMX.L.GOOGLE.COM
  Priority 10: ALT3.ASPMX.L.GOOGLE.COM
  Priority 10: ALT4.ASPMX.L.GOOGLE.COM

TXT (SPF):
  v=spf1 include:_spf.google.com ~all

TXT (DMARC):
  _dmarc  -->  v=DMARC1; p=quarantine; rua=mailto:admin@denvanholdings.com
```

| **Done when** | You can send and receive email from @denvanholdings.com |

### Step 3.3: Phone System

| Item | Action |
|------|--------|
| **What** | Set up business phone with (202) 415-9373 |
| **Options** | Google Voice ($10/mo), OpenPhone ($15/mo), or port to existing provider |
| **Setup** | 1. Choose provider 2. Port number or set up forwarding 3. Record voicemail greeting 4. Set business hours (Mon-Fri 9-6 CST) |
| **Voicemail script** | "Thank you for calling Denvan Holdings. We're unable to take your call right now. Please leave your name, number, and a brief message, and we'll return your call within one business day. You can also reach us at info@denvanholdings.com." |
| **Done when** | Calls to (202) 415-9373 ring to your device or go to voicemail |

### Step 3.4: Core Tools Setup

Do these in order. Each takes 15-30 minutes.

**Day 1:**
| Tool | Action | Cost |
|------|--------|------|
| 1Password | Sign up, create vault "Denvan Holdings", store all credentials here | $8/mo |
| Calendly | Sign up, connect Google Calendar, create booking page, set availability | Free |

**Day 2:**
| Tool | Action | Cost |
|------|--------|------|
| HubSpot CRM | Sign up free, create contact properties, set up deal pipeline (Lead > Contacted > Proposal > Won > Lost) | Free |
| Canva Pro | Sign up, upload brand kit (colors: #1B2A4A, #C5A55A, #FFFFFF; font: Inter), upload logo | $13/mo |

**Day 3:**
| Tool | Action | Cost |
|------|--------|------|
| Notion | Create workspace, create pages: SOPs, Subsidiaries, Tasks, Meeting Notes, Documents | Free |
| DocuSign | Sign up, upload contract templates, set up signing workflow | $10/mo |

### Step 3.5: Security Setup

| Item | Action |
|------|--------|
| **2FA** | Enable on ALL accounts -- Google, bank, HubSpot, everything |
| **Password Manager** | Every account gets a unique password stored in 1Password |
| **Backup** | Enable Google Workspace backup (Vault is included in Business Standard) |
| **Recovery** | Set up recovery email and phone for Google admin account |
| **Done when** | 2FA active everywhere, all passwords in 1Password, backup confirmed |

**Phase 3 Checklist:**
- [ ] Domain purchased and connected to website
- [ ] Google Workspace active, email working
- [ ] DNS records configured (MX, SPF, DKIM, DMARC)
- [ ] Phone system set up with voicemail
- [ ] 1Password set up with all credentials
- [ ] Calendly booking page created
- [ ] HubSpot CRM configured with pipeline
- [ ] Canva Pro with brand kit uploaded
- [ ] Notion workspace created
- [ ] DocuSign ready with templates
- [ ] 2FA enabled on all accounts

---

## PHASE 4: BRANDING & MARKETING LAUNCH (Week 4-5)

### Step 4.1: Finalize Brand Assets

| Item | Action |
|------|--------|
| **Logo** | Refine the SVG logo concept with a designer (Fiverr: $50-200, 99designs: $300+) or finalize in Canva |
| **Deliverables** | Logo in SVG, PNG (transparent), PNG (white bg), favicon ICO, social media sizes |
| **Business Cards** | Design in Canva using brand guide, order from Vistaprint or Moo |
| **Email Signature** | Set up in Gmail: Name, Title, Denvan Holdings LLC, phone, email, website, tagline |
| **Done when** | All brand assets in a shared Google Drive folder called "Brand Assets" |

**Email signature format:**
```
[Full Name]
[Title] | Denvan Holdings LLC
(202) 415-9373 | [email]@denvanholdings.com
denvanholdings.com

Building Businesses. Creating Legacy.
```

### Step 4.2: Social Media Setup

**LinkedIn (Priority 1):**
```
1. Create Company Page at linkedin.com/company/setup
2. Company name: Denvan Holdings LLC
3. Tagline: Building Businesses. Creating Legacy.
4. Description: [Use About section from website]
5. Industry: Management Consulting
6. Company size: 2-10
7. Headquarters: Austin, TX
8. Upload logo as profile picture
9. Create cover image in Canva (1128x191px)
10. Add website URL
11. Publish first post: company launch announcement
```

**Instagram (Priority 2):**
```
1. Create business account @denvanholdings
2. Bio: "Building Businesses. Creating Legacy. | Multi-industry holding company | Austin, TX"
3. Link in bio: denvanholdings.com
4. Upload profile picture (logo monogram)
5. Create 3-5 initial posts in Canva (brand intro, mission, values, team, CTA)
```

**Google Business Profile:**
```
1. Go to business.google.com
2. Add business: Denvan Holdings LLC
3. Category: Business Management Consultant
4. Address: 5900 Balcones Drive, STE 100, Austin, TX 78731
5. Phone: (202) 415-9373
6. Website: denvanholdings.com
7. Hours: Mon-Fri 9AM-6PM CST
8. Add photos and description
9. Verify (postcard, phone, or instant verification)
```

### Step 4.3: Launch Announcement

| Channel | Content |
|---------|---------|
| **LinkedIn Post** | "I'm excited to announce the launch of Denvan Holdings LLC..." (personal story, mission, what you're building, call to action) |
| **Email to Network** | Use the launch email template from docs/08-operations-templates.md |
| **Website Blog** | Publish "Why We Built Denvan Holdings: Our Story" |
| **Instagram** | 5-post carousel: Who we are, what we do, our mission, our values, how to connect |

### Step 4.4: Set Up Newsletter

| Item | Action |
|------|--------|
| **Platform** | Sign up for Beehiiv (free up to 2,500 subscribers) or Mailchimp |
| **Setup** | 1. Create publication "The Holdings Report" 2. Design template using brand colors 3. Add signup form to website 4. Create welcome email |
| **First issue** | Send within 2 weeks of launch |
| **Done when** | Newsletter platform live, signup form on website, welcome email configured |

**Phase 4 Checklist:**
- [ ] Logo finalized in all formats
- [ ] Business cards designed and ordered
- [ ] Email signatures configured for all accounts
- [ ] LinkedIn company page live with first post
- [ ] Instagram account set up with initial posts
- [ ] Google Business Profile verified
- [ ] Launch announcement sent (LinkedIn, email, blog)
- [ ] Newsletter platform set up
- [ ] Brand assets folder organized in Google Drive

---

## PHASE 5: FIRST SUBSIDIARY LAUNCH (Week 5-8)

### Step 5.1: Choose Your First DBA

| Item | Action |
|------|--------|
| **What** | Decide which business to launch first |
| **Criteria** | 1. Can you start earning revenue within 30 days? 2. Do you have existing skills or experience? 3. Is there clear market demand? 4. Low startup cost? |
| **Rule** | Pick the one closest to revenue. You can always add more later. |
| **Done when** | DBA name chosen, service offerings defined |

### Step 5.2: File the DBA

| Item | Action |
|------|--------|
| **What** | File "Doing Business As" (Assumed Name Certificate in Texas) |
| **Where** | Travis County Clerk's office |
| **Cost** | ~$15-25 |
| **How** | File online or in person. You're registering that Denvan Holdings LLC is also doing business as [subsidiary name] |
| **Done when** | Filed and certificate received |

### Step 5.3: Set Up Subsidiary Operations

**Day 1-2: Digital Presence**
```
1. Create subsidiary email:
   info@[subsidiary].denvanholdings.com
   OR use info@denvanholdings.com with a label/filter

2. Create subsidiary section on website
   OR create a simple landing page

3. Create Calendly booking page for subsidiary services

4. Set up social media (if separate from parent)
```

**Day 3-4: Service Definition**
```
1. Write out your service offerings (max 3-5 to start)
   For each service:
   - Name
   - Description (2-3 sentences)
   - Who it's for
   - Price or pricing model
   - Deliverables
   - Timeline

2. Create a one-pager (Canva):
   - Subsidiary name + "A Denvan Holdings Company"
   - Services listed
   - Contact info
   - Call to action

3. Create service agreement template (DocuSign):
   - Scope of work
   - Pricing and payment terms
   - Timeline
   - Cancellation policy
   - Signatures
```

**Day 5-7: Systems**
```
1. Add subsidiary as a class/category in QuickBooks
2. Create subsidiary deal pipeline in HubSpot
3. Create subsidiary folder in Google Drive:
   /Subsidiaries/[Name]/
     /Clients/
     /Contracts/
     /Marketing/
     /Financials/
4. Create SOP documents in Notion:
   - Client intake process
   - Service delivery workflow
   - Invoicing process
5. Set up payment method:
   - Stripe, Square, or PayPal Business
   - Connect to QuickBooks
```

### Step 5.4: Get Your First Clients

**Week 1: Warm Network (free or low effort)**
```
1. Make a list of 20-50 people who might need your service
   or know someone who does
2. Send a personal message to each:
   "Hey [Name], I just launched [subsidiary] under Denvan Holdings.
   We help [audience] with [service]. Do you know anyone who
   might benefit? I'd appreciate any introductions."
3. Post on your personal LinkedIn and social media
4. Ask for referrals from anyone who responds
```

**Week 2: Outbound (direct outreach)**
```
1. Identify 20 potential clients (LinkedIn, Google, local directories)
2. Send personalized outreach email or LinkedIn message:
   "Hi [Name], I noticed [something specific about them].
   I help [audience] with [specific problem]. Would you be
   open to a quick 15-minute call to see if we might be a fit?"
3. Follow up after 3 days if no response
4. Follow up once more after 7 days
```

**Week 3-4: Content & Visibility**
```
1. Publish 2 LinkedIn posts per week about your expertise
2. Answer questions in relevant online communities
3. Attend 1-2 local networking events or virtual meetups
4. Ask satisfied clients for testimonials
5. Set up Google Business Profile for subsidiary (if local)
```

### Step 5.5: Deliver & Invoice

```
1. Onboard client:
   - Send welcome email (template in docs/08)
   - Conduct kickoff call
   - Collect any needed information

2. Deliver service:
   - Follow your SOP
   - Communicate progress per agreed schedule
   - Document everything

3. Invoice:
   - Create invoice in QuickBooks
   - Send via email (template in docs/08)
   - Payment terms: Net 15 or Net 30
   - Follow up on unpaid invoices: Day 7, Day 14, Day 30

4. After completion:
   - Ask for feedback
   - Request testimonial
   - Ask for referrals
   - Log in CRM
```

**Phase 5 Checklist:**
- [ ] First DBA name chosen
- [ ] DBA filed with county
- [ ] Subsidiary email set up
- [ ] Service offerings defined and priced
- [ ] One-pager created
- [ ] Service agreement template ready
- [ ] QuickBooks class created
- [ ] HubSpot pipeline created
- [ ] Google Drive folder structured
- [ ] SOPs documented in Notion
- [ ] Payment processing set up
- [ ] Warm outreach sent (20-50 people)
- [ ] First client acquired
- [ ] First invoice sent
- [ ] First revenue collected

---

## PHASE 6: ONGOING OPERATIONS (Monthly Rhythm)

### Weekly Tasks (Every Monday, 1 hour)

```
[ ] Review subsidiary revenue and pipeline (QuickBooks + HubSpot)
[ ] Follow up on outstanding invoices
[ ] Follow up on open leads and proposals
[ ] Post 2-3 times on LinkedIn
[ ] Respond to all inquiries within 24 hours
[ ] Update task board in Notion
[ ] 30-min team check-in (if you have team members)
```

### Monthly Tasks (First Monday of month, 2 hours)

```
[ ] Reconcile all bank accounts in QuickBooks
[ ] Review monthly P&L per subsidiary and consolidated
[ ] Transfer management fee from subsidiary revenue to parent account
[ ] Transfer 25-30% of net profit to tax savings
[ ] Review and update CRM pipeline
[ ] Send monthly newsletter (The Holdings Report)
[ ] Review marketing performance (social media, website, leads)
[ ] Document wins, lessons, and improvements in Notion
[ ] Update financial projections if needed
```

### Quarterly Tasks (First week of quarter, half day)

```
[ ] Conduct quarterly strategic review (use meeting template in docs/08)
[ ] Review each subsidiary: keep, grow, pivot, or sunset
[ ] Assess new subsidiary opportunities
[ ] Review and adjust pricing
[ ] Make estimated tax payment
[ ] Update business insurance if needed
[ ] Review and optimize tool stack
[ ] Set goals for next quarter
[ ] Review client satisfaction across all subsidiaries
```

### Annual Tasks (December/January, full day)

```
[ ] Comprehensive financial review with CPA
[ ] File taxes (or prepare for filing)
[ ] Renew business licenses and registrations
[ ] Renew registered agent
[ ] Review and update Operating Agreement if needed
[ ] Assess S-Corp election (if not yet elected)
[ ] Annual brand refresh assessment
[ ] Strategic plan for the year ahead
[ ] Set annual revenue targets per subsidiary
[ ] Review insurance coverage
[ ] Update website and marketing materials
```

---

## PHASE 7: SCALING (Adding More Subsidiaries)

### When to Add a New Subsidiary

Add a new DBA when ALL of these are true:
```
[x] First subsidiary is generating consistent revenue (3+ months)
[x] Operations are documented (SOPs exist and are followed)
[x] You have bandwidth (not overwhelmed with current workload)
[x] You've identified a validated opportunity (demand exists)
[x] You can reach revenue within 30-60 days of launch
```

### Repeat the Playbook

For each new subsidiary, repeat Phase 5 (Steps 5.1 through 5.5). The process gets faster each time because:
- Legal infrastructure already exists (just file a new DBA)
- Financial systems are already set up (just add a new class in QuickBooks)
- Brand framework is established (just create subsidiary branding)
- SOPs can be adapted from existing subsidiaries
- Marketing channels are already active

### Scaling Timeline

| Milestone | Target | Key Action |
|-----------|--------|------------|
| Month 1-2 | Parent company fully set up | Complete Phases 1-4 |
| Month 2-3 | First subsidiary launched and earning revenue | Complete Phase 5 |
| Month 4-6 | First subsidiary stable, second DBA launched | Repeat Phase 5 |
| Month 6-12 | 2-4 subsidiaries operating, monthly rhythm established | Phase 6 running smoothly |
| Year 2 | 4-6 subsidiaries, consider first hire or contractor | Add team capacity |
| Year 2-3 | Graduate top subsidiary to separate LLC | Liability protection for top earner |
| Year 3+ | Explore acquisitions, consider outside investment | Phase 7 expansion mode |

---

## MASTER CHECKLIST (Everything in One Place)

### Phase 1: Legal Foundation
- [ ] LLC filed (Articles of Organization)
- [ ] EIN obtained
- [ ] Operating Agreement signed
- [ ] Registered Agent designated
- [ ] Business licenses obtained

### Phase 2: Financial Setup
- [ ] Business bank accounts opened (checking, tax savings, reserve)
- [ ] QuickBooks set up and bank connected
- [ ] CPA engaged
- [ ] Tax savings auto-transfer scheduled
- [ ] Business insurance active

### Phase 3: Technology & Infrastructure
- [ ] Domain purchased and connected to website
- [ ] Google Workspace active (email working)
- [ ] DNS records configured
- [ ] Phone system set up with voicemail
- [ ] 1Password with all credentials
- [ ] Calendly booking page live
- [ ] HubSpot CRM with deal pipeline
- [ ] Canva Pro with brand kit
- [ ] Notion workspace created
- [ ] DocuSign with contract templates
- [ ] 2FA enabled everywhere

### Phase 4: Branding & Marketing
- [ ] Logo finalized in all formats
- [ ] Business cards ordered
- [ ] Email signatures configured
- [ ] LinkedIn company page live
- [ ] Instagram account set up
- [ ] Google Business Profile verified
- [ ] Launch announcement published
- [ ] Newsletter platform configured

### Phase 5: First Subsidiary
- [ ] DBA name chosen and filed
- [ ] Services defined and priced
- [ ] One-pager created
- [ ] Service agreement template ready
- [ ] Systems configured (QuickBooks, HubSpot, Drive, Notion)
- [ ] Payment processing active
- [ ] First outreach sent
- [ ] First client acquired
- [ ] First invoice sent and paid

### Phase 6: Operations Running
- [ ] Weekly rhythm established
- [ ] Monthly financial review happening
- [ ] Newsletter going out monthly
- [ ] CRM actively maintained
- [ ] SOPs followed and updated

### Phase 7: Scaling
- [ ] Second subsidiary launched
- [ ] Portfolio revenue growing quarter over quarter
- [ ] Each new launch faster than the last
