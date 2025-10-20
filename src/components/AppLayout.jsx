import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import UserMenu from "./UserMenu";
import AiAssistant from "./AiAssistant";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100 transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-5">
        <div>
          <h1 className="text-xl font-semibold text-indigo-400 mb-6">
            AutoCRM
          </h1>
          <nav className="flex flex-col space-y-2">
            <a
              href="/app"
              className="hover:bg-slate-800 px-3 py-2 rounded-lg font-medium text-slate-300 hover:text-white transition-all"
            >
              Overview
            </a>
            <a
              href="/app/clients"
              className="hover:bg-slate-800 px-3 py-2 rounded-lg font-medium text-slate-300 hover:text-white transition-all"
            >
              Clients
            </a>
            <a
              href="/app/invoices"
              className="hover:bg-slate-800 px-3 py-2 rounded-lg font-medium text-slate-300 hover:text-white transition-all"
            >
              Invoices
            </a>
            <a
              href="/app/settings"
              className="hover:bg-slate-800 px-3 py-2 rounded-lg font-medium text-slate-300 hover:text-white transition-all"
            >
              Settings
            </a>
            <a
              href="/docs"
              className="hover:bg-slate-800 px-3 py-2 rounded-lg font-medium text-slate-300 hover:text-white transition-all"
            >
              Docs & Help
            </a>
          </nav>
        </div>

        {/* Footer or Branding */}
        <div className="text-xs text-slate-500 mt-8 text-center">
          © {new Date().getFullYear()} AutoCRM
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col bg-slate-950">
        {/* Header */}
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-0 flex justify-end items-center p-4 pr-6 border-b border-slate-800 bg-slate-900 z-30"
        >
          <button
            onClick={() => {
              window.location.href = "/#pricing"; // Scroll to Pricing section on landing
            }}
            className="px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
          >
            Upgrade
          </button>

          <UserMenu />
        </motion.header>

        {/* Dynamic content */}
        <div className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </div>

        {/* Floating AI assistant */}
        <AiAssistant />
      </main>
    </div>
  );
}