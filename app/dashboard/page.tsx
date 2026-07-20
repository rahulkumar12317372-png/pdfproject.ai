"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Activity,
  Clock,
  Layers,
  ShieldCheck,
  File,
  Download,
  LogOut,
  User,
  PlusCircle,
  Database,
  Cpu,
} from "lucide-react";

interface RecentFile {
  name: string;
  tool: string;
  size: string;
  date: string;
  status: "completed" | "processing";
}

export default function DashboardPage() {
  const [liveCompiled, setLiveCompiled] = useState(1248392);
  const [activeCompilers, setActiveCompilers] = useState(12);

  // Dynamic ticking counter
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCompiled((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Dynamic active compilers swapping
  useEffect(() => {
    const interval = setInterval(() => {
      const roll = Math.random();
      if (roll > 0.85) {
        setActiveCompilers(10);
      } else if (roll > 0.6) {
        setActiveCompilers(11);
      } else {
        setActiveCompilers(12);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const recentFiles: RecentFile[] = [
    {
      name: "contract_final_v2.pdf",
      tool: "Protect PDF",
      size: "2.4 MB",
      date: "2026-07-20",
      status: "completed",
    },
    {
      name: "financial_forecast_2026.xlsx",
      tool: "Excel to PDF",
      size: "1.1 MB",
      date: "2026-07-19",
      status: "completed",
    },
    {
      name: "meeting_summary.pdf",
      tool: "AI Summarizer",
      size: "450 KB",
      date: "2026-07-18",
      status: "completed",
    },
    {
      name: "portrait_raw_headshot.jpg",
      tool: "Background Remover",
      size: "4.8 MB",
      date: "2026-07-18",
      status: "completed",
    },
  ];

  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-r border-light-border bg-light-card dark:border-dark-border dark:bg-dark-card p-6 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group select-none">
            <span className="text-xl font-black text-foreground">File</span>
            <span className="text-xl font-black text-primary">fusion</span>
            <Sparkles className="h-4.5 w-4.5 text-primary fill-current" />
            <span className="ml-1 rounded-lg bg-gradient-to-r from-primary to-neon-purple px-1.5 py-0.5 text-[10px] font-black text-white uppercase tracking-wider">
              AI
            </span>
          </Link>

          {/* User profile */}
          <div className="flex items-center gap-3 border border-light-border dark:border-dark-border p-3 rounded-2xl bg-foreground/[0.02]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-black dark:bg-primary/20">
              RK
            </div>
            <div className="overflow-hidden">
              <h4 className="text-xs font-bold text-foreground truncate">Rahul Kumar</h4>
              <p className="text-[10px] text-muted-foreground truncate">rahul@example.com</p>
            </div>
          </div>

          {/* Sidebar Menu Links */}
          <nav className="flex flex-col gap-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl text-primary bg-primary/5 dark:bg-primary/10"
            >
              <Activity className="h-4 w-4" />
              <span>Overview</span>
            </Link>
            <Link
              href="/#tools"
              className="flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl text-muted-foreground hover:text-foreground hover:bg-foreground/5 dark:hover:bg-white/5 transition-colors"
            >
              <PlusCircle className="h-4 w-4" />
              <span>Use Tools</span>
            </Link>
            <Link
              href="/#pricing"
              className="flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl text-muted-foreground hover:text-foreground hover:bg-foreground/5 dark:hover:bg-white/5 transition-colors"
            >
              <Database className="h-4 w-4" />
              <span>Subscriptions</span>
            </Link>
          </nav>
        </div>

        {/* Logout */}
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl text-red-500 hover:bg-red-500/5 transition-colors mt-8"
        >
          <LogOut className="h-4 w-4" />
          <span>Log Out</span>
        </Link>
      </aside>

      {/* Main Dashboard Section */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-black text-foreground">Welcome Back, Rahul Kumar</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Here is your document activity and server compiler performance.
            </p>
          </div>
          <Link
            href="/#tools"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-md hover:bg-primary-hover transition-colors"
          >
            Start Converting
          </Link>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Live Files Compiled */}
          <div className="border border-light-border bg-light-card dark:border-dark-border dark:bg-dark-card rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-muted-foreground uppercase">Live Files Compiled</span>
              <Layers className="h-4 w-4 text-neon-cyan" />
            </div>
            <h3 className="text-xl font-black text-foreground font-mono">
              {liveCompiled.toLocaleString()}
            </h3>
            <p className="text-[10px] text-muted-foreground mt-1">Files compiled globally</p>
          </div>

          {/* Average Delay */}
          <div className="border border-light-border bg-light-card dark:border-dark-border dark:bg-dark-card rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-muted-foreground uppercase">Conversion Delay</span>
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-xl font-black text-foreground font-mono">1.2 seconds</h3>
            <p className="text-[10px] text-muted-foreground mt-1">Average server response</p>
          </div>

          {/* Resolution Rate */}
          <div className="border border-light-border bg-light-card dark:border-dark-border dark:bg-dark-card rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-muted-foreground uppercase">Resolution Rate</span>
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
            </div>
            <h3 className="text-xl font-black text-foreground font-mono">99.8%</h3>
            <p className="text-[10px] text-muted-foreground mt-1">Nominal transaction rate</p>
          </div>

          {/* Active Compilers */}
          <div className="border border-light-border bg-light-card dark:border-dark-border dark:bg-dark-card rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-muted-foreground uppercase">Active Compilers</span>
              <Activity className="h-4 w-4 text-neon-purple" />
            </div>
            <h3 className="text-xl font-black text-foreground font-mono flex items-center gap-2">
              <span>{activeCompilers} / 12 Online</span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
              </span>
            </h3>
            <p className="text-[10px] text-muted-foreground mt-1">Processing cluster nodes</p>
          </div>
        </div>

        {/* Dynamic Analytics & History Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent History Table */}
          <div className="lg:col-span-2 border border-light-border bg-light-card dark:border-dark-border dark:bg-dark-card rounded-2xl p-6 shadow-sm flex flex-col">
            <h3 className="text-base font-bold text-foreground mb-4">Recent File Conversions</h3>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-light-border dark:border-dark-border text-muted-foreground font-bold">
                    <th className="pb-3">File Name</th>
                    <th className="pb-3">Utility Tool</th>
                    <th className="pb-3">Size</th>
                    <th className="pb-3">Date</th>
                    <th className="pb-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-border dark:divide-dark-border font-medium text-foreground/90">
                  {recentFiles.map((file) => (
                    <tr key={file.name}>
                      <td className="py-3.5 flex items-center gap-2 max-w-[180px] truncate">
                        <File className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">{file.name}</span>
                      </td>
                      <td className="py-3.5">{file.tool}</td>
                      <td className="py-3.5 text-muted-foreground">{file.size}</td>
                      <td className="py-3.5 text-muted-foreground">{file.date}</td>
                      <td className="py-3.5 text-right">
                        <button
                          onClick={() => alert(`Downloading ${file.name} (simulated)`)}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-foreground/5 hover:bg-primary/10 hover:text-primary text-muted-foreground transition-all cursor-pointer"
                          aria-label="Download File"
                        >
                          <Download className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Usage Gauges */}
          <div className="border border-light-border bg-light-card dark:border-dark-border dark:bg-dark-card rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-foreground mb-6">User Limits & Usage</h3>
            <div className="space-y-6">
              {/* Limit 1: Free Conversions */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-foreground">Monthly Conversions</span>
                  <span className="text-primary">14 / 20 Used</span>
                </div>
                <div className="w-full bg-foreground/5 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "70%" }} />
                </div>
              </div>

              {/* Limit 2: AI Queries */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-foreground">AI Queries Used</span>
                  <span className="text-neon-purple">2 / 5 Used</span>
                </div>
                <div className="w-full bg-foreground/5 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-neon-purple rounded-full" style={{ width: "40%" }} />
                </div>
              </div>

              {/* Limit 3: Storage usage */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-foreground">Vault Storage Capacity</span>
                  <span className="text-neon-cyan">45 MB / 100 MB</span>
                </div>
                <div className="w-full bg-foreground/5 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-neon-cyan rounded-full" style={{ width: "45%" }} />
                </div>
              </div>

              {/* Premium upgrade promo */}
              <div className="border border-dashed border-neon-purple/30 bg-neon-purple/5 p-4 rounded-xl mt-8 text-center relative overflow-hidden">
                <h4 className="text-xs font-black text-neon-purple uppercase flex items-center justify-center gap-1">
                  <Cpu className="h-3.5 w-3.5 fill-current" />
                  Upgrade Pro Tier
                </h4>
                <p className="text-[10px] text-muted-foreground mt-1 max-w-[200px] mx-auto leading-relaxed">
                  Unlock 2GB uploads, unlimited AI summaries, and high speed conversion lanes.
                </p>
                <Link
                  href="/#pricing"
                  className="mt-3 inline-flex h-8 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-neon-purple px-4 text-[10px] font-bold text-white shadow hover:opacity-95 transition-opacity"
                >
                  View Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
