"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Clock, Layers, ShieldCheck } from "lucide-react";

export default function LiveStats() {
  const [compiledCount, setCompiledCount] = useState(1248392);

  const [activeCompilers, setActiveCompilers] = useState(12);

  // Dynamic increment for live files compiled
  useEffect(() => {
    const interval = setInterval(() => {
      setCompiledCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Dynamic swapping for active compilers count
  useEffect(() => {
    const interval = setInterval(() => {
      const roll = Math.random();
      if (roll > 0.85) {
        setActiveCompilers(10);
      } else if (roll > 0.6) {
        setActiveCompilers(11);
      } else {
        setActiveCompilers(12);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: "Live Files Compiled",
      value: compiledCount.toLocaleString(),
      icon: Layers,
      color: "text-neon-cyan border-neon-cyan/20 bg-neon-cyan/5",
      glow: "glow-shadow-cyan",
      desc: "Total files processed globally in the last 24h",
    },
    {
      label: "Average Conversion Delay",
      value: "1.2s",
      icon: Clock,
      color: "text-primary border-primary/20 bg-primary/5",
      glow: "glow-shadow-primary",
      desc: "Serverless response and file turnaround speed",
    },
    {
      label: "Nominal Resolution Rate",
      value: "99.8%",
      icon: ShieldCheck,
      color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
      glow: "glow-shadow-primary", // Reuse shadow or standard
      desc: "Conversion success rate with layout mapping",
    },
    {
      label: "Active Compilers",
      value: `${activeCompilers} / 12 Online`,
      icon: Activity,
      color: "text-neon-purple border-neon-purple/20 bg-neon-purple/5",
      glow: "glow-shadow-purple",
      desc: "Server nodes hot-swapping and active",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-foreground/[0.02] border-y border-light-border dark:border-dark-border transition-colors duration-300">
      {/* Decorative neon ambient blobs */}
      <div className="absolute top-10 left-10 h-[300px] w-[300px] bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-[300px] w-[300px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            Platform Dashboard & Real-Time Metrics
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Monitor Filefusion AI&apos;s active performance, latency channels, and cloud processing clusters in real-time.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`flex flex-col border rounded-2xl bg-light-card p-6 shadow-sm dark:bg-dark-card transition-all ${
                  stat.glow ? `hover:${stat.glow}` : ""
                }`}
              >
                {/* Icon wrapper */}
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${stat.color} mb-5`}>
                  <Icon className="h-5 w-5" />
                </div>

                {/* Stat label and value */}
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
                
                <h3 className="mt-2 text-2xl font-black text-foreground font-mono flex items-center gap-2">
                  {stat.value}
                  {stat.label === "Active Compilers" && (
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
                    </span>
                  )}
                </h3>
                
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground border-t border-light-border dark:border-dark-border pt-3">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
