// src/pages/Settings.jsx
import React, { useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("dark");
  const [email, setEmail] = useState("admin@autocrm.app");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-2 text-slate-400 text-sm">
          Update your preferences and account details below.
        </p>

        <div className="mt-8 space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Notification Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl bg-slate-800/70 px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Theme */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Theme Mode
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="mt-2 w-full rounded-xl bg-slate-800/70 px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>

          <button className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

