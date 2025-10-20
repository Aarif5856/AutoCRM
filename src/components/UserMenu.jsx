import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, LogOut, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const enableDemo = () => {
  localStorage.setItem("demo-mode", "true");
  window.dispatchEvent(new Event("seed-demo"));
  alert("✅ Demo Mode enabled — fake data loaded!");
};

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg text-sm font-medium text-slate-200"
      >
        <img
          src="https://i.pravatar.cc/32"
          alt="User"
          className="w-6 h-6 rounded-full"
        />
        <span>Admin</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl z-50 overflow-hidden"
          >
            <div className="px-3 py-2 text-sm text-slate-400 border-b border-slate-800">
              Signed in as{" "}
              <span className="text-slate-200 font-medium">
                admin@autocrm.app
              </span>
            </div>

            <button
              onClick={() => {
                navigate("/app/profile");
                setOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-800 text-slate-200"
            >
              <User size={16} /> Profile
            </button>

            <button
              onClick={() => {
                enableDemo();
                setOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-800 text-violet-400"
            >
              <Sparkles size={16} /> Enable Demo Mode
            </button>

            <button
              onClick={() => alert("Logged out")}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-800 text-red-400"
            >
              <LogOut size={16} /> Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}