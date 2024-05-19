import { readFile } from 'fs/promises'
import { obtener_genero, obtener_promedio } from './utils/funciones.js'

// leemos el archivo usando top-level await y con
// codificación utf-8
const file = await readFile('./data/data.json', 'utf-8')

// transformamos el contenido en un JSON
const peliculas = JSON.parse(file)

//console.log(peliculas)
const peliculasDeTerror = obtener_genero(peliculas,"Terror")

//console.log(peliculasDeTerror)

const promedio_duracion = obtener_promedio(peliculas, "duracion")
const promedio_clasif = obtener_promedio(peliculas, "clasificacion")
console.log("promedio de duracion =>", promedio_duracion)
console.log("promedio de clasificacion =>", promedio_clasif)







