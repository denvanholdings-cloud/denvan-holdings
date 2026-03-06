# Denvan Holdings LLC - Email & IT System Setup

## Professional Email Structure

### Parent Company Emails

| Email Address | Purpose |
|--------------|---------|
| info@denvanholdings.com | General inquiries |
| hello@denvanholdings.com | Friendly alternative for marketing |
| admin@denvanholdings.com | Administrative matters |
| careers@denvanholdings.com | Job inquiries and recruitment |
| press@denvanholdings.com | Media and press inquiries |
| investors@denvanholdings.com | Investor relations |
| partnerships@denvanholdings.com | Partnership inquiries |
| support@denvanholdings.com | Client/subsidiary support |

### Personal/Role-Based Emails
```
firstname@denvanholdings.com          (primary individual)
firstname.lastname@denvanholdings.com (if needed for common names)
ceo@denvanholdings.com                (executive alias)
cfo@denvanholdings.com                (executive alias)
coo@denvanholdings.com                (executive alias)
```

### Subsidiary Email Structure
Each subsidiary gets a subdomain or separate domain:

**Option A: Subdomain (recommended for cohesion)**
```
info@[subsidiary].denvanholdings.com
firstname@[subsidiary].denvanholdings.com
```

**Option B: Separate Domain (for independent branding)**
```
info@[subsidiaryname].com
firstname@[subsidiaryname].com
```

---

## Platform Recommendation: Google Workspace vs Microsoft 365

### Recommendation: Google Workspace Business Standard ($14/user/month)

| Feature | Google Workspace | Microsoft 365 |
|---------|-----------------|---------------|
| Email | Gmail (excellent) | Outlook (excellent) |
| Calendar | Google Calendar | Outlook Calendar |
| Documents | Google Docs/Sheets | Word/Excel (desktop apps) |
| Storage | 2TB/user | 1TB/user |
| Video Calls | Google Meet | Microsoft Teams |
| Ease of Setup | Very Easy | Moderate |
| Multi-Domain | Easy | Moderate |
| Cost (Standard) | $14/user/month | $12.50/user/month |
| Best For | Small-medium, cloud-first | Larger orgs, desktop apps |

### Why Google Workspace
- Easier multi-domain management (critical for subsidiaries)
- Better collaboration tools for distributed teams
- Simpler admin console for non-technical users
- Lower learning curve
- Better integration with modern SaaS tools

### Google Workspace Setup Steps

1. **Purchase Domain:** denvanholdings.com (via Google Domains, Namecheap, or Cloudflare)
2. **Sign Up:** workspace.google.com - Business Standard plan
3. **Verify Domain:** Add TXT record to DNS
4. **Configure MX Records:** Point email to Google servers
5. **Set Up Security:**
   - Enable 2-Factor Authentication (mandatory for all users)
   - Set password policies (12+ characters)
   - Configure SPF, DKIM, and DMARC records
6. **Create Users:** Add email accounts per structure above
7. **Create Groups:** Set up distribution groups (all@, team@, etc.)
8. **Add Subsidiary Domains:** Add as alias domains or separate domains

### DNS Records Required

```
# MX Records (for email delivery)
@ MX 1  ASPMX.L.GOOGLE.COM
@ MX 5  ALT1.ASPMX.L.GOOGLE.COM
@ MX 5  ALT2.ASPMX.L.GOOGLE.COM
@ MX 10 ALT3.ASPMX.L.GOOGLE.COM
@ MX 10 ALT4.ASPMX.L.GOOGLE.COM

# SPF Record (prevents email spoofing)
@ TXT "v=spf1 include:_spf.google.com ~all"

# DKIM (email authentication - generated in Google Admin)
google._domainkey TXT "v=DKIM1; k=rsa; p=[generated-key]"

# DMARC (email policy)
_dmarc TXT "v=DMARC1; p=quarantine; rua=mailto:admin@denvanholdings.com"
```

---

## IT System Recommendations

### Essential Tools Stack

| Category | Tool | Cost | Purpose |
|----------|------|------|---------|
| **Email/Productivity** | Google Workspace | $14/user/mo | Email, docs, calendar |
| **Website** | Vercel or Netlify | Free-$20/mo | Website hosting |
| **Domain** | Cloudflare | ~$10/year | Domain + DNS + CDN |
| **Accounting** | QuickBooks Online | $30/mo | Multi-entity bookkeeping |
| **CRM** | HubSpot Free | Free | Contact & deal management |
| **Project Management** | Notion or Asana | Free-$10/mo | Task tracking, SOPs, wiki |
| **Communication** | Google Chat or Slack | Free-$7/mo | Team messaging |
| **Password Manager** | 1Password Business | $8/user/mo | Secure credential sharing |
| **File Storage** | Google Drive (incl.) | Included | Cloud file storage |
| **Design** | Canva Pro | $13/mo | Marketing materials |
| **Legal** | DocuSign or PandaDoc | $10/mo | Contracts and e-signatures |
| **Scheduling** | Calendly | Free-$10/mo | Appointment booking |

### Security Essentials

1. **2FA on all accounts** - Use Google Authenticator or hardware keys
2. **Password manager** - Unique passwords for every service
3. **Backup strategy** - Automated Google Workspace backup (Backupify or similar)
4. **VPN** - For remote work on public networks
5. **Device management** - Google Endpoint Management (included in Workspace)
6. **Regular audits** - Quarterly review of user access and permissions

---

## Adding Subsidiary Email & IT

### Checklist for Each New Subsidiary

1. [ ] Decide email structure (subdomain vs. separate domain)
2. [ ] Purchase domain if using separate domain
3. [ ] Add domain/subdomain to Google Workspace
4. [ ] Configure DNS records (MX, SPF, DKIM, DMARC)
5. [ ] Create email accounts for subsidiary team
6. [ ] Set up shared drives for subsidiary documents
7. [ ] Add subsidiary to project management workspace
8. [ ] Create subsidiary-specific channels in team chat
9. [ ] Set up subsidiary in accounting software
10. [ ] Create CRM pipeline for subsidiary clients
11. [ ] Issue password manager invites to subsidiary team
12. [ ] Schedule onboarding for subsidiary team on tools
