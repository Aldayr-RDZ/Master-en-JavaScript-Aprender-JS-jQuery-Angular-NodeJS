'use strict'


// Transformacione de textos
var numero = 444;
var texto1 = "Bienvenido al curso de Javascript curso de Victor Robles"
var texto2 = "Es muy buen curso"


var busqueda = texto1.indexOf("curso") // te traera el indice del dato que le pasaste sino te dara un -1
var busqueda = texto1.lastIndexOf("curso") // te traera el indice del ultimo dato
var busqueda = texto1.search("curso") // alias de indexOf
var busqueda = texto1.match("curso") // coleccion de los resultados que encuentre
var busqueda = texto1.substr(14, 5) // desde que indice caracter y cuantos caracteres quiero 
var busqueda = texto1.charAt(44) // seleccionar una letra concreta del string
var busqueda = texto1.startsWith("Bi") // da verdadero si el string empieza con lo que le pusiste de paramtero 
var busqueda  = texto1.includes("ola") 
var busqueda = texto1.replace("Javascript", "ECMAScript") // remplazar
var busqueda = texto1.slice(14) // parte el string desde el indice que le dices hasta el indice que le indiques 
var busqueda = texto1.split(" ") // ingresa el string en un array y lo separa por lo que le pases
var busqueda = texto1.trim() // quitar los espacios por delante y detras
console.log(busqueda)



// var dato = numero.toString();
//     dato = texto1.toLowerCase();
//     dato = texto1.toUpperCase();
// // console.log(dato)
// // console.log(typeof(dato))

// // calcular longitud

// var nombre = "Angel";

// // console.log(nombre.length)

// // concatenar (unir textos)

// // var texto_total = texto1 + " "+ texto2
// var texto_total = texto1.concat(" "+texto2)
// console.log(texto_total)