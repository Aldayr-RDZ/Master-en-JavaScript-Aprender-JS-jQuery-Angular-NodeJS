'use strict'
/*
1. Pida 6 numeros por pantalla y los ingrese a un array
2. Tiene que mostrar todos los elementos del array en el cuerpo de la pagina y en la consola 
3. Ordenarlo y mostrarlo 
4. Invertir su orden y mostrarlo 
5. Mostrar cuantos elementos tiene el array 
6. Busqueda de 1 valor introducido por el usuario, que nos diga si lo encuentra y su indice 
*/


function mostrarArray(numeros, texto=""){
    document.write("<h1> Contenido del array "+texto+" </h1>")
    document.write("<ul>")
    for(var i = 0; i<numeros.length; i++){
        document.write("<li>"+i+" - "+numeros[i]+"</li>")
        
    }
    document.write("</ul>")
}

var numeros = new Array()
var capturar = ""
var contador = 0
do{
    capturar  = parseInt(prompt("Ingrese el numero", 0))
    numeros.push(capturar)
    console.log
    contador ++
}
while(contador <= 5)

//mostrar en el texto de la pagina 
mostrarArray(numeros)

// mostrar por consola
console.log(numeros)

// ordenar y mostrar
numeros.sort((a,b)=> a-b)
mostrarArray(numeros, "Contenido del array ordenado")

// invertir y mostrar 
numeros.sort((a,b)=> b-a)
mostrarArray(numeros, "Contenido del array ordenado de manera invertida")

// contar elementos 
document.write("<h1>El array tiene: "+numeros.length+" </h1>")

//busqueda
var busqueda = parseInt(prompt("busca un numero",0))
var posicion = numeros.findIndex(numero =>numero == busqueda)
if(posicion && posicion!= -1){
    document.write("<hr/><h1>Encontrado</h1>")
    document.write("<h1>Posicion de la busqueda: "+ posicion +"</h1>")
}else{
    document.write("<h1>No encontrado</h1>")
}


// // foreach
// numeros.forEach((elem , index)=>{
//     document.write("<li>"+index+" - "+elem+"</li>")
// })

// // for in 
// for( let numero in numeros ){
//     document.write("<li>"+numero+" - "+numeros[numero]+"</li>")
// }


// 


// Ordeno de menor a mayor
// numeros.sort((a,b)=> a-b)
// document.write("<h1> Los elementos del array ordenado de menor a mayor son: </h1>")
// document.write("<ul>")

// for normal
// for(var i = 0; i<numeros.length; i++){
//     document.write("<li>"+i+" - "+numeros[i]+"</li>")
//     console.log("<li>"+i+" - "+numeros[i]+"</li>")
// }


// // foreach
// numeros.forEach((elem , index)=>{
//     document.write("<li>"+index+" - "+elem+"</li>")
// })

// // for in 
// for( let numero in numeros ){
//     document.write("<li>"+numero+" - "+numeros[numero]+"</li>")
// }


// document.write("</ul>")

// Ordeno de mayor a menor
// numeros.sort((a,b)=> b-a)
// document.write("<h1> Los elementos del array ordenado de mayor a menor son: </h1>")
// document.write("<ul>")

// for normal
// for(var i = 0; i<numeros.length; i++){
//     document.write("<li>"+i+" - "+numeros[i]+"</li>")
//     console.log("<li>"+i+" - "+numeros[i]+"</li>")
// }


// // foreach
// numeros.forEach((elem , index)=>{
//     document.write("<li>"+index+" - "+elem+"</li>")
// })

// // for in 
// for( let numero in numeros ){
//     document.write("<li>"+numero+" - "+numeros[numero]+"</li>")
// }




