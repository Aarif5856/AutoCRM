import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi 👋 I'm your AI assistant! Ask me about clients, invoices, or anything else." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: `Sure! Here's a quick suggestion related to: "${input}". 🚀` },
      ]);
    }, 800);
    setInput("");
  };

  return (
    <>
      {/* Floating AI Button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-3 rounded-full shadow-lg hover:opacity-90 z-50"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-0 right-0 w-full sm:w-[380px] h-[500px] bg-slate-900 border-l border-t border-white/10 rounded-t-2xl shadow-2xl flex flex-col overflow-hidden z-50"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 90 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700">
              <h3 className="text-sm font-semibold text-slate-100">AI Assistant 🤖</h3>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-200">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl max-w-[80%] ${
                    msg.sender === "ai"
                      ? "bg-slate-800 text-slate-100 self-start"
                      : "bg-indigo-500 text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex items-center p-3 bg-slate-800 border-t border-slate-700">
              <input
                className="flex-1 bg-slate-900 text-slate-100 text-sm px-3 py-2 rounded-lg focus:outline-none"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-gradient-to-r from-indigo-500 to-violet-500 p-2 rounded-lg text-white hover:opacity-90"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

