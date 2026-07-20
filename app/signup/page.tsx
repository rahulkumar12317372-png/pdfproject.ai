"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    setIsLoading(true);

    // Mock registration
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard on success
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden select-none bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      {/* Dynamic neon circles behind signup card */}
      <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full max-w-md border border-light-border bg-light-card p-8 rounded-3xl dark:border-dark-border dark:bg-dark-card hover:glow-shadow-purple transition-all duration-300 relative"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-1 group mb-4">
            <span className="text-2xl font-black text-foreground">File</span>
            <span className="text-2xl font-black text-primary">fusion</span>
            <Sparkles className="h-5 w-5 text-primary fill-current" />
            <span className="ml-1 rounded-lg bg-gradient-to-r from-primary to-neon-purple px-2 py-0.5 text-xs font-black text-white uppercase tracking-wider">
              AI
            </span>
          </Link>
          <h2 className="text-xl font-black text-foreground">Create Account</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Sign up to save processing history and access advanced AI limits.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Name input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
              <User className="h-4.5 w-4.5" />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name (e.g. Rahul Kumar)"
              className="block w-full pl-11 pr-4 py-3 border border-light-border bg-light-bg/50 dark:border-dark-border dark:bg-dark-bg/50 text-foreground text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Email input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
              <Mail className="h-4.5 w-4.5" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="block w-full pl-11 pr-4 py-3 border border-light-border bg-light-bg/50 dark:border-dark-border dark:bg-dark-bg/50 text-foreground text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Password input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
              <Lock className="h-4.5 w-4.5" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Password"
              className="block w-full pl-11 pr-11 py-3 border border-light-border bg-light-bg/50 dark:border-dark-border dark:bg-dark-bg/50 text-foreground text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground cursor-pointer"
            >
              {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-primary to-neon-purple text-white rounded-xl font-bold text-sm shadow-md hover:opacity-95 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <div className="h-5 w-5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            ) : (
              <>
                <span>Sign Up</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        {/* Separator */}
        <div className="relative my-6 flex items-center">
          <div className="flex-1 border-t border-light-border dark:border-dark-border" />
          <span className="px-4 text-[10px] uppercase font-black tracking-wider text-muted-foreground bg-light-card dark:bg-dark-card z-10">
            or register with
          </span>
          <div className="flex-1 border-t border-light-border dark:border-dark-border" />
        </div>

        {/* Social logins */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => alert("Google Auth mock action")}
            className="h-11 border border-light-border dark:border-dark-border rounded-xl font-bold text-xs text-foreground hover:bg-foreground/5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.68 0-8.22-3.793-8.22-8.4s3.54-8.4 8.22-8.4c2.514 0 4.3 1.018 5.616 2.22l3.12-3.12C18.9 1.157 15.823 0 12.24 0 5.58 0 0 5.37 0 12s5.58 12 12.24 12c6.26 0 11.76-4.485 11.76-12 0-.81-.072-1.425-.192-1.715H12.24z" />
            </svg>
            Google
          </button>
          <button
            onClick={() => alert("GitHub Auth mock action")}
            className="h-11 border border-light-border dark:border-dark-border rounded-xl font-bold text-xs text-foreground hover:bg-foreground/5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </button>
        </div>

        {/* Footer link */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-primary hover:text-primary-hover transition-colors">
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
