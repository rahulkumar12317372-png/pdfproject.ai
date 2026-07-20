"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Smartphone, Cpu } from "lucide-react";

const features = [
  {
    name: "Secure & Private",
    description: "Your files are protected with bank-grade SSL encryption and automatically deleted from our servers within 2 hours.",
    icon: ShieldCheck,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    name: "Lightning Fast",
    description: "Experience serverless speed. Your conversions and edits are processed instantly without lagging your browser.",
    icon: Zap,
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    name: "Cross-Device Compatible",
    description: "Access Filefusion AI from any browser on your iPhone, Android, tablet, or PC without downloading any software.",
    icon: Smartphone,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    name: "AI-Enhanced Precision",
    description: "Get smarter workflows. Use the power of AI to translate layouts or summarize long PDFs into key highlights.",
    icon: Cpu,
    color: "text-purple-500 bg-purple-500/10",
  },
];

export default function WorkYourWay() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  } as const;

  return (
    <section className="py-20 bg-foreground/[0.02] border-y border-light-border dark:border-dark-border transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            Work Your Way, Safely
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A premium toolset should protect your data. Filefusion AI guarantees speed, safety, and compatibility across all platforms.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="flex flex-col rounded-2xl border border-light-border bg-light-card p-6 shadow-sm dark:border-dark-border dark:bg-dark-card transition-shadow hover:shadow-lg dark:hover:shadow-black/20"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} mb-5`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{feature.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
