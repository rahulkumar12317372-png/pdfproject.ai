"use client";

import React, { useState, useRef, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  UploadCloud,
  File,
  X,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { toolsData, getToolIcon, Tool } from "@/data/tools";

type UploadState = "idle" | "dragging" | "selected" | "processing" | "completed";

export default function ToolPage() {
  const params = useParams();
  const router = useRouter();
  const toolId = params.id as string;
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Upload States
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  // Retrieve current tool data
  const tool = useMemo(() => {
    return toolsData.find((t) => t.id === toolId);
  }, [toolId]);

  // Retrieve related tools
  const relatedTools = useMemo(() => {
    if (!tool) return [];
    return toolsData
      .filter((t) => t.category === tool.category && t.id !== tool.id)
      .slice(0, 3);
  }, [tool]);

  if (!tool) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <AlertCircle className="h-16 w-16 text-primary mb-4" />
        <h1 className="text-2xl font-black text-foreground">Tool Not Found</h1>
        <p className="mt-2 text-muted-foreground max-w-sm">
          The PDF tool you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-lg hover:bg-primary-hover transition-all"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const IconComponent = getToolIcon(tool.iconName);

  // Handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (uploadState === "idle") {
      setUploadState("dragging");
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    if (uploadState === "dragging") {
      setUploadState("idle");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
      setUploadState("selected");
    } else {
      setUploadState("idle");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      setUploadState("selected");
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    setProgress(0);
    setUploadState("idle");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const startProcessing = () => {
    if (!selectedFile) return;
    setUploadState("processing");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadState("completed");
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setProgress(0);
    setUploadState("idle");
  };

  // Helper to format file size
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="flex-1 w-full bg-light-bg dark:bg-dark-bg py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-4xl">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary mb-8 group select-none"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Tools</span>
        </Link>

        {/* Tool Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                <IconComponent className="h-6 w-6" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-foreground">
                {tool.title}
              </h1>
              {tool.isAI && (
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-bold text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 border border-purple-500/20 shadow-sm animate-pulse">
                  <Sparkles className="h-3 w-3" />
                  AI-Powered
                </span>
              )}
            </div>
            <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
              {tool.description}
            </p>
          </div>
        </div>

        {/* Uploader Box Wrapper */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            {/* Idle and Dragging States */}
            {(uploadState === "idle" || uploadState === "dragging") && (
              <motion.div
                key="dropzone"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={triggerFileSelect}
                className={`relative flex flex-col items-center justify-center min-h-[350px] rounded-3xl border-2 border-dashed p-8 text-center cursor-pointer select-none transition-all duration-300 ${
                  uploadState === "dragging"
                    ? "border-primary bg-primary/5 dark:bg-primary/10 scale-[1.01]"
                    : "border-light-border bg-light-card/60 dark:border-dark-border dark:bg-dark-card/60 hover:border-primary/50 hover:bg-light-card"
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.html"
                  className="hidden"
                />
                
                <motion.div
                  animate={{
                    y: uploadState === "dragging" ? [-5, 5, -5] : 0,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 mb-6"
                >
                  <UploadCloud className="h-9 w-9" />
                </motion.div>
                
                <h3 className="text-lg font-black text-foreground">
                  {uploadState === "dragging" ? "Drop your files here!" : "Drag & Drop your files here"}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                  or click to select files from your computer or phone.
                </p>
                <div className="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-foreground text-background px-6 text-sm font-bold shadow-md hover:bg-foreground/90 transition-colors">
                  Select File
                </div>
              </motion.div>
            )}

            {/* Selected File State */}
            {uploadState === "selected" && selectedFile && (
              <motion.div
                key="selected"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex flex-col items-center justify-center min-h-[350px] rounded-3xl border border-light-border bg-light-card dark:border-dark-border dark:bg-dark-card p-8 text-center select-none"
              >
                <div className="flex items-center gap-4 border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg p-5 rounded-2xl max-w-md w-full relative mb-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <File className="h-6 w-6" />
                  </div>
                  <div className="text-left overflow-hidden flex-1">
                    <h4 className="text-sm font-bold text-foreground truncate">
                      {selectedFile.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {formatBytes(selectedFile.size)}
                    </p>
                  </div>
                  <button
                    onClick={removeFile}
                    className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-foreground/5 text-muted-foreground hover:text-foreground cursor-pointer"
                    aria-label="Remove File"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <button
                    onClick={removeFile}
                    className="h-12 border border-light-border dark:border-dark-border px-6 rounded-xl font-bold text-sm text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                  >
                    Change File
                  </button>
                  <button
                    onClick={startProcessing}
                    className="h-12 bg-primary px-8 rounded-xl font-bold text-sm text-white shadow-lg shadow-primary/20 hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {tool.isAI ? "Generate with AI" : "Process PDF"}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Processing State */}
            {uploadState === "processing" && selectedFile && (
              <motion.div
                key="processing"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex flex-col items-center justify-center min-h-[350px] rounded-3xl border border-light-border bg-light-card dark:border-dark-border dark:bg-dark-card p-8 text-center select-none"
              >
                <div className="h-12 w-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin mb-6" />
                <h3 className="text-lg font-black text-foreground">
                  Processing document...
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm mb-8">
                  Applying conversions and formatting settings. This takes just a moment.
                </p>

                {/* Progress Bar */}
                <div className="w-full max-w-md bg-foreground/10 dark:bg-white/10 h-2.5 rounded-full overflow-hidden mb-2">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <span className="text-xs font-bold text-primary">{progress}% Complete</span>
              </motion.div>
            )}

            {/* Completed State */}
            {uploadState === "completed" && selectedFile && (
              <motion.div
                key="completed"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex flex-col items-center justify-center min-h-[350px] rounded-3xl border border-light-border bg-light-card dark:border-dark-border dark:bg-dark-card p-8 text-center select-none"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 mb-6"
                >
                  <CheckCircle2 className="h-10 w-10 fill-current bg-transparent" />
                </motion.div>
                
                <h3 className="text-xl font-black text-foreground">
                  Ready to download!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm mb-8">
                  Your file has been successfully processed and structured.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <button
                    onClick={handleReset}
                    className="h-12 border border-light-border dark:border-dark-border px-6 rounded-xl font-bold text-sm text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                  >
                    Convert Another
                  </button>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Simulating file download!");
                    }}
                    className="h-12 bg-emerald-500 px-8 rounded-xl font-bold text-sm text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Download File
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Related Tools Section */}
        {relatedTools.length > 0 && (
          <div className="mt-20 border-t border-light-border dark:border-dark-border pt-12">
            <h3 className="text-xl font-black text-foreground mb-6">
              Other Related Tools
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {relatedTools.map((t, idx) => {
                const ToolIcon = getToolIcon(t.iconName);
                return (
                  <Link
                    key={t.id}
                    href={`/tools/${t.id}`}
                    onClick={handleReset}
                    className="flex items-center gap-4 rounded-2xl border border-light-border bg-light-card p-5 hover:border-primary/30 hover:shadow-md dark:border-dark-border dark:bg-dark-card transition-all group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                      <ToolIcon className="h-5 w-5" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {t.title}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate mt-0.5">
                        {t.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
