import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";


@Injectable({
    providedIn: 'root'
})

export class ZapatillaService{
    public zapatillas : Array<Zapatilla>;
    constructor(){
        this.zapatillas =[
            new Zapatilla('Reebook Classic', 'Reebook','Blanco',40, true),
            new Zapatilla('Nike Air', 'Nike','Negro',80, true),
            new Zapatilla('Reebook Imperio', 'Reebook','Azul',180, true),
            new Zapatilla('Nike Air 2', 'Nike','Azul',60, false),
            new Zapatilla('Reebook Verdoso', 'Reebook','Azul',180, true),
            new Zapatilla('Adidas Azul', 'Adidas','Azul',180, true),
          ]
    }

    getTexto(){
        return "Hola mundo desde un servicio"
    }


    getZapatilas(): Array<Zapatilla> {
        return this.zapatillas
    }
}