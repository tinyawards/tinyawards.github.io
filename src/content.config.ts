import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const content = defineCollection({
  loader: glob({ pattern: "[^_]*.md", base: "./src/pages/" }),
});

export const collections = { content };