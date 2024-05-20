import { readFile } from 'fs/promises'


const file = await readFile('./data/ventas.json')

const ventas = JSON.parse(file)

ventas.map(e=>{
    console.log(e)
})
