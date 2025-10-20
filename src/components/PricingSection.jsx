import React from "react";

const plans = [
  {
    title: "Starter",
    price: "Free",
    features: ["1 User", "Basic Dashboard", "Manual Invoices"],
  },
  {
    title: "Pro",
    price: "$39",
    features: ["Unlimited Clients", "AI Assistant", "Auto Invoices", "Analytics"],
  },
  {
    title: "White Label",
    price: "$99",
    features: ["Custom Branding", "Reseller License", "Priority Support"],
  },
];

export default function PricingSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => {
        const isPopular = plan.title === "Pro";
        return (
          <div
            key={index}
            className={`group relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border transition-all duration-500 transform 
            hover:-translate-y-2 hover:scale-[1.02] 
            hover:shadow-2xl cursor-pointer
            ${isPopular 
              ? 'border-blue-500 shadow-blue-500/20 hover:shadow-blue-500/30 ring-2 ring-blue-500/20' 
              : 'border-gray-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500/30'
            }`}
          >
            {isPopular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-2 text-gray-800 dark:text-slate-100">{plan.title}</h4>
              <div className="mb-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {plan.price}
                </span>
                {plan.price !== "Free" && (
                  <span className="text-gray-500 dark:text-slate-400 text-lg">/month</span>
                )}
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 text-gray-700 dark:text-slate-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => {
                if (plan.price === "Free") {
                  window.location.href = "/app#overview";
                } else if (plan.title === "Pro") {
                  window.location.href = "/checkout?plan=pro";
                } else if (plan.title === "White Label") {
                  window.location.href = "/checkout?plan=enterprise";
                }
              }}
              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                isPopular 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              {plan.price === "Free" ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
