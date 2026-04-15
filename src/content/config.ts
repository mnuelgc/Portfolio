import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	type: "content",
	schema: z.object({
		locale: z.enum(["en", "es"]),
		projectId: z.string(),
		name: z.string(),
		fecha: z.string(),
		img: z.string(),
		resume: z.string(),
		stack: z.array(z.string()),
	}),
});

export const collections = { projects };
