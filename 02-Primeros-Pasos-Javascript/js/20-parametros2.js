'use strict'

// Parametros REST y SPREAD

function listadoFrutas(frtua1, fruta2, ...todas_las_frutas){
    console.log("Fruta 1: ", frtua1);
    console.log("Fruta 2: ", fruta2);
    console.log(todas_las_frutas)
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Guayaba", "Coco");



var frutas = ["Naranja", "Manzana"]
listadoFrutas( ...frutas, "Sandia", "Pera", "Guayaba", "Coco");