'use strict'

// JSON  -  Javascript Object Notation

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas =[
    {titulo: "La verdad duele", year:2000, pais:"No se"},
    pelicula
]

var caja_peliculas = document.querySelector("#peliculas")
for(let indice in peliculas){
    var parrafo = document.createElement("p");
    parrafo.append(peliculas[indice].titulo + " - " + peliculas[indice].year)
    caja_peliculas.append(parrafo)
}