'use strict'


/*
    Utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
    hasta introducir un numero negativo y ahi mostrar el resultado

*/

var contador = 0;
var suma = 0
do{
    var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo: ", 0))
    
    
    if(isNaN(numero)){
        numero = 0;
    }else if(numero>0){
        suma = suma + numero
        contador ++
    }

}while(numero >= 0)

alert("la suma de todos los numeros es: "+ suma)
alert("La media es: "+ (suma/contador))