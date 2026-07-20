"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import CategoryTabs, { CategoryID } from "@/components/CategoryTabs";
import ToolGrid from "@/components/ToolGrid";
import WorkYourWay from "@/components/WorkYourWay";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import LiveStats from "@/components/LiveStats";
import Testimonials from "@/components/Testimonials";

function MainContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryID>("all");
  const searchParams = useSearchParams();

  // Synchronize category state with query parameters from navigation
  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      const validCategories: CategoryID[] = [
        "all",
        "convert",
        "edit",
        "security",
        "scan",
        "ai",
      ];
      if (validCategories.includes(cat as CategoryID)) {
        setActiveCategory(cat as CategoryID);
        
        // Scroll down to the tools section smoothly
        const element = document.getElementById("tools");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [searchParams]);

  return (
    <div className="flex-1 flex flex-col">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <LiveStats />
      <CategoryTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ToolGrid searchQuery={searchQuery} activeCategory={activeCategory} />
      <WorkYourWay />
      <HowItWorks />
      <Pricing />
      <Testimonials />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex flex-col items-center justify-center py-32 text-center text-sm font-semibold text-muted-foreground animate-pulse">
          Loading Filefusion AI platform...
        </div>
      }
    >
      <MainContent />
    </Suspense>
  );
}
