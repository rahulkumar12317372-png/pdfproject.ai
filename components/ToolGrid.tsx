"use client";

import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, HelpCircle } from "lucide-react";
import ToolCard from "./ToolCard";
import { toolsData, Tool } from "@/data/tools";
import { CategoryID } from "./CategoryTabs";

interface ToolGridProps {
  searchQuery: string;
  activeCategory: CategoryID;
}

export default function ToolGrid({ searchQuery, activeCategory }: ToolGridProps) {
  // Memoized filtered tools data
  const filteredTools = useMemo(() => {
    return toolsData.filter((tool) => {
      // 1. Category check
      const matchesCategory =
        activeCategory === "all" || tool.category === activeCategory;

      // 2. Search check
      const matchesSearch =
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div id="tools" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Grid Container */}
      <motion.div layout className="relative min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredTools.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {filteredTools.map((tool, idx) => (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                >
                  <ToolCard tool={tool} index={idx} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Elegant Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center text-center py-16 px-4 border border-dashed border-light-border dark:border-dark-border rounded-3xl bg-light-card/40 dark:bg-dark-card/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground/5 text-muted-foreground mb-4">
                <HelpCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">No PDF Tools Found</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                We couldn&apos;t find any tools matching &ldquo;{searchQuery}&rdquo; in this category. Try adjusting your search query or switching categories.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
