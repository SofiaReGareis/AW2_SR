//creamos las funciones para trabajar con el json

export const obtener_genero = (obj, genero) => {
    const res = obj.filter(e => e.genero == genero)
    return res
}

export const obtener_promedio = (obj, key) => {
    let cantidadDePeliculas = obj.length
    let total = 0
    let res = 0

    obj.forEach(e => {
        total += e[key] 
    })
    
    res = total/cantidadDePeliculas

    //total = obj.reduce((acc,cur) => {acc + cur.duracion},0)
    return res
}