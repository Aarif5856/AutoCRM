import React from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function CheckoutSuccess() {
  const [params] = useSearchParams();
  const plan = params.get("plan") || "pro";

  return (
    <div className="min-h-[70vh] grid place-items-center p-6">
      <div className="max-w-lg w-full rounded-2xl bg-slate-900/60 backdrop-blur p-8 shadow-xl">
        <h1 className="text-3xl font-bold">🎉 You're on {plan === "enterprise" ? "Enterprise" : "Pro"}!</h1>
        <p className="mt-3 opacity-80">
          Thank you for upgrading. Your workspace now has access to advanced analytics, AI tools, and more.
        </p>
        <Link
          to="/app"
          className="inline-block mt-6 px-5 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 font-semibold"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
