
 
/*
OBTENER FORMATO DE FECHA: YYYY-MM-DD
en español: DD-MM-YYYY
padStart --> mes 4 = mes 04
*/

import dayjs from "dayjs"; //libreria para fecha
const fechaActual = dayjs()
/*const fechaActual = new Date()

const anio = fechaActual.getFullYear()
const mes = (fechaActual.getMonth() +1).toString().padStart(2,'0')
const dia = fechaActual.getDay().toString().padStart(2,'0')

//FORMATO YYYY-MM-DD
const formatoBD = `${anio}-${mes}-${dia}`
const formatoES = `${dia}-${mes}-${anio}`
console.log(formatoBD)
console.log(formatoES)*/ 

const formatoBD = fechaActual.format('YYYY-MM-DD')
const formatoES = fechaActual.format('DD-MM-YYYY')

console.log(formatoBD)
console.log(formatoES)