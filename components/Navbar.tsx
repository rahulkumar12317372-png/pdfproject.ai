"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Convert PDF", href: "/#tools?cat=convert" },
  { name: "Edit & Organize", href: "/#tools?cat=edit" },
  { name: "Security", href: "/#tools?cat=security" },
  { name: "Scan & Repair", href: "/#tools?cat=scan" },
  { name: "AI Tools", href: "/#tools?cat=ai" },
  { name: "Pricing Plans", href: "/#pricing" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-navbar transition-colors duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-1 group select-none">
            <span className="text-2xl font-black tracking-tight text-foreground">
              File
            </span>
            <span className="text-2xl font-black tracking-tight text-primary">
              fusion
            </span>
            <motion.div
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="text-primary"
            >
              <Sparkles className="h-5 w-5 fill-current" />
            </motion.div>
            <span className="ml-1 rounded-lg bg-gradient-to-r from-primary to-brand-pink px-2 py-0.5 text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <span>AI</span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              // Simple check to render links
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground py-2"
                >
                  {link.name}
                  {/* Subtle underline hover animation using Framer Motion layoutId */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full group-hover:w-full"></span>
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons (Theme Toggle + Auth + Hamburger) */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-indigo-600" />
              )}
            </button>

            {/* Dashboard / Auth Links */}
            <Link
              href="/dashboard"
              className="hidden lg:inline-flex items-center justify-center text-sm font-bold text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Dashboard
            </Link>
            
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center justify-center text-sm font-bold text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-primary/30 transition-all duration-200"
            >
              Sign Up
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground hover:bg-foreground/5 md:hidden transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Framer Motion Slide In) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-40 w-full max-w-[280px] bg-light-bg p-6 shadow-2xl dark:bg-dark-bg flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-black text-foreground">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 text-foreground hover:bg-foreground/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-5 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-base font-semibold text-foreground/80 hover:text-foreground py-1 border-b border-foreground/5"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto border-t border-foreground/10 pt-6 flex flex-col gap-3">
                <Link
                  href="/dashboard"
                  onClick={handleLinkClick}
                  className="flex w-full h-11 items-center justify-center rounded-xl border border-light-border dark:border-dark-border text-sm font-bold text-foreground hover:bg-foreground/5 transition-colors"
                >
                  Dashboard
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/login"
                    onClick={handleLinkClick}
                    className="flex h-11 items-center justify-center rounded-xl border border-light-border dark:border-dark-border text-sm font-bold text-foreground hover:bg-foreground/5 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={handleLinkClick}
                    className="flex h-11 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-lg hover:bg-primary-hover transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
