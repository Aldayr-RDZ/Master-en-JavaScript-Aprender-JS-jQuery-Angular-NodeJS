'use strict'

/*
    Que nos diga si un numero es par o impar 
    1- Ventana prompt
    2- Si no es valido que nos pida de nuevo el numero 
    
*/

var numero = parseInt(prompt("Ingrese un número: ",0))

while(isNaN(numero)){
    var numero = parseInt(prompt("Ingrese un número: ",0))
}

if(numero %2 == 0){
    alert("Es un número par")
}else{
    alert("Es impar")
}