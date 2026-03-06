# Banking Setup Guide

## Denvan Holdings LLC - Business Banking

---

## Required Documents to Open Accounts

- [x] Certificate of Formation (from Texas Secretary of State)
- [x] EIN Confirmation Letter (IRS)
- [x] Signed Operating Agreement
- [x] Government-issued photo ID of all members/signers
- [x] Proof of business address (utility bill, lease, or virtual office agreement)

---

## Recommended Banks

| Bank | Monthly Fee | Min Balance | Best For |
|------|------------|-------------|----------|
| **Chase Business Complete** | $15/mo (waivable) | $2,000 to waive fee | Best overall, large branch network |
| **Bank of America Business** | $16/mo (waivable) | $5,000 to waive fee | Integration with Merrill Lynch |
| **Mercury** | Free | $0 | Online-only, startup friendly |
| **Relay** | Free | $0 | Multiple sub-accounts for subsidiaries |
| **Bluevine** | Free | $0 | High-yield business checking (2%+) |
| **Local Credit Union** | Free-$5/mo | Varies | Personal service, Austin community |

**Recommendation:** Chase or Mercury as primary, Relay for subsidiary sub-accounts.

---

## Accounts to Open

### 1. Primary Operating Account (Checking)
- **Purpose:** Main account for parent company operations
- **Used for:** Receiving management fees, paying shared expenses, payroll
- **Who has access:** Managing Member, authorized officers

### 2. Business Savings / Reserve Account
- **Purpose:** Emergency fund and cash reserves
- **Target balance:** 3-6 months of operating expenses
- **Rule:** Maintain minimum $[10,000] at all times

### 3. Tax Reserve Account
- **Purpose:** Set aside money for quarterly estimated tax payments
- **Rule:** Transfer 25-30% of net profit monthly into this account
- **Withdrawals:** Only for tax payments (quarterly estimated + annual)

### 4. Subsidiary Sub-Accounts (per DBA)
- **Purpose:** Track revenue and expenses per subsidiary
- **Setup:** One sub-account per active DBA subsidiary
- **Naming:** "DH - [Subsidiary Name]"
- **Flow:** Subsidiary revenue deposits here, management fees transfer to primary

### 5. Payroll Account (when hiring employees)
- **Purpose:** Dedicated account for payroll processing
- **Used with:** Gusto, ADP, or QuickBooks Payroll
- **Rule:** Only payroll transactions in this account

---

## Money Flow Structure

```
Customer Payment
       |
       v
[Subsidiary Sub-Account]
       |
       |--- Management Fee (10-15%) ---> [Primary Operating Account]
       |--- Operating Expenses ---------> Vendor payments
       |--- Profit Distribution --------> [Primary Operating Account]
       |
       v
[Primary Operating Account]
       |
       |--- Shared Services Costs ------> Vendors, contractors
       |--- Tax Reserve (25-30%) -------> [Tax Reserve Account]
       |--- Operating Reserve ----------> [Business Savings]
       |--- Owner Distribution ---------> Member personal account
```

---

## Payment Processing Setup

### Accepting Payments
| Method | Provider | Fees | Best For |
|--------|----------|------|----------|
| Credit/Debit Cards | Stripe | 2.9% + $0.30 | Online payments |
| Credit/Debit Cards | Square | 2.6% + $0.10 | In-person payments |
| ACH / Bank Transfer | Stripe | 0.8% (cap $5) | Large invoices |
| Invoicing | QuickBooks | Included | B2B invoicing |
| Checks | Bank | Free | Traditional clients |

### Sending Payments
- **Vendors:** ACH transfer or business check
- **Contractors:** ACH via Gusto or direct transfer
- **Employees:** Payroll service (Gusto recommended)
- **Taxes:** EFTPS (Electronic Federal Tax Payment System)

---

## Financial Controls

### Access Levels
| Role | View | Deposit | Transfer | Withdraw | Add Users |
|------|------|---------|----------|----------|-----------|
| Managing Member | Yes | Yes | Yes | Yes | Yes |
| CFO / Bookkeeper | Yes | Yes | Yes (< $5K) | No | No |
| Subsidiary Manager | Sub-account only | Yes | No | No | No |

### Rules
1. **Dual authorization** for transfers over $[10,000]
2. **No personal expenses** through business accounts -- ever
3. **Monthly reconciliation** of all accounts (by 10th of following month)
4. **Separate tracking** for each subsidiary in accounting software
5. **Receipt documentation** for every expense over $25
6. **Weekly review** of all account activity by Managing Member

### Fraud Prevention
- Enable two-factor authentication on all banking accounts
- Set up transaction alerts for amounts over $500
- Review authorized users quarterly
- Never share login credentials
- Use a dedicated device for banking (or at minimum, dedicated browser profile)

---

## Accounting Software Integration

### QuickBooks Online Setup
1. Create Company: "Denvan Holdings LLC"
2. Connect all bank accounts for auto-import
3. Set up **Classes** for each subsidiary (DBA)
4. Set up **Chart of Accounts** (see `04-financial-operations/chart-of-accounts.md`)
5. Enable **Projects** for tracking subsidiary-specific work
6. Connect payment processor (Stripe/Square)
7. Set up recurring invoices for management fees
8. Configure monthly financial reports (P&L by Class, Balance Sheet)

### Monthly Reconciliation Process
1. Log into each bank account
2. Download statements
3. Match transactions in QuickBooks
4. Categorize any unmatched transactions
5. Verify ending balances match
6. Review P&L per subsidiary
7. Generate consolidated financial report
8. File monthly report in Google Drive
