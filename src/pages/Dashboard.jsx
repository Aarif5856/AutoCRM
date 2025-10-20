// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { revenueData, invoiceClientData } from "../data/chartData";

export default function Dashboard() {
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);


  // Load plan data dynamically
  useEffect(() => {
    async function loadPlans() {
      try {
        const response = await fetch("/src/data/plans.json");
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error("Error loading plans:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPlans();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 text-slate-100">
      {/* Page Title */}
      <section id="overview" className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
      </section>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 mb-6">
        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
          <p className="text-slate-400 text-sm">Monthly Revenue</p>
          <h2 className="text-3xl font-bold mt-2">$8,420</h2>
          <p className="text-green-400 text-sm">+12.4%</p>
        </div>

        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
          <p className="text-slate-400 text-sm">Active Clients</p>
          <h2 className="text-3xl font-bold mt-2">42</h2>
          <p className="text-green-400 text-sm">+5 this week</p>
        </div>

        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
          <p className="text-slate-400 text-sm">Open Invoices</p>
          <h2 className="text-3xl font-bold mt-2">7</h2>
          <p className="text-red-400 text-sm">-2 since last week</p>
        </div>

        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
          <p className="text-slate-400 text-sm">Tasks Due Today</p>
          <h2 className="text-3xl font-bold mt-2">12</h2>
          <p className="text-green-400 text-sm">+3 new tasks</p>
        </div>
      </div>

      {/* Two-Chart Analytics Section */}
      <div className="grid lg:grid-cols-2 gap-6 px-8 pb-10">
        {/* Revenue Chart */}
        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-200">
            Revenue (Last 6 months)
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "10px",
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 4, fill: "#818cf8" }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-500 mt-2">Demo data</p>
        </div>

        {/* Invoices & Clients Chart */}
        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-200">
            Invoices vs Clients
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={invoiceClientData}>
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "10px",
                }}
              />
              <Legend />
              <Bar dataKey="invoices" fill="#6366f1" radius={[5, 5, 0, 0]} />
              <Bar dataKey="clients" fill="#22c55e" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-500 mt-2">Demo data</p>
        </div>
      </div>

      {/* === Upgrade Modal === */}
      <AnimatePresence>
        {showUpgrade && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-slate-900/95 border border-white/10 rounded-2xl shadow-2xl shadow-black/40 max-w-2xl w-full p-6 relative"
            >
              <h2 className="text-xl font-semibold mb-2 text-white text-center">
                Choose Your Plan 🚀
              </h2>
              <p className="text-slate-400 text-sm mb-8 text-center">
                Upgrade your AutoCRM workspace with advanced features and automation.
              </p>

              {loading ? (
                <p className="text-center text-slate-400">Loading plans...</p>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {plans.map((plan, index) => (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 p-5 hover:border-indigo-500/40 transition-all ${
                        plan.highlight
                          ? "shadow-lg shadow-indigo-500/20"
                          : "shadow-inner"
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-indigo-400 mb-1">
                        {plan.title}
                      </h3>
                      <p className="text-3xl font-bold text-indigo-400 mb-3">
                        ${plan.price}
                        <span className="text-base text-slate-400">
                          /{plan.interval}
                        </span>
                      </p>
                      <ul className="text-slate-400 text-sm space-y-2 mb-5">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-indigo-400">•</span> {feat}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() =>
                          alert(`💳 Checkout for ${plan.title} coming soon!`)
                        }
                        className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:opacity-90"
                      >
                        Select {plan.title}
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}

              <button
                onClick={() => setShowUpgrade(false)}
                className="mt-6 w-full rounded-xl bg-slate-800/70 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}