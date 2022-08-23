var a; // declarando
var b = 'b'; // declarando y asignando
b = 'bb' // reasignacion
var a = 'aa' // redeclaracion

console.log(fruit) //llamar a la variable antes de su asignacion nos devuelve undefined
//Global Scope
var fruit = 'apple'; // global
// console.log(fruit2) -> nos devuelve error
function bestFruit(){
    // var fruit2 = "orange" -> variables declaradas y asignadas dentro de una funcion solo son accesibles dentro de la mismma funcion donde se fue declarada
    console.log(fruit)//accede dentro de la funcion tambienn 
    // console.log(fruit2)
}

bestFruit();
console.log(fruit)//y luego de ella
// console.log(fruit2)
