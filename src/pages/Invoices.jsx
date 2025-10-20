import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import staticData from "../data/invoices.json";

const pill = (s) =>
  ({
    Paid: "bg-emerald-500/15 text-emerald-300",
    Open: "bg-amber-500/15 text-amber-300",
    Overdue: "bg-rose-500/15 text-rose-300",
  }[s] || "bg-slate-500/15 text-slate-300");

export default function Invoices() {
  const [rows, setRows] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    client: "",
    amount: "",
    status: "Open",
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("invoices-data"));
    setRows(saved || staticData);
  }, []);

  // Demo mode event listener
  useEffect(() => {
    const handleDemo = () => {
      seedInvoices(50);
    };
    window.addEventListener("seed-demo", handleDemo);
    return () => window.removeEventListener("seed-demo", handleDemo);
  }, []);

  const saveData = (data) => {
    localStorage.setItem("invoices-data", JSON.stringify(data));
    setRows(data);
  };

  const addInvoice = () => {
    if (!form.client || !form.amount) return alert("Please fill all fields.");
    const newInvoice = {
      id: faker.string.alphanumeric(8).toUpperCase(),
      ...form,
    };
    const updated = [...rows, newInvoice];
    saveData(updated);
    setShowForm(false);
    setForm({ client: "", amount: "", status: "Open", date: new Date().toISOString().split("T")[0] });
  };

  const seedInvoices = (count = 50) => {
    const fake = Array.from({ length: count }, () => ({
      id: faker.string.alphanumeric(8).toUpperCase(),
      client: faker.company.name(),
      amount: faker.finance.amount(300, 5000, 0),
      status: faker.helpers.arrayElement(["Paid", "Open", "Overdue"]),
      date: faker.date.recent({ days: 90 }).toISOString(),
    }));
    saveData(fake);
  };

  const clearInvoices = () => {
    localStorage.removeItem("invoices-data");
    setRows(staticData);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Invoices</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowForm(true)}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition"
          >
            + Add Invoice
          </button>
          <button
            onClick={() => seedInvoices(50)}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-indigo-600 hover:to-violet-600 transition-all duration-300"
          >
            + Seed 50 Invoices
          </button>
          <button
            onClick={clearInvoices}
            className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Add Invoice Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-900 p-6 rounded-2xl w-[400px] shadow-2xl border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Add New Invoice</h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Client Name"
                value={form.client}
                onChange={(e) => setForm({ ...form, client: e.target.value })}
                className="w-full bg-slate-800 p-2 rounded text-white placeholder-slate-400"
              />
              <input
                type="number"
                placeholder="Amount (USD)"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                className="w-full bg-slate-800 p-2 rounded text-white placeholder-slate-400"
              />
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full bg-slate-800 p-2 rounded text-white"
              >
                <option>Open</option>
                <option>Paid</option>
                <option>Overdue</option>
              </select>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-slate-800 p-2 rounded text-white"
              />
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button 
                onClick={() => setShowForm(false)} 
                className="px-3 py-1.5 bg-slate-700 rounded hover:bg-slate-600 transition"
              >
                Cancel
              </button>
              <button 
                onClick={addInvoice} 
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
              <th>ID</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((r) => (
              <tr key={r.id} className="[&>td]:p-4 hover:bg-white/5">
                <td>{r.id}</td>
                <td className="text-slate-300">{r.client}</td>
                <td>${r.amount}</td>
                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${pill(r.status)}`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="text-slate-300">
                  {new Date(r.date).toLocaleDateString()}
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