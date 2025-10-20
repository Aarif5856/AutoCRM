import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripeKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY || "";

export default function Checkout() {
  const [params] = useSearchParams();
  const plan = params.get("plan") || "pro";
  const navigate = useNavigate();

  useEffect(() => {
    const go = async () => {
      // If Stripe key is missing -> dummy checkout
      if (!stripeKey) {
        setTimeout(() => navigate(`/checkout/success?plan=${plan}`), 1000);
        return;
      }

      const stripe = await loadStripe(stripeKey);
      const priceId =
        plan === "enterprise"
          ? import.meta.env.VITE_PRICE_ID_ENTERPRISE
          : import.meta.env.VITE_PRICE_ID_PRO;

      // Fallback to dummy if priceId not provided
      if (!priceId) {
        setTimeout(() => navigate(`/checkout/success?plan=${plan}`), 1000);
        return;
      }

      await stripe.redirectToCheckout({
        mode: "subscription",
        lineItems: [{ price: priceId, quantity: 1 }],
        successUrl: `${window.location.origin}/checkout/success?plan=${plan}`,
        cancelUrl: `${window.location.origin}/`,
      });
    };
    go();
  }, [plan, navigate]);

  return (
    <div className="min-h-[70vh] grid place-items-center text-center">
      <div className="rounded-2xl bg-slate-900/60 backdrop-blur p-8 shadow-xl">
        <p className="text-2xl font-semibold">Preparing checkout…</p>
        <p className="mt-2 opacity-70">
          {stripeKey ? "Redirecting to Stripe" : "Using demo checkout"} for the{" "}
          <span className="font-medium">{plan}</span> plan.
        </p>
      </div>
    </div>
  );
}
