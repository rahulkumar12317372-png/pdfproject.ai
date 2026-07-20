"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { UploadCloud, Cpu, Download } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Upload Files",
    description: "Drag & drop your files into our secure uploader, or browse from your desktop or phone storage.",
    icon: UploadCloud,
    color: "from-primary to-brand-pink",
  },
  {
    step: "02",
    title: "Process Automatically",
    description: "Our serverless pipeline immediately processes your files using advanced algorithms or AI models.",
    icon: Cpu,
    color: "from-brand-pink to-purple-500",
  },
  {
    step: "03",
    title: "Download PDF",
    description: "Your converted or edited files are ready instantly. Download with a single click or export directly.",
    icon: Download,
    color: "from-purple-500 to-primary",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the section to animate the progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Filefusion AI simplifies document editing down to three easy, instantaneous steps.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 items-start">
          {/* Connecting Line - Desktop (Horizontal) */}
          <div className="absolute top-[40px] left-[15%] right-[15%] h-1 bg-foreground/10 dark:bg-white/10 hidden lg:block -z-10 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX, originX: 0 }}
              className="h-full w-full bg-gradient-to-r from-primary via-brand-pink to-purple-500"
            />
          </div>

          {/* Connecting Line - Mobile (Vertical) */}
          <div className="absolute left-[38px] top-6 bottom-6 w-1 bg-foreground/10 dark:bg-white/10 lg:hidden -z-10 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-primary via-brand-pink to-purple-500"
            />
          </div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-4 relative group"
              >
                {/* Step badge / Icon wrapper */}
                <div className="relative flex-shrink-0">
                  <div className={`flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-gradient-to-tr ${step.color} p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-light-card dark:bg-dark-card text-foreground group-hover:bg-transparent group-hover:text-white transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  <span className={`absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr ${step.color} text-[11px] font-black text-white shadow`}>
                    {step.step}
                  </span>
                </div>

                {/* Text Content */}
                <div className="lg:mt-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
