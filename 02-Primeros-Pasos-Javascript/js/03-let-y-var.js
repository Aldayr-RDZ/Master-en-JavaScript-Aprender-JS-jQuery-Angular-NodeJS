'use strict'
// let y var
alert("Hola")

// prueba con var
var numero = 40; // valor 40
console.log(numero)
if(true){
    var numero = 50;
    console.log(numero) // valor 50
}

console.log(numero) // valor 50

// prueba con let 
let texto = "Curso js"
console.log(texto) // el valor es el mismo

if(true){
    let texto = "Curso Laravel 5"
    console.log(texto) //valor Laravel 5
}

console.log(texto) //el valor va hacer js