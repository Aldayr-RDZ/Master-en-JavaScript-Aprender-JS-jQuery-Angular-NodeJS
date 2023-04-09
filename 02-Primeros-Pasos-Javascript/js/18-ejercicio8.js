'use strict'

/*
    Calculadora que pida 2 numeros por pantalla
    Si metemos uno mal que nos los vuelva a pedir 
    En el cuerpo de la pagina, en una alerta y por la consola el resultado de 
    sumar, restar, multiplicar y dividir esas dos cifras
*/

var numero1 = parseInt(prompt("Ingrese el primer número:", 0))
var numero2 = parseInt(prompt("Ingrese el segundo número:", 0))

while( numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer número", 0))
    numero2  = parseInt(prompt("Introduce el segundo número", 0))
}

var resultado = "La suma es: "+(numero1+numero2) +"<br/>"+
                "La resta es: "+(numero1-numero2)+"<br/>"+
                "La multiplicación es: "+(numero1*numero2)+"<br/>"+
                "La división es: "+(numero1/numero2)+"<br/>"

                
var resultado_2= "La suma es: "+(numero1+numero2) +"\n"+
"La resta es: "+(numero1-numero2)+"\n"+
"La multiplicación es: "+(numero1*numero2)+"\n"+
"La división es: "+(numero1/numero2)+"\n"


document.write(resultado)
alert(resultado_2)
console.log(resultado_2)