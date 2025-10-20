import React, { useEffect, useState } from "react";

export default function LandingHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800 shadow-[0_0_15px_rgba(109,40,217,0.1)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500 hover:from-violet-400 hover:to-indigo-500 transition-all duration-500"
        >
          AutoCRM
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-10 text-slate-300 font-medium">
          {[
            { name: "Features", link: "#features" },
            { name: "Pricing", link: "#pricing" },
            { name: "Contact", link: "#contact" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="relative group transition-all duration-300"
            >
              <span className="group-hover:text-violet-400 transition-colors">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(139,92,246,0.7)]"></span>
            </a>
          ))}
        </nav>

        {/* Button */}
        <a
          href="/app#overview"
          className="hidden md:inline-block px-5 py-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
        >
          Get Started
        </a>
      </div>

      {/* Scroll Indicator */}
      <div
        className="h-[3px] bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </header>
  );
}
