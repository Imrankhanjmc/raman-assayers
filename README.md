# Raman Assayers — Premium Jewellery Buying & Selling Website

A production-quality website built for **Raman Assayers**, an established jewellery business located on KB Dasan Road, Alwarpet, Chennai, Tamil Nadu, India.

Built with React 19, TypeScript, Vite, and Tailwind CSS.

---

## 1. Project Overview & Brand Information

- **Business Name:** Raman Assayers
- **Category:** Gold, silver, diamond, and platinum jewellery buying and selling
- **Showroom Location:** No. 20, KB Dasan Road, opposite Girishwari Hospital, Seethammal Colony, Alwarpet, Chennai, Tamil Nadu 600018, India
- **Phone:** `+91 99403 65637`
- **WhatsApp API:** `+91 98402 15916`
- **Email:** `dinesh.surana31@gmail.com`
- **Experience:** Over 31+ Years of Stated Business Experience
- **Brand Message:** “Your Jewellery. Its True Value. Our Commitment to Trust.”
- **Brand Tagline:** “Trust, Value, and Transparency in Every Transaction.”

---

## 2. Architecture & Features

1. **Header & Navigation**:
   - Conforms to Top Bar Contract (Wordmark, single-line clean navigation links, prominent "Call Us" action).
   - Sticky header with backdrop blur and responsive mobile hamburger drawer.
2. **Hero Section**:
   - Editorial 2-column layout with high-resolution photography, clear value proposition, and two primary action paths ("Sell Your Jewellery" and "Explore Our Products").
3. **Trust & Highlights Strip**:
   - Tasteful 6-item highlight strip communicating experience, metal coverage, transparency, and Alwarpet showroom presence.
4. **About Us Section**:
   - Complete brand story, Vision, Mission, and 5 Core Values.
5. **Four Jewellery Categories (Overview & Deep Dive)**:
   - Gold, Silver, Diamond, and Platinum overview cards.
   - Interactive deep-dive panel with side-by-side **We Buy** and **We Sell** workflows, item checklists, purity details, and dynamic WhatsApp enquiry integration.
6. **Quick Valuation & Showroom Enquiry Assistant**:
   - 3-step interactive enquiry generator allowing visitors to select their metal, transaction intent, and item type, drafting an instant WhatsApp message or pre-filling the contact form.
7. **Why Choose Us Section**:
   - Honest Pricing, Careful Evaluation, Customer-Focused Service, and A Trusted Local Presence.
8. **How It Works Timeline**:
   - 4-step evaluation timeline (Visit Showroom $\to$ Jewellery Assessment $\to$ Review Offer $\to$ Complete Transaction) with valuation transparency disclaimers.
9. **Editorial Jewellery Gallery & Lightbox**:
   - Filterable masonry-style grid across Gold, Silver, Diamond, and Platinum with accessible modal lightbox and keyboard controls (Escape, Left, Right).
10. **Showroom Contact & Location Hub**:
    - Direct WhatsApp API chat (`+91 98402 15916`), direct telephone (`+91 99403 65637`), email, copyable address, and interactive Google Maps embed for in-person showroom visits.
11. **Legal Modals**:
    - Accessible dialogs for Privacy Policy and Terms & Conditions.
12. **Floating Contact Actions**:
    - Unobtrusive floating Call Now, WhatsApp, and Back to Top triggers.

---

## 3. Development Setup & Build

### Prerequisites
- Node.js 18+ or 20+
- npm or bun

### Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run TypeScript type check
npm run lint

# Production build
npm run build
```

The application runs on `http://localhost:3000`.

---

## 4. Connecting the Contact Form to a Backend

In the current development implementation, enquiries are validated and recorded with a unique tracking reference (e.g. `RA-849201`) and stored in the browser's `localStorage` for testing.

To connect this form to a production email or CRM service:

### Option A: Serverless Form Provider (e.g. Formspree or Web3Forms)
In `src/components/ContactSection.tsx`, update `handleSubmit`:
```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData)
});
```

### Option B: Node.js / Express Backend
Mount an endpoint `/api/enquiries` in `server.ts` utilizing `nodemailer` or `resend` to send notifications directly to `dinesh.surana31@gmail.com` and dispatch an SMS/WhatsApp acknowledgment to the customer.

---

## 5. Pre-Launch Owner Verification Checklist

Before deploying this website to a live custom domain, the business owner should confirm the following details:

- [ ] **Showroom Operating Hours:** Confirm exact opening and closing days/times (e.g., Monday–Saturday 10:30 AM – 8:00 PM).
- [ ] **WhatsApp Business Verification:** Verify that `+91 99403 65637` is active on WhatsApp Business.
- [ ] **Google Business Profile Place ID:** Replace the search-based Google Maps link in `src/data/businessDetails.ts` with the exact Google Business Profile CID / Place ID.
- [ ] **Showroom Photography:** As physical interior/exterior showroom photos become available, replace the illustrative images in `/src/assets/images/` with real showroom photography.
- [ ] **Legal Review:** Have local legal counsel review the Privacy Policy and Terms in `src/components/LegalModal.tsx` in accordance with Tamil Nadu and Indian gold transaction regulations.
