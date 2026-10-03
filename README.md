# Wenelove Del Castillo — Executive Portfolio Website

A modern, responsive executive portfolio web application for **Wenelove Del Castillo** — Virtual Assistant, Customer Support Specialist, Technical Support Professional, and Administrative Support Specialist with 10+ years of enterprise experience.

Built with **React + TypeScript + Vite + Vanilla CSS**, adopting the reference design system from `C:\Portfolio\Lauren\my-app` (Warm Luxury Canvas, Deep Forest Greens, Brushed Brass & Gold, and Playfair Display serif typography, with **zero AI generated photos**).

---

## 🌟 Architecture & Design System

1. **Warm Luxury Aesthetic (No AI Generated Photos)**:
   - Warm canvas background (`#faf7f2`) with a subtle radial dot pattern.
   - Deep forest green (`#0c2317`, `#133826`, `#225a3f`) paired with brushed warm gold accents (`#c59b53`, `#a37930`).
   - Elegant typography: **Playfair Display** (headings) + **Plus Jakarta Sans** (body & UI).
   - In place of AI generated images, the Hero features an **Executive Credential Showcase Card** with a distinguished `WD` monogram, verified corporate seals, live Philippine Standard Time (PHT, GMT+8) clock, and floating track record badges.

2. **Core Sections**:
   - **Navbar**: Clean blur header with brand badge `WD`, section navigation links, live Manila time clock, and "Consultation" button.
   - **Hero Section**:
     - Status badge: *"Available for Remote Roles Worldwide • 10+ Years Enterprise Support"*
     - Grand serif headline, sub-headline, and executive summary.
     - CTAs: *"Schedule Consultation"*, *"Save CV"* (`window.print()`), and *"Explore Capabilities"*.
     - Executive Credential Card on the right (10+ years track record, 50+ staff supervised, CreditLens & LoanIQ tier-2 support).
     - Bottom 5-metric banner in serif numerals.
   - **Services & Operational Specializations (`ServicesSection.tsx`)**:
     - Category filter pills (*All Capabilities*, *Executive Virtual Assistance*, *L2 Banking & Systems Support*, *Customer Support & Help Desk*, *Leadership & QA Operations*).
     - 4 detailed service cards with tags, tools applied, deliverables checklist with checkmarks, and *"Inquire on this Specialization"* action buttons.
   - **Support Capacity & Cost Estimator (`WorkloadCalculator.tsx`)**:
     - Interactive sliders for team headcount, daily hours, working days, and rate comparison.
     - Dynamic real-time calculation of total monthly hours, in-house vs. remote costs, net monthly savings, and annual bottom-line efficiency.
     - Pre-fills the contact modal with customized delegation parameters.
   - **Career Milestones & Track Record (`ExperienceTimeline.tsx`)**:
     - Role selector buttons on the left with active green indicator line.
     - Detailed active role view on the right:
       - **Indra Philippines (ADB Support)** — L2 Junior Systems Engineer
       - **ABS-CBN Corporation** — IT Service Desk Supervisor (Supervised 50+ staff)
       - **ABS-CBN Corporation** — IT Team Lead – Phone Support
       - **ABS-CBN Corporation** — Training and Quality Lead
   - **Software & Platform Fluency (`TechMatrix.tsx`)**:
     - Category filter tabs and cards for Ticketing (ServiceNow, Jira), Microsoft 365, Google Workspace, Banking Applications (CreditLens, LoanIQ), and Remote Administration (Active Directory, RDP, TeamViewer).
   - **Zero-Downtime Infrastructure & Remote Readiness (`ReliabilitySection.tsx`)**:
     - Redundant fiber internet, UPS power backup, dual-monitor setup, security hygiene, and 4-continent timezone overlap.
   - **Hiring & Collaboration FAQs (`FaqSection.tsx`)**:
     - Expandable accordion answering common recruiter and client queries.
   - **Footer (`Footer.tsx`)**:
     - Pre-footer CTA banner, contact channels, quick navigation, location, and back-to-top button.
   - **Contact & Hiring Modal (`ContactModal.tsx`)**:
     - Direct copy for email and phone, WhatsApp link, and prefilled message handler.

---

## 🚀 Getting Started

### Run Locally (Dev Server)
```bash
npm run dev
```
Open [http://localhost:5174/](http://localhost:5174/) (or [http://localhost:5173/](http://localhost:5173/)).

### Production Build
```bash
npm run build
```
Generates clean, optimized static production bundles in the `dist/` directory.

---

## 📂 Source Code Layout

```
src/
├── components/
│   ├── Navbar.tsx               # Header with brand badge, links, time ticker & consultation CTA
│   ├── Hero.tsx                 # Hero section with credential card & 5 metrics
│   ├── ServicesSection.tsx      # 4 core service pillars with deliverables & inquiry trigger
│   ├── WorkloadCalculator.tsx   # Interactive support capacity and cost estimator
│   ├── ExperienceTimeline.tsx   # Career milestones with tab selector and achievements
│   ├── TechMatrix.tsx           # Categorized software tools and platform matrix
│   ├── ReliabilitySection.tsx   # Zero-downtime remote infrastructure specs
│   ├── FaqSection.tsx           # Expandable accordion for recruiter questions
│   ├── Footer.tsx               # Deep forest green footer with pre-footer CTA
│   ├── ContactModal.tsx         # Direct contact dialog with prefilled message support
│   └── Icons.tsx                # Zero-dependency SVG icon system
├── data/
│   └── portfolioData.ts         # Complete structured portfolio dataset
├── utils/
│   └── scroll.ts                # Smooth scrolling helper
├── App.tsx                      # Root application layout
├── App.css                      # Micro-animations and print rules
├── index.css                    # Warm luxury design system matching Lauren reference
└── main.tsx
```
