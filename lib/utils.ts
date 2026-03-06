import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
  }).format(new Date(date));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}

export const statusLabels = {
  completed: "Concluído",
  "in-progress": "Em desenvolvimento",
  concept: "Conceito",
} as const;

export const statusColors = {
  completed: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "in-progress": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  concept: "text-violet-400 bg-violet-400/10 border-violet-400/20",
} as const;
