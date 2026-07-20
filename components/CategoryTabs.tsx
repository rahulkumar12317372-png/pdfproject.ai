"use client";

import React from "react";
import { motion } from "framer-motion";

export type CategoryID = "all" | "convert" | "edit" | "security" | "scan" | "ai";

interface Category {
  id: CategoryID;
  name: string;
}

const categories: Category[] = [
  { id: "all", name: "All Tools" },
  { id: "convert", name: "Convert" },
  { id: "edit", name: "Edit & Organize" },
  { id: "security", name: "Security" },
  { id: "scan", name: "Scan & Repair" },
  { id: "ai", name: "AI Tools" },
];

interface CategoryTabsProps {
  activeCategory: CategoryID;
  setActiveCategory: (cat: CategoryID) => void;
}

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
}: CategoryTabsProps) {
  return (
    <div className="w-full flex justify-center px-4 mb-10 select-none">
      <div className="flex w-full max-w-4xl overflow-x-auto no-scrollbar scroll-smooth border-b border-light-border dark:border-dark-border gap-1 py-1">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative flex-shrink-0 px-5 py-3 text-sm font-bold transition-colors cursor-pointer rounded-xl ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5 dark:hover:bg-white/5"
              }`}
            >
              <span className="relative z-10">{cat.name}</span>
              
              {/* Premium Slide Transition Underline using Framer Motion */}
              {isActive && (
                <motion.div
                  layoutId="activeCategoryUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_#ff385c]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
