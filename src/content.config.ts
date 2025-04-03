// Import the glob loader
import { glob } from "astro/loaders";

// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const news = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/collections/news" }),
    schema: z.object({
        date: z.date(),
    })
});

const publications = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/collections/publications" }),
    schema: z.object({
        title: z.string(),
        authors: z.string(),
        conference: z.string(),
        year: z.number(),
        award: z.string().optional(),
        links: z.array(z.object({
            url: z.string(),
            showas: z.string().optional(),
        })).or(z.null()),
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = { news, publications };