'use strict'

// Localstorage

// Comprobar disponibilidad de localstorage
if( typeof Storage !== 'undefined'){
    console.log("Localstorage disponible")
}else{
    console.log("Localstorage no disponible")
}

// Guardar datos
localStorage.setItem("titulo", 'Curso de Javascript de Victor Robles')

// Recuperar elemento 
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// guardar objeto json 
var usuario  = {
    nombre : 'Angel Aldayr',
    email: "angel@angel.com",
    web:'aldayr.com'
};

// mando en formato str json 
localStorage.setItem("usuario", JSON.stringify(usuario))


// Recuperar objeto de localstorage
// utilizo parse para recuperar un jsonstr a un json objeto
var userjs = JSON.parse(localStorage.getItem("usuario"))
console.log(userjs)
document.querySelector("#datos").append(" "+userjs.web+" - "+ userjs.nombre)
localStorage.clear()