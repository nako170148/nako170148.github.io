// src/content.config.ts
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(300),
    date: z.string().optional(),          // "2025-08-20" など（並び替えに使うなら推奨）
    order: z.number().optional(),         // 手動並び順（小さいほど先頭）
    tags: z.array(z.string()).optional(),
    tech: z.array(z.string()).optional(), // 使用技術
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(),         // 例: "/images/projects/travel-sns.png"
    featured: z.boolean().optional(),
  }),
});

export const collections = { projects };