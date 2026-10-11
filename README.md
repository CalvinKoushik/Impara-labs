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

## ☁️ Netlify Deployment Guide

### Option A: Deploy via Netlify Dashboard (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Netlify](https://app.netlify.com).
3. Click **Add new site** → **Import an existing project**.
4. Select your repository.
5. Netlify will auto-detect settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**.

### Option B: Deploy via Netlify CLI
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy directly from build folder
netlify deploy --prod --dir=dist
```

---

## 📋 Netlify Forms Verification

1. When Netlify runs `npm run build`, its static analysis bot reads `dist/index.html` and detects the pre-rendered form:
   ```html
   <form name="enrolment-enquiry" data-netlify="true" netlify-honeypot="bot-field" hidden>
     ...
   </form>
   ```
2. In the Netlify admin dashboard, navigate to **Forms** → **enrolment-enquiry**.
3. You can set up instant email or Slack alerts under **Site configuration** → **Forms** → **Form notifications** to receive an alert every time a student registers interest.

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
