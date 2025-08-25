import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string()).optional(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }).optional(),
    }),
});

export const collections = {
    blog: blog, // 👈 make sure this is exported
};