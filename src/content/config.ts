import { defineCollection, z } from 'astro:content';

const CATEGORIES = ['Veda', 'Purana', 'Chalisa', 'Stotra', 'Gita', 'Other'] as const;

const librarySchema = z.object({
  title: z.string(),
  author: z.string().optional(),
  description: z.string(),
  chapter: z.number().optional(),
  language: z.string().default('Sanskrit'),
  category: z.enum(CATEGORIES),
  coverColor: z.string().optional(), // hex or hsl for generated cover art
});

export const collections = {
  library: defineCollection({
    type: 'content',
    schema: librarySchema,
  }),
};

export type LibraryEntry = z.infer<typeof librarySchema>;
export type Category = typeof CATEGORIES[number];
export { CATEGORIES };
