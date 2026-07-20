import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Filefusion AI | Free Online PDF Tools",
  description:
    "Every PDF tool you need, built in one place. Convert, edit, organize, protect, repair, and apply AI summarization to your PDFs instantly and securely.",
  keywords: [
    "Filefusion AI",
    "PDF",
    "iLovePDF alternative",
    "PDF converter",
    "PDF editor",
    "sign PDF",
    "secure PDF",
    "AI PDF summary",
    "translate PDF",
    "free PDF tools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-light-bg text-foreground transition-colors duration-300 dark:bg-dark-bg font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
