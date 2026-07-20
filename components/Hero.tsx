"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  } as const;

  return (
    <section className="relative overflow-hidden py-20 lg:py-28 flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none opacity-50 dark:opacity-40">
        <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-primary/20 blur-[100px] animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-brand-pink/15 blur-[120px] animate-pulse duration-[8000ms]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold text-primary dark:bg-primary/10 mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 fill-current" />
          <span>100% Free & Secure Online PDF Tools</span>
        </motion.div>

        {/* Dynamic Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-foreground"
        >
          Every PDF tool you need, <br />
          <span className="bg-gradient-to-r from-primary via-brand-pink to-primary bg-clip-text text-transparent bg-size-200 animate-gradient">
            loved in one place.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          Simplify your document workflows with 24+ premium, secure, and lightning-fast PDF tools. No installation, no registration, just drag-and-drop.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-10 w-full max-w-xl px-2"
        >
          <div className="relative group flex items-center w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools (e.g. PDF to Excel, Sign PDF, Compress...)"
              className="block w-full pl-11 pr-5 py-4 border border-light-border bg-light-card/80 dark:border-dark-border dark:bg-dark-card/80 text-foreground rounded-2xl placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-sm text-sm sm:text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 text-xs font-semibold px-2 py-1 bg-foreground/10 hover:bg-foreground/20 rounded-md text-foreground transition-colors cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
