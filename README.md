# 🚀 AutoCRM — AI-Driven Client & Invoice Management Dashboard

AutoCRM is a modern, AI-powered client & invoice management platform built with React + Vite + TailwindCSS.
It helps freelancers, agencies, and small businesses manage clients, track invoices, and automate repetitive tasks — all in a clean, enterprise-grade dashboard.

## 🌟 Key Features

✅ **AI Assistant** — generate instant client replies, proposals, and insights.  
✅ **Smart Dashboard** — track revenue, clients, and invoices in real-time.  
✅ **Seed Demo Data** — one-click "Add 50 Clients/Invoices" using Faker.js.  
✅ **White-Label Ready** — rebrand with your own logo and colors.  
✅ **Stripe Integration (Test/Demo)** — checkout flow with Pro & White Label plans.  
✅ **Modern Landing Page** — fully responsive dark design with pricing & contact sections.  
✅ **Docs Portal** — interactive documentation with "Copy Code" buttons and live search.  

## 🛠️ Tech Stack

⚛️ **React 18 + Vite**  
🎨 **Tailwind CSS**  
💳 **Stripe API (Test Mode)**  
🤖 **Faker.js**  
🔒 **LocalStorage for demo persistence**  
🌐 **Vercel Deployment**  

## 💾 Installation

Clone the repo and start locally:

```bash
git clone https://github.com/Aarif5856/AutoCRM.git
cd AutoCRM
npm install
npm run dev
```

Then open in your browser:  
👉 **http://localhost:5174**

## 🎨 Rebranding

Make it your own SaaS in minutes:

| Element | How to Update |
|---------|---------------|
| Logo & Favicon | Replace `/public/favicon.svg` |
| App Name | Edit text in `App.jsx` and `LandingPage.jsx` |
| Colors & Theme | Modify `tailwind.config.js` or utility classes |
| Meta Tags | Update in `/index.html` for SEO |

## 🧩 Demo Mode (for Buyers)

AutoCRM includes a one-click seeding feature using Faker.js for realistic demos.

In your dashboard:
- Click **"Seed 50 Clients"** on `/clients`
- Click **"Seed 50 Invoices"** on `/invoices`

Demo data will persist automatically using browser localStorage.

## 💳 Stripe Setup (Optional)

AutoCRM supports test-mode Stripe checkout for upgrading to "Pro" or "White Label" plans.

1. Create a free [Stripe account](https://stripe.com)
2. Copy your Test Publishable Key
3. Add it to your `.env` file:

```env
VITE_STRIPE_PUBLIC_KEY=pk_test_xxx
VITE_PRICE_ID_PRO=price_12345
VITE_PRICE_ID_ENTERPRISE=price_67890
```

If not configured, AutoCRM will use a dummy checkout flow for demonstration purposes.

## 🌍 Live Demo URLs

| Type | URL |
|------|-----|
| Landing Page | https://autocrm.vercel.app |
| Dashboard | https://autocrm.vercel.app/app |
| Demo Data Version | https://demo.autocrm.vercel.app |
| Docs & Help | https://autocrm.vercel.app/docs |

## 📄 Project Structure

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

## 🔧 Build & Deploy

Build your optimized production version:

```bash
npm run build
```

Deploy the `/dist` folder to Vercel, Netlify, or any static hosting provider.

### ✅ Vercel Recommended Settings:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## 📘 Docs & Help

AutoCRM includes a live documentation portal at `/docs` with:

- Searchable sections
- "Copy Code" buttons
- Step-by-step setup for installation, rebranding & Stripe

## 🧠 SEO Metadata

Inside `/index.html`:

```html
<title>AutoCRM — AI-Driven Client & Invoice Management</title>
<meta name="description" content="Smart AI-driven CRM dashboard to manage clients, automate invoices, and grow your business.">
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## 🪙 License

This project is for personal, educational, or white-label resale use.  
If reselling, please rebrand completely (logo, name, and theme).

## 💬 Support

📧 **Email:** support@autocrm.app  
🌐 **Website:** https://autocrm.app  
📦 **GitHub:** https://github.com/Aarif5856/AutoCRM  

## 🏁 Author

**Developed by Aarif Mohamed**  
🔗 AI SaaS Creator · Web3 Developer · Freelancer (Qatar)  
🌎 **GitHub:** [@Aarif5856](https://github.com/Aarif5856)  

## 💼 Flippa & CodeCanyon Ready

## 🧠 SEO Keywords

AutoCRM, AI CRM Dashboard, React CRM Template, Client Management App, Invoice Dashboard, White-label SaaS, Freelancer CRM, Vite Tailwind CRM, AI Assistant CRM, Stripe Integration CRM, Business Automation Dashboard