/*function imprimirNombreMayusculas(nombre){
    let nombreMayus = nombre.toUpperCase()//mayusculas
    console.log(nombreMayus)
}

imprimirNombreMayusculas("Laura") */


//Arrow functions
const imprimirNombreEnMayusculas = (nombre) => {
    let nombreMayus = nombre.toUpperCase()
    console.log(nombreMayus)
}

imprimirNombreEnMayusculas("Laura")


function resultadoDeMultiplicar(numA,numB){
    return numA * numB
}

let resultadoDeMultiplicar = (numA,numB) => numAnumB

console.log(resultadoDeMultiplicar(3,3))