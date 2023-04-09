"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// Clase (Molde del objeto)
let Camiseta = class Camiseta {
    //Constructor Inicializa los atributos y no retorna un valor 
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = color;
        this.marca = marca;
        this.talla = marca;
        this.precio = precio;
    }
    // Métodos (Funciones o acciones del objeto)
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
};
Camiseta = __decorate([
    estampar("Gucci Gang")
], Camiseta);
// Clase hija
class Sudadera extends Camiseta {
    constructor(color, modelo, marca, talla, precio, capucha) {
        super(color, modelo, marca, talla, precio);
        this.capucha = capucha;
    }
    setCapucha(capucha) {
        this.capucha = capucha;
    }
    getCapucha() {
        return this.capucha;
    }
}
var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 100);
console.log(camiseta);
// camiseta.estampacion()
var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "Nike", "L", 100, true);
console.log(sudadera_nike);
// camiseta.setColor("Rojo")
// camiseta.color = "Rojo";
// camiseta.modelo = "Manga Larga";
// camiseta.marca = "Nike";
// camiseta.talla = "L";
// camiseta.precio = 1000
// var playera = new Camiseta();
// playera.setColor("Azul")
// playera.color = "Azul";
// playera.modelo = "Manga Corta";
// playera.marca = "Adidas";
// playera.talla = "L";
// playera.precio = 15
