import {
  FileText,
  Presentation,
  FileSpreadsheet,
  Image,
  Code,
  Archive,
  FileCode,
  Edit,
  LayoutGrid,
  RotateCw,
  Crop,
  Hash,
  Stamp,
  Lock,
  Unlock,
  EyeOff,
  PenTool,
  Scan,
  Languages,
  Wrench,
  Columns,
  FormInput,
  Sparkles,
  Globe,
  Minimize2,
  Eraser,
  Video,
  Music,
} from "lucide-react";

export type ToolCategory = "convert" | "edit" | "security" | "scan" | "ai";

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  isAI?: boolean;
  iconName: string;
}

export const toolsData: Tool[] = [
  // CONVERT TOOLS
  {
    id: "pdf-to-powerpoint",
    title: "PDF to PowerPoint",
    description: "Convert your PDF presentations to editable PPTX slide decks.",
    category: "convert",
    iconName: "Presentation",
  },
  {
    id: "pdf-to-excel",
    title: "PDF to Excel",
    description: "Extract tables from PDF files into Microsoft Excel spreadsheets.",
    category: "convert",
    iconName: "FileSpreadsheet",
  },
  {
    id: "word-to-pdf",
    title: "Word to PDF",
    description: "Convert DOCX and DOC documents to highly compatible PDF format.",
    category: "convert",
    iconName: "FileText",
  },
  {
    id: "powerpoint-to-pdf",
    title: "PowerPoint to PDF",
    description: "Convert PPT and PPTX presentation slides into PDF files.",
    category: "convert",
    iconName: "Presentation",
  },
  {
    id: "excel-to-pdf",
    title: "Excel to PDF",
    description: "Make XLS and XLSX spreadsheets easy to read by converting to PDF.",
    category: "convert",
    iconName: "FileSpreadsheet",
  },
  {
    id: "pdf-to-jpg",
    title: "PDF to JPG",
    description: "Convert each PDF page into a high-quality JPG image.",
    category: "convert",
    iconName: "Image",
  },
  {
    id: "jpg-to-pdf",
    title: "JPG to PDF",
    description: "Convert images (JPG, PNG, WEBP) into a single optimized PDF.",
    category: "convert",
    iconName: "Image",
  },
  {
    id: "html-to-pdf",
    title: "HTML to PDF",
    description: "Save web pages as PDF documents while maintaining layout.",
    category: "convert",
    iconName: "Code",
  },
  {
    id: "pdf-to-pdfa",
    title: "PDF to PDF/A",
    description: "Convert PDF to PDF/A format for long-term archiving and compliance.",
    category: "convert",
    iconName: "Archive",
  },
  {
    id: "pdf-to-markdown",
    title: "PDF to Markdown",
    description: "Convert your PDF document into Markdown text format.",
    category: "convert",
    iconName: "FileCode",
  },

  // EDIT & ORGANIZE TOOLS
  {
    id: "edit-pdf",
    title: "Edit PDF",
    description: "Add text, shapes, images, and notes to your PDF files directly.",
    category: "edit",
    iconName: "Edit",
  },
  {
    id: "organize-pdf",
    title: "Organize PDF",
    description: "Rearrange, add, delete, or merge pages within your PDF document.",
    category: "edit",
    iconName: "LayoutGrid",
  },
  {
    id: "rotate-pdf",
    title: "Rotate PDF",
    description: "Rotate one or multiple pages in your PDF to portrait or landscape.",
    category: "edit",
    iconName: "RotateCw",
  },
  {
    id: "crop-pdf",
    title: "Crop PDF",
    description: "Crop the margins or specific areas of your PDF pages.",
    category: "edit",
    iconName: "Crop",
  },
  {
    id: "page-numbers",
    title: "Page Numbers",
    description: "Add page numbers to your PDF with custom positioning and formatting.",
    category: "edit",
    iconName: "Hash",
  },
  {
    id: "watermark",
    title: "Watermark",
    description: "Add text or image watermarks to protect your PDF files.",
    category: "edit",
    iconName: "Stamp",
  },

  // SECURITY TOOLS
  {
    id: "protect-pdf",
    title: "Protect PDF",
    description: "Encrypt your PDF with a strong password to restrict access.",
    category: "security",
    iconName: "Lock",
  },
  {
    id: "unlock-pdf",
    title: "Unlock PDF",
    description: "Remove passwords, encryptions, and copy-paste locks from PDFs.",
    category: "security",
    iconName: "Unlock",
  },
  {
    id: "redact-pdf",
    title: "Redact PDF",
    description: "Permanently blackout sensitive information and text from PDFs.",
    category: "security",
    iconName: "EyeOff",
  },
  {
    id: "sign-pdf",
    title: "Sign PDF",
    description: "Sign documents online with custom digital or hand-drawn signatures.",
    category: "security",
    iconName: "PenTool",
  },

  // SCAN & REPAIR TOOLS
  {
    id: "scan-to-pdf",
    title: "Scan to PDF",
    description: "Scan documents from your webcam or camera directly into PDF format.",
    category: "scan",
    iconName: "Scan",
  },
  {
    id: "ocr-pdf",
    title: "OCR PDF",
    description: "Convert scanned PDFs into selectable and searchable text documents.",
    category: "scan",
    iconName: "Languages",
  },
  {
    id: "repair-pdf",
    title: "Repair PDF",
    description: "Fix corrupted, damaged, or unreadable PDF files and recover data.",
    category: "scan",
    iconName: "Wrench",
  },
  {
    id: "compare-pdf",
    title: "Compare PDF",
    description: "Compare two PDFs side-by-side to highlight text and design changes.",
    category: "scan",
    iconName: "Columns",
  },
  {
    id: "pdf-forms",
    title: "PDF Forms",
    description: "Create, edit, fill, and flatten interactive PDF forms.",
    category: "scan",
    iconName: "FormInput",
  },

  // AI TOOLS
  {
    id: "ai-summarizer",
    title: "AI Summarizer",
    description: "Instant analysis of long PDFs. Extract summaries, key points, and FAQ.",
    category: "ai",
    isAI: true,
    iconName: "Sparkles",
  },
  {
    id: "translate-pdf",
    title: "Translate PDF",
    description: "Translate your PDF into 50+ languages while preserving layout.",
    category: "ai",
    isAI: true,
    iconName: "Globe",
  },
  {
    id: "jpg-to-png",
    title: "JPG to PNG",
    description: "Convert JPG images to PNG format with alpha transparency support.",
    category: "convert",
    iconName: "Image",
  },
  {
    id: "image-resizer",
    title: "Image Resizer",
    description: "Resize images to custom dimensions (pixels or percentage) easily.",
    category: "edit",
    iconName: "Minimize2",
  },
  {
    id: "ai-image-enhancer",
    title: "AI Image Enhancer",
    description: "Upscale and enhance blurry images using neural network processing.",
    category: "ai",
    isAI: true,
    iconName: "Sparkles",
  },
  {
    id: "background-remover",
    title: "Background Remover",
    description: "Isolate subjects and remove backgrounds from photos automatically.",
    category: "ai",
    isAI: true,
    iconName: "Eraser",
  },
  {
    id: "video-to-gif",
    title: "Video to GIF",
    description: "Convert video clips (MP4, WEBM) into lightweight animated GIFs.",
    category: "convert",
    iconName: "Video",
  },
  {
    id: "audio-converter",
    title: "Audio Converter",
    description: "Convert between audio formats (MP3, WAV, M4A, FLAC) instantly.",
    category: "convert",
    iconName: "Music",
  },
];

// Helper function to map a string name to its Lucide icon component
export function getToolIcon(iconName: string) {
  switch (iconName) {
    case "Presentation":
      return Presentation;
    case "FileSpreadsheet":
      return FileSpreadsheet;
    case "FileText":
      return FileText;
    case "Image":
      return Image;
    case "Code":
      return Code;
    case "Archive":
      return Archive;
    case "FileCode":
      return FileCode;
    case "Edit":
      return Edit;
    case "LayoutGrid":
      return LayoutGrid;
    case "RotateCw":
      return RotateCw;
    case "Crop":
      return Crop;
    case "Hash":
      return Hash;
    case "Stamp":
      return Stamp;
    case "Lock":
      return Lock;
    case "Unlock":
      return Unlock;
    case "EyeOff":
      return EyeOff;
    case "PenTool":
      return PenTool;
    case "Scan":
      return Scan;
    case "Languages":
      return Languages;
    case "Wrench":
      return Wrench;
    case "Columns":
      return Columns;
    case "FormInput":
      return FormInput;
    case "Sparkles":
      return Sparkles;
    case "Globe":
      return Globe;
    case "Minimize2":
      return Minimize2;
    case "Eraser":
      return Eraser;
    case "Video":
      return Video;
    case "Music":
      return Music;
    default:
      return FileText;
  }
}
