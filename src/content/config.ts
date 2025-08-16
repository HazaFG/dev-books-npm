//Tenemos que hacer una coleccion, tenemos que indicarle de alguna forma, que estos libros son una coleccion, vamos a explicar que atributos tiene nuestra coleccion

import { defineCollection, z } from "astro:content";
// z -> zod schema

//Esto esta muy bien , porque ya le estamos definiendo que es lo que esperamos de los libros, de los markdowns, la verdad muy bien, zod nos va a ayudar a hacer el esquema, y typescript hara la magia despues
const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string().url(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string(),
      usa: z.string(),
    })
  })
})

export const collections = { books }
