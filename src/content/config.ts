import { defineCollection, z } from "astro:content"
// z --> zod  schema4 (zod = biblioteca para validadr esquemas)


const projectsEN = defineCollection({
    schema: z.object({
        name : z.string(),
        fecha: z.string(),
        img: z.string(),
        resume: z.string(),
        stack: z.string()
    })
})


const projectsES = defineCollection({
    schema: z.object({
        name : z.string(),
        fecha: z.string(),
        img: z.string(),
        resume: z.string(),
        stack: z.string()
    })
})

export const collections = {projectsES, projectsEN}