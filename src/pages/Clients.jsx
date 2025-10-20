import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import staticData from "../data/clients.json";

const pill = (s) =>
  ({
    Active: "bg-emerald-500/15 text-emerald-300",
    Pending: "bg-amber-500/15 text-amber-300",
    Inactive: "bg-rose-500/15 text-rose-300",
  }[s] || "bg-slate-500/15 text-slate-300");

export default function Clients() {
  const [rows, setRows] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", status: "Active" });

  // Load initial data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("clients-data"));
    setRows(saved || staticData);
  }, []);

  // Demo mode event listener
  useEffect(() => {
    const handleDemo = () => {
      seedClients(50);
    };
    window.addEventListener("seed-demo", handleDemo);
    return () => window.removeEventListener("seed-demo", handleDemo);
  }, []);

  const saveData = (data) => {
    localStorage.setItem("clients-data", JSON.stringify(data));
    setRows(data);
  };

  const addClient = () => {
    if (!form.name || !form.email || !form.company) return alert("Please fill all fields.");
    const newClient = { id: faker.string.uuid(), ...form };
    const updated = [...rows, newClient];
    saveData(updated);
    setShowForm(false);
    setForm({ name: "", email: "", company: "", status: "Active" });
  };

  const seedClients = (count = 50) => {
    const fake = Array.from({ length: count }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      company: faker.company.name(),
      status: faker.helpers.arrayElement(["Active", "Pending", "Inactive"]),
    }));
    saveData(fake);
  };

  const clearClients = () => {
    localStorage.removeItem("clients-data");
    setRows(staticData);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowForm(true)}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition"
          >
            + Add Client
          </button>
          <button
            onClick={() => seedClients(50)}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-indigo-600 hover:to-violet-600 transition-all duration-300"
          >
            + Seed 50 Clients
          </button>
          <button
            onClick={clearClients}
            className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Add Client Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-900 p-6 rounded-2xl w-[400px] shadow-2xl border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Add New Client</h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-slate-800 p-2 rounded text-white placeholder-slate-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-slate-800 p-2 rounded text-white placeholder-slate-400"
              />
              <input
                type="text"
                placeholder="Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full bg-slate-800 p-2 rounded text-white placeholder-slate-400"
              />
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full bg-slate-800 p-2 rounded text-white"
              >
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button 
                onClick={() => setShowForm(false)} 
                className="px-3 py-1.5 bg-slate-700 rounded hover:bg-slate-600 transition"
              >
                Cancel
              </button>
              <button 
                onClick={addClient} 
                className="px-3 py-1.5 bg-violet-600 rounded hover:bg-violet-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-2xl overflow-hidden border border-white/5 bg-slate-900/50">
        <table className="w-full">
          <thead className="text-left text-slate-300/70">
            <tr className="[&>th]:p-4">
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((r) => (
              <tr key={r.id} className="[&>td]:p-4 hover:bg-white/5">
                <td>{r.name}</td>
                <td className="text-slate-300">{r.email}</td>
                <td className="text-slate-300">{r.company}</td>
                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${pill(r.status)}`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Demo data stored locally (use Reset to reload original sample).
      </p>
    </div>
  );
}