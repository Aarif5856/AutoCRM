import React, { useState, useRef, useEffect } from "react";

export default function Docs() {
  const [search, setSearch] = useState("");
  const sections = [
    { id: "install", title: "Install" },
    { id: "rebrand", title: "Rebrand" },
    { id: "stripe", title: "Stripe (Optional)" },
    { id: "demo", title: "Demo Data (Seed Mode)" },
    { id: "build", title: "Build & Deploy" },
    { id: "support", title: "Support" },
  ];

  const sectionRefs = useRef({});
  const [active, setActive] = useState("install");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { threshold: 0.4 }
    );

    sections.forEach(({ id }) => {
      if (sectionRefs.current[id]) observer.observe(sectionRefs.current[id]);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const section = sectionRefs.current[id];
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 min-h-screen text-slate-200">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-64 border-r border-slate-800 p-6 space-y-4 bg-slate-900/60 backdrop-blur">
        <h2 className="text-lg font-semibold text-violet-400 mb-2">
          Docs Navigation
        </h2>
        <input
          type="text"
          placeholder="Search Docs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 text-sm rounded-md bg-slate-800 border border-slate-700 placeholder-slate-500 focus:ring-2 focus:ring-violet-500 outline-none"
        />
        <nav className="flex flex-col gap-1 mt-3 text-sm">
          {filteredSections.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => handleScrollTo(id)}
              className={`text-left px-3 py-1.5 rounded-md transition ${
                active === id
                  ? "bg-violet-600/20 text-violet-300"
                  : "hover:bg-slate-800 text-slate-400"
              }`}
            >
              {title}
            </button>
          ))}
          {filteredSections.length === 0 && (
            <p className="text-slate-500 text-xs">No matches found</p>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-16">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 mb-10">
            Documentation & Setup
          </h1>

          <DocSection
            id="install"
            title="Install"
            sectionRefs={sectionRefs}
            content={
              <>
                <CodeBlock
                  code={`git clone <your-repo>
cd AutoCRM
npm install
npm run dev`}
                />
                <p className="mt-3 text-sm text-slate-400">
                  Runs a local development server at{" "}
                  <code>http://localhost:5174</code>
                </p>
              </>
            }
          />

          <DocSection
            id="rebrand"
            title="Rebrand"
            sectionRefs={sectionRefs}
            content={
              <ul className="list-disc ml-6 text-slate-300 space-y-1">
                <li>
                  Update logo at <code>/public/favicon.svg</code> and brand text.
                </li>
                <li>Change colors in Tailwind config or utility classes.</li>
                <li>
                  Update landing copy in <code>FeatureSection</code> and{" "}
                  <code>PricingSection</code>.
                </li>
              </ul>
            }
          />

          <DocSection
            id="stripe"
            title="Stripe (Optional)"
            sectionRefs={sectionRefs}
            content={
              <>
                <p className="text-slate-300 mb-2">
                  Add keys to <code>.env</code>. Without keys, dummy checkout
                  will be used.
                </p>
                <CodeBlock
                  code={`VITE_STRIPE_PUBLIC_KEY=pk_test_xxx
VITE_PRICE_ID_PRO=price_12345
VITE_PRICE_ID_ENTERPRISE=price_67890`}
                />
              </>
            }
          />

          <DocSection
            id="demo"
            title="Demo Data (Seed Mode)"
            sectionRefs={sectionRefs}
            content={
              <p className="text-slate-300 mb-2">
                Click <b>"Seed 50 Clients"</b> or <b>"Seed 50 Invoices"</b> in
                dashboard to generate instant demo data using{" "}
                <code>@faker-js/faker</code> stored in{" "}
                <code>localStorage</code>.
              </p>
            }
          />

          <DocSection
            id="build"
            title="Build & Deploy"
            sectionRefs={sectionRefs}
            content={
              <>
                <CodeBlock
                  code={`npm run build
# Upload the /dist folder to Vercel, Netlify, or your server`}
                />
                <p className="mt-3 text-sm text-slate-400">
                  Recommended: deploy using <b>Vercel</b> for best performance.
                </p>
              </>
            }
          />

          <DocSection
            id="support"
            title="Support"
            sectionRefs={sectionRefs}
            content={
              <p className="text-slate-300">
                For questions, reach out via{" "}
                <a
                  href="mailto:support@autocrm.app"
                  className="text-violet-400 hover:underline"
                >
                  support@autocrm.app
                </a>
              </p>
            }
          />

          <footer className="mt-16 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} AutoCRM — All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}

const DocSection = ({ id, title, sectionRefs, content }) => (
  <section
    id={id}
    ref={(el) => (sectionRefs.current[id] = el)}
    className="scroll-mt-24"
  >
    <h2 className="text-2xl font-semibold mb-3 text-violet-300">{title}</h2>
    <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700 shadow-lg">
      {content}
    </div>
  </section>
);

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-slate-900 text-slate-300 p-3 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
        {code}
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-700 hover:bg-violet-600 hover:text-white transition-all opacity-80 group-hover:opacity-100"
      >
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>
    </div>
  );
};