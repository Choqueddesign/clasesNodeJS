/*setTimeout(()=>{


})*/
//var, let, const

/*var nombre = "Daniela"
function cambiarNombre(nombreCambiar){//scode, ambito o bloque de fucion
    var nombre = nombreCambiar
    console.log(nombreEnElScope)
}

cambiarNombre("Pepito")
console.log(nombre)
*/

let globalVariable = "Soy una variable del scope global";
console.log("Estoy imprimiendo desde scope global de la varible global " +globalVariable);

function testScopeFunction(){
    let localVariable = "LOCAL"
    console.log("Estoy imprimiendo desde scope local de la funcion testScopeFunction "+ globalVariable)
    console.log("Estoy imprmiendo desde el scope local la variable "+ localVariable)
}
console.log(``)
testScopeFunction()