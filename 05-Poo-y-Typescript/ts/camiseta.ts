// Interface es un contrato con el cual deben de cumplir 
interface CamisetaBase{
    setColor(color: string) : void;
    getColor(): string;
}

// Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function(): void{
            console.log("Camiseta estampada con el logo de: "+ logo)
        }
    }
}


// Clase (Molde del objeto)
@estampar("Gucci Gang")
class Camiseta implements CamisetaBase{
    // Propiedades (Atributos - Caracteristicas del objeto )
    // public se puede acceder desde cualquiera 
    // protected desde que la clase que lo define y si hereda
    // private desde la clase que los define 

    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;


    //Constructor Inicializa los atributos y no retorna un valor 
    constructor(color: string, modelo: string, marca: string, talla: string, precio: number) {
        this.color = color;
        this.modelo = color;
        this.marca = marca;
        this.talla = marca;
        this.precio = precio
    }

    // Métodos (Funciones o acciones del objeto)

    public setColor(color: string) {
        this.color = color
    }

    public getColor() {
        return this.color
    }

}

// Clase hija
class Sudadera extends Camiseta {
    public capucha: boolean;

    constructor(color: string, modelo: string, marca: string, talla: string, precio: number, capucha: boolean) {

        super(color, modelo, marca, talla, precio);
        this.capucha = capucha
    }

    setCapucha(capucha: boolean) {
        this.capucha = capucha
    }

    getCapucha(): boolean {
        return this.capucha
    }
}


var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 100);
console.log(camiseta)
// camiseta.estampacion()
var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "Nike", "L", 100, true)
console.log(sudadera_nike)
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


