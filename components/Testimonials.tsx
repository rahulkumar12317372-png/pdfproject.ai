"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Marketing Director at FlowState",
    content: "Filefusion AI has saved our team hours of work. The PDF to PowerPoint converter is remarkably accurate, keeping all our custom fonts and layouts intact. The interface is stunning too!",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "Freelance Full-stack Developer",
    content: "I use the AI Summarizer almost daily for reading technical specs and contracts. It pulls the exact clauses I need in seconds. Being open-source and free is just the cherry on top.",
    stars: 5,
  },
  {
    name: "Elena Rostova",
    role: "Legal Consultant",
    content: "Security is my primary concern when uploading client contracts. Filefusion AI's local browser processing for security tools and automatic server purge gave me complete peace of mind.",
    stars: 5,
  },
];

export default function Testimonials() {
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
        stiffness: 80,
        damping: 15,
      },
    },
  } as const;

  return (
    <section className="py-20 bg-foreground/[0.01] border-t border-light-border dark:border-dark-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            Loved by Professionals Worldwide
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Here is what our users say about their daily experience with Filefusion AI.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              className="flex flex-col justify-between rounded-2xl border border-light-border bg-light-card p-8 shadow-sm dark:border-dark-border dark:bg-dark-card"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 text-amber-500 mb-5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-sm italic leading-relaxed text-foreground/80">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-8 border-t border-light-border dark:border-dark-border pt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-black dark:bg-primary/20">
                  {review.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
