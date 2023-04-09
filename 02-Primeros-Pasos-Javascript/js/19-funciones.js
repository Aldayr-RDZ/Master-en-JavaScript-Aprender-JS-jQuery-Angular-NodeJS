'use strict'

// Funciones
/*

    Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

*/

function porConsola(num1, num2){
    console.log("Suma: ", (num1+num2));
    console.log("Resta: ", (num1-num2));
    console.log("Dvisión: ", (num1/num2));
    console.log("Multiplicación: ", (num1*num2));
    
    console.log("----------------------------------")
}

function porPantalla(num1, num2){
    document.write("Suma: ", (num1+num2)+"<br/>");
    document.write("Resta: ", (num1-num2)+"<br/>");
    document.write("Dvisión: ", (num1/num2)+"<br/>");
    document.write("Multiplicación: ", (num1*num2)+"<br/>");
    
    document.write("----------------------------------")
}

// Defino la funcion 
function calculadora (num1, num2, mostrar = false){
    // Conjunto de instrucciones a ejecutar
    if(mostrar == false){
       porConsola(num1, num2)
    }else{
       porPantalla(num1, num2)
    }
    
    
}


// Invocar a la calculadora


// var resultado  = calculadora()
// console.log(resultado)

// var numero1 = parseInt(prompt("Ingrese el primer número:", 0))
// var numero2 = parseInt(prompt("Ingrese el segundo número:", 0))

// calculadora(numero1, numero2)
calculadora(10, 20)
calculadora(10, 50, true)





