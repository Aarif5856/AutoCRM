import React, { useEffect, useState } from "react";
import LandingHeader from "../components/LandingHeader";

export default function LandingPage() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pricing = document.getElementById("pricing");
      if (pricing) {
        const rect = pricing.getBoundingClientRect();
        setShowButton(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Glow effect when navigated from "Upgrade" button
  useEffect(() => {
    if (window.location.hash === "#pricing") {
      const el = document.getElementById("pricing");
      if (el) {
        el.classList.add("animate-pulse", "shadow-[0_0_40px_rgba(139,92,246,0.4)]");
        setTimeout(() => {
          el.classList.remove("animate-pulse", "shadow-[0_0_40px_rgba(139,92,246,0.4)]");
        }, 2000);
      }
    }
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      {/* Header */}
      <LandingHeader />
      
      {/* Hero Section */}
      <section
        className="pt-24 pb-32 text-center bg-gradient-to-b from-slate-900 to-slate-950 hover:from-slate-800 hover:to-slate-900 transition-all duration-700 ease-in-out"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500 hover:from-violet-400 hover:to-indigo-500 transition-all duration-500">
          Manage Clients & Automate Your Workflow
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 hover:text-slate-200 transition-colors duration-500">
          AutoCRM helps teams streamline customer management with AI-driven tools,
          advanced analytics, and real-time insights.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/app"
            className="px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg shadow-lg hover:shadow-violet-500/60 hover:scale-105 transition-all duration-300 font-medium"
          >
            🚀 Launch Demo
          </a>
          <a
            href="#features"
            className="px-6 py-3 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-slate-900 transition-all duration-700 hover:bg-slate-800/80"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white hover:text-violet-400 transition-all">
          Everything You Need to Succeed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          {[
            {
              title: "AI Assistant",
              desc: "Generate instant replies, proposals, and insights using built-in AI.",
            },
            {
              title: "Auto Invoices",
              desc: "Create and download client invoices automatically as PDF.",
            },
            {
              title: "Client Hub",
              desc: "Manage clients, projects, and reminders in one place.",
            },
            {
              title: "Analytics",
              desc: "Track income, tasks, and performance at a glance.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-violet-500 hover:scale-[1.05] hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-500 ease-in-out"
            >
              <h3 className="text-lg font-semibold mb-2 text-indigo-400 hover:text-violet-300 transition-all">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 px-6 bg-slate-950 text-white"
      >
        <h2 className="text-center text-3xl font-bold mb-12">Choose Your Perfect Plan</h2>
        <p className="text-slate-400 mb-12 hover:text-slate-200 transition-all">
          Start free and scale as you grow. No hidden fees, cancel anytime.
        </p>

        <div className="flex flex-wrap justify-center gap-8 px-6">
          {[
            {
              name: "Starter",
              price: "Free",
              features: ["1 User", "Basic Dashboard", "Manual Invoices"],
              color: "bg-slate-800 border-slate-700",
            },
            {
              name: "Pro",
              price: "$39",
              sub: "/month",
              features: ["Unlimited Clients", "AI Assistant", "Auto Invoices", "Analytics"],
              color: "bg-gradient-to-b from-indigo-600 to-violet-600 border-violet-500",
            },
            {
              name: "White Label",
              price: "$99",
              sub: "/month",
              features: ["Custom Branding", "Reseller License", "Priority Support"],
              color: "bg-slate-800 border-slate-700",
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`w-72 p-6 rounded-2xl border ${plan.color} shadow-lg hover:scale-105 hover:shadow-violet-500/30 hover:border-violet-400 transition-all duration-500`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-extrabold mb-4 text-indigo-300 group-hover:text-white transition-all">
                {plan.price}
                <span className="text-base font-normal">{plan.sub}</span>
              </div>
              <ul className="text-slate-300 mb-6 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i}>✅ {f}</li>
                ))}
              </ul>
              <button 
                onClick={() => {
                  if (plan.price === "Free") {
                    window.location.href = "/app#overview";
                  } else if (plan.name === "Pro") {
                    window.location.href = "/checkout?plan=pro";
                  } else if (plan.name === "White Label") {
                    window.location.href = "/checkout?plan=enterprise";
                  }
                }}
                className="w-full py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
              >
                {plan.price === "Free" ? "Get Started" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer
        id="contact"
        className="py-16 bg-slate-900 border-t border-slate-800 hover:bg-slate-800/90 transition-all duration-700 ease-in-out"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          <div className="hover:translate-y-[-4px] transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">Contact Us</h3>
            <p className="text-slate-400 mb-2">Have questions or want a demo? Reach out anytime.</p>
            <p className="text-slate-400 mb-1">📧 support@autocrm.app</p>
            <p className="text-slate-400 mb-6">📞 +1 (800) 123-4567</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (mock)");
            }}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-500"
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Send us a message</h4>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full mb-3 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:border-violet-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full mb-3 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:border-violet-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              required
              className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:border-violet-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-medium hover:opacity-90 hover:shadow-lg hover:shadow-violet-500/50 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center text-slate-500 mt-12 text-sm hover:text-slate-300 transition-colors">
          © {new Date().getFullYear()} AutoCRM — All rights reserved.
        </div>
      </footer>

      {/* Floating Back to Dashboard Button */}
      {showButton && (
        <button
          onClick={() => {
            document.body.classList.add("fade-out");
            setTimeout(() => (window.location.href = "/app"), 300);
          }}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-violet-500/50 transition-all duration-300 z-50"
        >
          ← Back to Dashboard
        </button>
      )}
    </div>
  );
}