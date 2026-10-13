# Impara Creative Labs — Web Platform
**Powered by TechKnots**  
*Official Tagline: Learn. Create. Build. Beyond.*  
*Core Differentiator: Learn technology. Build real projects. Create beyond boundaries.*

---

## 🌟 Overview

This is the production-ready web application for **Impara Creative Labs**, an industry-backed technology education brand powered by **TechKnots**. The platform is engineered to showcase 3-month industry-supported career programmes, collect validated student enrolment interest, and deliver a clean, fast, and mobile-optimized user experience.

- **Official Website:** [https://www.imparacreativelabs.com](https://www.imparacreativelabs.com)
- **Primary Contact:** +91 91767 47268
- **Email:** imparacreativelabs@gmail.com
- **Knowledge Partner:** TechKnots (*"One knot at a time"*)
- **Founder & CEO:** Nixon E (Research Engineer, Innovator, IEEE Madras Section Member)

---

## 🚀 Flagship Programmes (3 Months / 12 Weeks)

1. **IoT & Embedded Systems** (`/courses/iot-embedded-systems`)
   - *Foundations:* Electronics, microcontrollers, Arduino (Uno/Nano/Mega), ESP8266 & ESP32.
   - *Connected Systems:* MQTT, HTTP, Webhooks, CoAP, Blynk IoT, AWS IoT Core, ThingSpeak, IFTTT.
   - *Edge Vision & Capstone:* ESP32-CAM, image processing concepts, sensor integration, live working demonstration.
2. **Full Stack Development with AI** (`/courses/full-stack-ai`)
   - *Modern Frontend:* React, TypeScript, responsive Tailwind CSS, Git workflows.
   - *Backend Engineering:* Node.js, Express REST APIs, PostgreSQL & MongoDB, authentication.
   - *AI Infusion & Capstone:* OpenAI & Gemini SDKs, streaming LLM outputs, function calling, full-stack deployment.
3. **Mastering Generative AI** (`/courses/generative-ai`)
   - *LLM Foundations:* Prompt engineering patterns (few-shot, chain-of-thought), structured JSON schemas.
   - *Retrieval & Tool Calling:* Vector databases (ChromaDB, Pinecone), RAG pipelines, API orchestration.
   - *Autonomous Agents & Capstone:* Planner-executor agents, web search tools, prototype deployment.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Tooling:** Vite
- **Styling:** Tailwind CSS with custom brand design tokens (`#0866E8`, `#159CF5`, `#091B78`, `#F0F7FF`)
- **Icons:** Lucide React
- **Routing:** React Router v7 (`react-router-dom`)
- **Forms & Serverless Backend:** Netlify Forms (with spam honeypot and client validation)
- **Deployment Platform:** Netlify (configured via `netlify.toml` and `public/_redirects`)

---

## 📁 Project Architecture

```
impara-creative-labs/
├── dist/                          # Production build output
├── public/
│   ├── assets/
│   │   ├── impara-logo.jpg        # Official Impara Creative Labs brand logo
│   │   ├── program-poster.jpg     # 3-Month Industry Supported Program poster
│   │   └── impara-program-brochure.pdf # 9-page official programme brochure
│   ├── _redirects                 # Netlify SPA routing rules (/* /index.html 200)
│   ├── favicon.svg                # Vector SVG brand mark favicon
│   ├── robots.txt                 # Search engine crawler permissions
│   └── sitemap.xml                # SEO Sitemap for all routes
├── src/
│   ├── config/
│   │   └── site.ts                # Centralized site metadata, contacts, stats, & founder profile
│   ├── data/
│   │   └── courses.ts             # Course descriptions, monthly syllabi, tools, and projects
│   ├── components/
│   │   ├── BrandLogos.tsx         # Vector & bitmap logos for Impara and TechKnots
│   │   ├── Header.tsx             # Responsive header with mobile drawer & enquiry CTA
│   │   ├── Footer.tsx             # Semantic footer with partner notice & legal links
│   │   ├── CourseCard.tsx         # Reusable card with prefilled enrolment links
│   │   ├── EnquiryForm.tsx        # Validated Netlify Form with feedback states
│   │   ├── WhatsAppButton.tsx     # Context-aware WhatsApp button & floating action button
│   │   ├── TrustStats.tsx         # Verified organizational statistics
│   │   ├── LearningJourney.tsx    # 5-step Discover -> Showcase methodology timeline
│   │   ├── TechKnotsPartner.tsx   # Knowledge partner R&D showcase
│   │   ├── FounderSection.tsx     # Leadership credentials & academic background
│   │   ├── AudienceSection.tsx    # Target learner cards
│   │   ├── CareerSupportSection.tsx # Honest career guidance & portfolio mentoring
│   │   ├── FAQAccordion.tsx       # Accessible interactive FAQ accordion
│   │   └── ScrollToTop.tsx        # Scroll restoration & document title updater
│   ├── pages/
│   │   ├── Home.tsx               # High-converting homepage
│   │   ├── Courses.tsx            # Programme directory & comparison matrix
│   │   ├── CourseDetail.tsx       # Dedicated monthly syllabus breakdown
│   │   ├── About.tsx              # Mission, vision, and technology domains
│   │   ├── Enroll.tsx             # Student interest & enrolment form
│   │   ├── Contact.tsx            # Telephone, email, and WhatsApp contact hubs
│   │   ├── PrivacyPolicy.tsx      # Transparent data collection policy
│   │   ├── Terms.tsx              # Educational terms and disclaimers
│   │   └── NotFound.tsx           # 404 error page
│   ├── App.tsx                    # Route definitions and layout shell
│   ├── index.css                  # Tailwind directives and typography imports
│   └── main.tsx                   # React root entrypoint
├── index.html                     # Pre-rendered Netlify form crawler & SEO JSON-LD
├── netlify.toml                   # Netlify build command, headers, & redirect config
├── tailwind.config.js             # Brand color palette & typography tokens
└── package.json
```

---

## 💻 Local Development

### 1. Prerequisites
- Node.js (v18+)
- npm (v9+)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
This compiles TypeScript and outputs optimized assets into the `dist/` folder.

### 5. Preview Production Build
```bash
npm run preview
```
Runs a local web server serving `dist/` at `http://localhost:4173`.

---

---

## ☁️ Vercel Deployment Guide

### Step 1: Deploy to Vercel
1. Push your repository to GitHub, GitLab, or Bitbucket:
   ```bash
   git add .
   git commit -m "Configure Vercel deployment with Google Sheets and Email backend"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New"** → **"Project"**.
3. Import your repository (`impara-creative-labs`).
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Add Environment Variable:
   - **Name:** `GOOGLE_SHEET_WEBHOOK_URL`
   - **Value:** `https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec` *(see instructions below)*
8. Click **Deploy**.

---

## 📊 Google Sheets Storage & Direct Email Notification Setup

All enquiries are stored in a real Google Sheet and simultaneously emailed to `imparacreativelabs@gmail.com` without any third-party subscription costs.

### 5-Minute Setup:
1. **Create a Google Sheet:**
   - Go to [Google Sheets](https://sheets.new) and create a new sheet (e.g. name it *"Impara Creative Labs Enquiries"*).
2. **Open Apps Script:**
   - In the top menu, click **Extensions** → **Apps Script**.
3. **Paste Script:**
   - Delete any default code in `Code.gs`.
   - Copy and paste the entire script from [`google-apps-script/Code.gs`](./google-apps-script/Code.gs) into the editor.
   - Verify `NOTIFICATION_EMAIL: "imparacreativelabs@gmail.com"` (or customize as desired).
4. **Deploy as Web App:**
   - Click the blue **Deploy** button (top right) → **New deployment**.
   - Click the gear icon beside "Select type" and choose **Web app**.
   - Fill in:
     - **Description:** `Impara Enquiry Webhook`
     - **Execute as:** `Me` (your Google Account)
     - **Who has access:** `Anyone` *(crucial so Vercel can post submissions)*
   - Click **Deploy**.
   - Grant permissions when prompted.
5. **Copy Web App URL:**
   - Copy the Web App URL (format: `https://script.google.com/macros/s/.../exec`).
6. **Set Environment Variable in Vercel:**
   - In your Vercel Project Dashboard → **Settings** → **Environment Variables**:
     - Key: `GOOGLE_SHEET_WEBHOOK_URL`
     - Value: `https://script.google.com/macros/s/.../exec`
   - (For local testing, also paste it into `.env`).

---

## 🌐 Custom Domain Setup

To point `www.imparacreativelabs.com` to Netlify:
1. In Netlify Dashboard, navigate to **Site configuration** → **Domain management**.
2. Click **Add custom domain** and enter `www.imparacreativelabs.com`.
3. In your DNS provider (e.g. GoDaddy, Cloudflare, Namecheap):
   - Add a `CNAME` record for `www` pointing to `<your-site-name>.netlify.app`.
   - Add an `A` record for the apex domain pointing to Netlify's load balancer IP `75.2.60.5`.
4. Netlify will provision a free Let's Encrypt SSL/TLS certificate automatically within minutes.

---

## 🛡️ Brand Compliance & Integrity

- **Original Logos:** Official Impara Creative Labs and TechKnots logos are preserved and served from `public/assets/`.
- **Honest Claims:** Mentorship, academic partnerships (50+ colleges), and AICTE-approved internship alignments are attributed responsibly to TechKnots. No inflated salary guarantees or artificial placement claims are made.
- **Direct WhatsApp:** Configured with number `+91 91767 47268` and default greeting `share me more details to enroll`.
