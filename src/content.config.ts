import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    category: z.enum(['software', 'research', 'visualization', 'tool', 'notes']),
    year: z.string(),
    language: z.string().optional(),
    repoName: z.string().optional(),
    summary: z.string(),
    summaryZh: z.string(),
    tags: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    highlightsZh: z.array(z.string()).default([]),
    links: z
      .object({
        github: z.url().optional(),
        pypi: z.url().optional(),
        demo: z.url().optional(),
        gallery: z.url().optional(),
        paper: z.url().optional(),
      })
      .default({}),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    year: z.number(),
    date: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    venueShort: z.string(),
    type: z.enum(['journal', 'preprint', 'conference']),
    selected: z.boolean().default(false),
    isTemplate: z.boolean().default(false),
    abstract: z.string().optional(),
    abstractZh: z.string().optional(),
    tags: z.array(z.string()).default([]),
    links: z
      .object({
        paper: z.url().optional(),
        preprint: z.url().optional(),
        code: z.url().optional(),
        gallery: z.url().optional(),
        slides: z.url().optional(),
      })
      .default({}),
    bibtex: z.string().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    lang: z.enum(['en', 'zh']),
    slugKey: z.string(),
    title: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    readingTime: z.number().default(3),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
  }),
});

export const collections = { projects, publications, notes };
