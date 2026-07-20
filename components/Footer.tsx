"use client";

import React from "react";
import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  {
    category: "Convert",
    links: [
      { name: "PDF to PowerPoint", href: "/tools/pdf-to-powerpoint" },
      { name: "PDF to Excel", href: "/tools/pdf-to-excel" },
      { name: "Word to PDF", href: "/tools/word-to-pdf" },
      { name: "JPG to PDF", href: "/tools/jpg-to-pdf" },
      { name: "PDF to Markdown", href: "/tools/pdf-to-markdown" },
    ],
  },
  {
    category: "Edit & Organize",
    links: [
      { name: "Edit PDF", href: "/tools/edit-pdf" },
      { name: "Organize PDF", href: "/tools/organize-pdf" },
      { name: "Rotate PDF", href: "/tools/rotate-pdf" },
      { name: "Page Numbers", href: "/tools/page-numbers" },
      { name: "Watermark", href: "/tools/watermark" },
    ],
  },
  {
    category: "Security",
    links: [
      { name: "Protect PDF", href: "/tools/protect-pdf" },
      { name: "Unlock PDF", href: "/tools/unlock-pdf" },
      { name: "Redact PDF", href: "/tools/redact-pdf" },
      { name: "Sign PDF", href: "/tools/sign-pdf" },
    ],
  },
  {
    category: "Scan & AI",
    links: [
      { name: "OCR PDF", href: "/tools/ocr-pdf" },
      { name: "Repair PDF", href: "/tools/repair-pdf" },
      { name: "AI Summarizer", href: "/tools/ai-summarizer" },
      { name: "Translate PDF", href: "/tools/translate-pdf" },
      { name: "Upgrade Version (Pricing)", href: "/#pricing" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-light-bg border-t border-light-border dark:bg-dark-bg dark:border-dark-border py-16 px-4 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 mb-12">
          {/* Logo Section */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1 group select-none">
              <span className="text-xl font-black text-foreground">File</span>
              <span className="text-xl font-black text-primary">fusion</span>
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-primary"
              >
                <Sparkles className="h-4.5 w-4.5 fill-current" />
              </motion.div>
              <span className="ml-0.5 rounded-md bg-gradient-to-r from-primary to-brand-pink px-1.5 py-0.5 text-[10px] font-black text-white uppercase tracking-wider flex items-center gap-1">
                <span>AI</span>
                <span className="relative flex h-1 w-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500"></span>
                </span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every PDF tool you need, built in one place. 100% free, browser-based utility platform built with privacy in mind.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="https://wa.me/919263293460" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.372a9.994 9.994 0 0 0 4.777 1.21h.005c5.505 0 9.988-4.479 9.99-9.986 0-2.67-1.037-5.18-2.92-7.062A9.925 9.925 0 0 0 12.012 2zm5.836 14.199c-.32.899-1.548 1.64-2.128 1.699-.579.059-1.28.118-4.721-1.305-2.935-1.213-4.834-4.2-4.981-4.398-.147-.199-1.196-1.593-1.196-3.039 0-1.447.755-2.155 1.025-2.45.27-.294.59-.368.79-.368.199 0 .399.006.569.014.179.009.421-.067.659.509.24.58.82 2.001.889 2.148.07.147.118.318.02.509-.099.2-.198.318-.318.46-.12.139-.249.31-.359.42-.12.119-.25.25-.108.49.141.24.629 1.039 1.35 1.681.93.829 1.711 1.089 1.951 1.209.24.12.379.099.519-.06.139-.159.6-1.009.759-1.35.159-.34.319-.28.539-.2.22.08 1.399.66 1.639.779.24.12.399.18.459.28.06.1.06.58-.26 1.479z"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/apurva_maurya_45?igsh=djZ1aGVtbG53N2tq" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="h-4.5 w-4.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/rahul-kumar-7b69ba380?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                </svg>
              </Link>
              <Link href="mailto:rahulkumar12317372@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <svg className="h-4.5 w-4.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((col) => (
            <div key={col.category} className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                {col.category}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-light-border dark:border-dark-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Filefusion AI. All rights reserved.</p>
            <span className="hidden sm:inline text-foreground/10">|</span>
            <p>Developed by <span className="font-bold text-foreground">Rahul Kumar</span></p>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 fill-current text-primary animate-pulse" />
            <span>for a better web.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
