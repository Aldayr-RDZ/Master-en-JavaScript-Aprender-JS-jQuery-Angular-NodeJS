'use strict'

// Funciones anonimas 

/*
    Es una funcion que no tiene nombre 

*/


// funcion anonima
// var pelicula = function(nombre){
//     return "La pelicula es: " + nombre
// }



function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1+numero2
    sumaYmuestra(sumar)
    sumaPorDos(sumar)
    return sumar
}

sumame(5,7, function(dato){
    console.log("La suma es: ", dato);
},
    function(dato){
        console.log("La suma por dos es: ", (dato*2))
    }
)

sumame(5,7, (dato) => {
    console.log("La suma es: ", dato);
},
    dato =>{ // si pasas mas de 1 parametro es recomendable ()
        console.log("La suma por dos es: ", (dato*2))
    }
)