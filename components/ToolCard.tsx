"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Tool, getToolIcon } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export default function ToolCard({ tool, index }: ToolCardProps) {
  const IconComponent = getToolIcon(tool.iconName);

  // Custom animation variants for staggered fade-up on scroll
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16,
        // Dynamically delay elements to stagger as they scroll into view
        delay: (idx % 4) * 0.05,
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }}
      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-light-border bg-light-card p-6 shadow-sm dark:border-dark-border dark:bg-dark-card transition-all duration-300 group cursor-pointer select-none ${
        tool.isAI
          ? "hover:border-neon-purple/40 hover:glow-shadow-purple"
          : "hover:border-primary/40 hover:glow-shadow-primary"
      }`}
    >
      {/* Decorative Glow on Hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

      <div>
        {/* Header (Icon + AI Badge) */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${
              tool.isAI
                ? "bg-neon-purple/10 text-neon-purple"
                : "bg-primary/10 text-primary"
            }`}
          >
            <IconComponent className="h-6 w-6" />
          </div>

          {tool.isAI && (
            <span className="inline-flex items-center gap-1 rounded-full bg-neon-purple/10 px-2.5 py-0.5 text-xs font-bold text-neon-purple border border-neon-purple/20 shadow-sm animate-pulse">
              <Sparkles className="h-3 w-3" />
              AI-Powered
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-lg font-bold text-foreground transition-colors flex items-center gap-1.5 ${
          tool.isAI ? "group-hover:text-neon-purple" : "group-hover:text-primary"
        }`}>
          {tool.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {tool.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-end">
        <Link href={`/tools/${tool.id}`} className="absolute inset-0" aria-label={`Use ${tool.title}`} />
        <span className={`inline-flex items-center gap-1 text-xs font-bold transition-all group-hover:translate-x-1.5 duration-200 ${
          tool.isAI ? "text-neon-purple" : "text-primary"
        }`}>
          Open Tool
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </motion.div>
  );
}
