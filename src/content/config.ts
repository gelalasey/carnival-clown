import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.date(), 
        updatedDate: z.date().optional(),
        image: z.union([
            z.string(), // allow plain URLs
            z.object({  // allow object format
                src: z.string(),
                alt: z.string().optional(),
            }),
        ]).optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };