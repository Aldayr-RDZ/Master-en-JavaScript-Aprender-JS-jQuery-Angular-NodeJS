'use strict'

// DOM - Document Object Model 

function cambiaColor (color){
    caja.style.background = color
}

//Conseguir elementos con un id en concreto 

// var caja = document.getElementById("micaja");

//querySelector
var caja = document.querySelector("#micaja");


caja.innerHTML = "Hola soy un texto desde javascript";
caja.style.background = "red"
caja.style.padding = "20px"
caja.style.color = "white"
caja.className = "hola"


// console.log(caja)


// Como conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div")
// var contenidoEnTexto = todosLosDivs[2];
// console.log(todosLosDivs);
// contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento"
// contenidoEnTexto.style.background = "blue"
var seccion = document.querySelector("#miseccion")
var hr = document.createElement("hr");



for( let valor in todosLosDivs){
    
    if(typeof todosLosDivs[valor].textContent == "string"){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
    
}
    
seccion.append(hr)




// Como conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background = "yellow"

for(let div in divsRojos){
    if(divsRojos[div].className == 'rojo'){
        divsRojos[div].style.background = "red"
    }
    
}


// query selector id 
var id = document.querySelector("#encabezado")
console.log(id)

var clasesRojo = document.querySelectorAll(".rojo")
console.log(clasesRojo)