"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, HelpCircle, Sparkles } from "lucide-react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Basic conversion and editing tools for occasional usage.",
      features: [
        "24+ basic conversion & edit tools",
        "Maximum file size: 10 MB",
        "Standard processing speed",
        "Ad-supported interface",
        "Single file processing at a time",
      ],
      buttonText: "Get Started Free",
      isPopular: false,
      glowColor: "",
    },
    {
      name: "Pro",
      price: isYearly ? 7 : 9,
      description: "Advanced AI tools, unlimited sizes, and high priority access.",
      features: [
        "Everything in Free",
        "Maximum file size: 2 GB",
        "High-priority processing (no queues)",
        "Unlimited documents & conversions",
        "Full AI Summaries & OCR capabilities",
        "PDF layout-preserved translations",
        "Priority 24/7 client support",
      ],
      buttonText: "Upgrade to Pro",
      isPopular: true,
      glowColor: "animate-neon-glow", // Applied the neon glow animation
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Bulk APIs, custom integrations, and dedicated scale.",
      features: [
        "Unlimited file size uploads",
        "Dedicated processing engine node",
        "Custom API endpoints & webhooks",
        "SSO, SAML & team console",
        "Dedicated account manager",
        "Custom SLAs & compliance reports",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
      glowColor: "",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-light-border dark:border-dark-border select-none">
      {/* Background glow behind pricing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-40 dark:opacity-30">
        <div className="h-[400px] w-[600px] rounded-full bg-neon-purple/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5 px-4 py-1.5 text-xs font-bold text-neon-purple dark:bg-neon-purple/10 mb-4"
          >
            <Sparkles className="h-3.5 w-3.5 fill-current" />
            <span>Pricing Plans</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Unlock the upgrade version with file capacities up to 2GB, serverless speeds, and state-of-the-art AI parsing.
          </p>

          {/* Toggle Switch */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm font-bold transition-colors ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 rounded-full bg-foreground/10 dark:bg-white/10 p-1 flex items-center cursor-pointer transition-colors"
              aria-label="Toggle billing interval"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-primary shadow-[0_0_10px_#ff385c]"
                style={{
                  alignSelf: isYearly ? "flex-end" : "flex-start",
                  marginLeft: isYearly ? "auto" : "0",
                }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold transition-colors ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                Yearly
              </span>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-extrabold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-500/20 shadow-sm animate-pulse">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col justify-between rounded-3xl border bg-light-card dark:bg-dark-card transition-all duration-300 p-8 ${
                plan.isPopular
                  ? `${plan.glowColor} border-primary dark:border-neon-purple`
                  : "border-light-border dark:border-dark-border"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-neon-purple px-4 py-1 text-xs font-black text-white uppercase tracking-wider shadow-lg shadow-primary/25">
                  <Sparkles className="h-3 w-3 fill-current" />
                  Most Popular
                </span>
              )}

              <div>
                {/* Header */}
                <h3 className="text-xl font-black text-foreground">{plan.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline text-foreground">
                  <span className="text-4xl font-black tracking-tight">
                    {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
                  </span>
                  {typeof plan.price === "number" && (
                    <span className="ml-1 text-sm font-semibold text-muted-foreground">
                      /month
                    </span>
                  )}
                </div>
                {plan.isPopular && isYearly && (
                  <span className="text-[10px] text-emerald-500 font-extrabold mt-1 block">
                    Billed $84 annually (Save $24)
                  </span>
                )}

                {/* Features List */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full ${
                        plan.isPopular
                          ? "bg-primary/10 text-primary dark:bg-neon-purple/20 dark:text-neon-purple"
                          : "bg-foreground/5 text-foreground"
                      }`}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-xs text-foreground/80 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <button
                  className={`w-full h-12 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer shadow-md ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-primary to-neon-purple text-white hover:opacity-95 hover:shadow-lg hover:shadow-primary/20"
                      : "bg-foreground/5 text-foreground hover:bg-foreground/10"
                  }`}
                  onClick={() => alert(`Subscribed to ${plan.name} Plan!`)}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
