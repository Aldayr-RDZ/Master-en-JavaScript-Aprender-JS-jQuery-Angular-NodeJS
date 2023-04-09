'use strict'

// CONDICIONAL IF 
// instrucciones que nos permite comparar 2 valores o hacer una comparacion en conctreta para hacer una decision u otra

var edad = 34;
var nombre  = 'Angel Aldayr'

/*
// operadores relacionales 
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: == 
    Distinto: !=
*/


if(edad >= 18){
    console.log(nombre + " tiene "+edad+" años, es mayor de edad")

    if(edad <=33){
        console.log('Todavia eres milenial')
    }else if(edad >=70){
        console.log("Eres anciano")
    }else{
        console.log("Ya no eres milenial")
    }
}else{
    console.log(nombre + " tiene "+edad+" años, es menor de edad")
}


/*
// Operadores lógicos 
AND(Y): &&
OR(O): ||
NEGACION: !
*/

var year= 2018;
//Negacion
if(year != 2016){
    console.log("El año no es 2023 en realidad es: "+ year)
}
//AND
if(year >= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en la era actual")
}else{
    console.log("Estamos en la era post moderna")
}

if(year == 2008 || (year == 2018 && year == 2028)){
    console.log("El año acaba en 8")
}else{
    console.log("Año no registrado")
}


// var edad1= 30;
// var edad2= 12;

// Si pasa esto
// if(edad1 > edad2){
//     //ejecuta esto 
//     console.log("Edad 1 es mayor que Edad 2")
// }else{
//     console.log("Edad 1 es inferior")
// }


