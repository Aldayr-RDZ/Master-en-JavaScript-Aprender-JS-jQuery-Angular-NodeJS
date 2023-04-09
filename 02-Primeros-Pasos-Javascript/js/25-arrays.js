'use strict'

// Arrays, Arreglos, Matrices

/*
    Coleccion de datos
*/

var nombre = "Victor Robles";

var nombres = ['Aldayr Rodriguez', 'Victor Robles', "Javier Rodriguez", 23, true];

var lenguajes = new Array("Python", "JS", "Go", "Java")


// console.log(nombes[2]) //imprimir el elemento que esta en el indice 2
console.log(nombres.length)
console.log(nombres)
console.log(nombres.length)

// var elemento = parseInt(prompt("¿Que elemento del array quieres?",0))
// if(elemento >= nombres.length){
//     alert("Introduce el numero correcto menor que "+ nombres.length)
// }else{
// alert("El usuario seleccionado es: "+ nombres[elemento])
    
// }

document.write("<h1>Lenguajes de programación del 2022</h1>");
document.write("<ul>")

// for normal 
// for(var i=0; i<lenguajes.length; i++){
//     document.write("<li>"+lenguajes[i]+"</li>")
// }


/// foreach
// lenguajes.forEach((elemento, indice)=>{
//     document.write("<li>"+indice+" - "+elemento+"</li>")
// })

// for in
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>")
}

document.write("</ul>")


//Busquedas
var precios = [10, 20, 50, 80, 12]


//find te trae el texto 

// var busqueda = lenguajes.find(function(lenguaje){
//     return lenguaje == "Python"
// })


// // hacerlo con arrow function
// var busqueda = lenguajes.find(lenguaje => lenguaje == "Python")

// // findindex te devuelve el indice
// var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "Python")

var busqueda = precios.some(precio => precio <10)
console.log(busqueda)