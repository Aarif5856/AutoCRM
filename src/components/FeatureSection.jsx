import React from "react";
import { Brain, FileText, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Brain className="text-blue-500 w-8 h-8" />,
    title: "AI Assistant",
    desc: "Generate instant replies, proposals, and insights using built-in AI.",
  },
  {
    icon: <FileText className="text-blue-500 w-8 h-8" />,
    title: "Auto Invoices",
    desc: "Create and download client invoices automatically as PDF.",
  },
  {
    icon: <Users className="text-blue-500 w-8 h-8" />,
    title: "Client Hub",
    desc: "Manage clients, projects, and reminders in one place.",
  },
  {
    icon: <BarChart3 className="text-blue-500 w-8 h-8" />,
    title: "Analytics",
    desc: "Track income, task progress, and performance at a glance.",
  },
];

export default function FeatureSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((f, i) => (
        <div
          key={i}
          className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700 
          transition-all duration-500 transform 
          hover:-translate-y-2 hover:scale-[1.02] 
          hover:shadow-2xl hover:shadow-blue-500/10 
          hover:border-blue-200 dark:hover:border-blue-500/30 cursor-pointer
          before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5 before:opacity-0 before:transition-opacity before:duration-500
          hover:before:opacity-100"
        >
          <div className="relative z-10">
            <div className="mb-6 p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl w-fit group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
              {f.icon}
            </div>
            <h4 className="font-bold text-xl mb-3 text-gray-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {f.title}
            </h4>
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
              {f.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
