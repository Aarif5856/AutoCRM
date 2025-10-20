import React, { useState } from "react";

export default function Profile() {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@autocrm.app",
    company: "AutoCRM Inc.",
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-slate-100">Profile Settings</h2>

      <div className="space-y-4">
        <input
          className="w-full px-3 py-2 bg-slate-800 text-slate-100 rounded-lg"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full Name"
        />
        <input
          className="w-full px-3 py-2 bg-slate-800 text-slate-100 rounded-lg"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email Address"
        />
        <input
          className="w-full px-3 py-2 bg-slate-800 text-slate-100 rounded-lg"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          placeholder="Company Name"
        />

        <button className="bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90">
          Save Changes
        </button>
      </div>
    </div>
  );
}

