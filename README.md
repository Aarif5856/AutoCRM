![AutoCRM Preview](public/preview.png)

# 🚀 AutoCRM — AI-Driven Client & Invoice Management Dashboard  

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Aarif5856/AutoCRM)
[![Live Demo](https://img.shields.io/badge/Live_Demo-https://auto--crm--khaki.vercel.app-blue?style=flat-square)](https://auto-crm-khaki.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#license)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Stripe API](https://img.shields.io/badge/Payments-Stripe-626CD9?style=flat-square&logo=stripe)](https://stripe.com)

---

### 🧠 About the Project
**AutoCRM** is a modern, AI-powered CRM and invoice management dashboard built with **React + Vite + TailwindCSS**.  
It empowers freelancers, agencies, and small businesses to manage clients, automate invoices, and streamline their daily workflow with smart insights and automation.  

**🖥 Live Demo:**  
🔗 [https://auto-crm-khaki.vercel.app](https://auto-crm-khaki.vercel.app)

---

## ✨ Key Features  

✅ **AI Assistant** — Auto-generate smart replies, proposals, and insights  
✅ **Smart Dashboard** — View revenue, clients, and invoices in real-time  
✅ **One-Click Seed Demo Data** — Add fake clients/invoices instantly (via Faker.js)  
✅ **White-Label Ready** — Rebrand with your logo, colors, and name  
✅ **Stripe Integration (Test/Demo)** — Built-in checkout flow (Pro / White-Label plans)  
✅ **Docs Portal** — Includes searchable docs, "Copy Code" buttons, and setup help  
✅ **SEO-Optimized Landing Page** — Clean design ready for marketing and Flippa listing  

---

## ⚙️ Tech Stack  

| Category | Tech |
|-----------|------|
| **Frontend** | React 18 + Vite |
| **Styling** | TailwindCSS |
| **Payments** | Stripe (Test Mode) |
| **Data Simulation** | Faker.js |
| **Persistence** | LocalStorage |
| **Deployment** | Vercel (Recommended) |

---

## 💾 Installation  

Clone and run locally:  
```bash
git clone https://github.com/Aarif5856/AutoCRM.git
cd AutoCRM
npm install
npm run dev
```

Then open 👉 **http://localhost:5174**

## 🎨 Rebranding

| Element        | How to Update                           |
| -------------- | --------------------------------------- |
| Logo & Favicon | Replace `/public/favicon.svg`           |
| App Name       | Edit in `App.jsx` and `LandingPage.jsx` |
| Colors & Theme | Modify `tailwind.config.js`             |
| Meta Tags      | Update `/index.html` for SEO            |

## 💡 Demo Mode (for Buyers)

AutoCRM includes one-click seeding with Faker.js for a realistic demo.

In your dashboard:
- Click **"Seed 50 Clients"** on `/clients`
- Click **"Seed 50 Invoices"** on `/invoices`

Demo data is saved in localStorage and persists across reloads.

## 💳 Stripe Setup (Optional)

Enable real or test checkout for Pro and Enterprise plans.

1. Create a free [Stripe account](https://stripe.com)
2. Copy your Publishable Key
3. Add it to your `.env` file:

```env
VITE_STRIPE_PUBLIC_KEY=pk_test_xxx
VITE_PRICE_ID_PRO=price_12345
VITE_PRICE_ID_ENTERPRISE=price_67890
```

If not configured, AutoCRM uses a dummy checkout flow.

## 🌍 Live Demo URLs

| Type | URL |
|------|-----|
| Landing Page | https://auto-crm-khaki.vercel.app |
| Dashboard | https://auto-crm-khaki.vercel.app/app |
| Docs & Help | https://auto-crm-khaki.vercel.app/docs |

## 🧩 Project Structure

```
AutoCRM/
├── public/
│   ├── favicon.svg
│   └── preview.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AIAssistant.jsx
│   │   └── FeatureSection.jsx
│   ├── data/
│   │   ├── clients.json
│   │   └── invoices.json
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Clients.jsx
│   │   ├── Invoices.jsx
│   │   ├── Settings.jsx
│   │   ├── Docs.jsx
│   │   ├── Checkout.jsx
│   │   └── CheckoutSuccess.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```

## 🧱 Build & Deploy

```bash
npm run build
```

Then deploy `/dist` to any static host.

### Vercel Recommended Settings:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Quick Deploy:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Aarif5856/AutoCRM)

## 📚 Docs & Help

Interactive documentation available at `/docs`:
✅ "Copy Code" buttons  
✅ Searchable sections  
✅ Step-by-step setup for branding & Stripe  

## 🔍 SEO Metadata

Inside `/index.html`:
```html
<title>AutoCRM — AI-Driven Client & Invoice Management</title>
<meta name="description" content="Smart AI-driven CRM dashboard to manage clients, automate invoices, and grow your business. Built with React + Vite + Tailwind.">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
```

## 🪪 License

This project is for personal, educational, or white-label resale use.  
If reselling, please rebrand (logo, name, theme) completely.

## 💬 Support

📧 **Email:** support@autocrm.app  
🌐 **Website:** https://auto-crm-khaki.vercel.app  
💻 **GitHub:** https://github.com/Aarif5856/AutoCRM  

## 👨‍💻 Author

**Developed by Aarif Mohamed**  
AI SaaS Creator · Web3 Developer · Freelancer (Qatar)  
🧭 **GitHub:** [@Aarif5856](https://github.com/Aarif5856)

## 🏷️ Marketplace Ready

✅ **Flippa-Ready SaaS Project**  
✅ **CodeCanyon-Optimized Template**  
✅ **Includes Documentation & Demo Data**  

## 🔑 SEO Keywords

AutoCRM, AI CRM Dashboard, Client Management App, Invoice Dashboard, White-Label SaaS, Freelancer CRM, Vite Tailwind CRM, AI Assistant CRM, Stripe Integration CRM, React Admin Panel, Business Automation Dashboard