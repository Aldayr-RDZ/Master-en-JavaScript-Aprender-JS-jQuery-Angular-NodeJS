import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform{
    
    // dato | calculadora :  otro dato 
    // parametro 1  | parametro 2
    transform(value: any, value_two: any) {
        let operaciones = `
            Suma: ${value + value_two} -
            Resta: ${value - value_two} -
            Multiplicación: ${value * value_two} -
            Division: ${value / value_two} -
        `
        return operaciones
    }
}