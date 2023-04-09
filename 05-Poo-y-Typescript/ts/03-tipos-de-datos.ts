type letraonumeros = string | number

/// string 
let cadena: letraonumeros = "Angel Aldayr Rodriguez Gonzalez";
cadena = 22

// number
let numero: number = 23;

// boleano 
let verdadero_falso: boolean = true;

// any 
let cualquiera: any = "hola";
cualquiera= 20;

// array 
var lenguajes: Array<any> = ["Python", "C", "C++", "JS"]

let years: number[] = [12, 22, 34, 10 ,22]

// let vs var 
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 =44;
    var numero2 = 55;
    console.log(numero1, numero2)
}
console.log(numero1, numero2)
// var tiene un alcance global 
// let tiene un alcance a nivel de bloque, es decir solo se usara en un bloque de codigo 


console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years)