import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
  public titulo: string = "Componente de zapatillas";
  public zapatillas : Array<Zapatilla>;
  public marcas : String[];
  public color : string;
  public mi_marca!: string;
  
  constructor(
    private _zapatillasService: ZapatillaService
  ){
    this.mi_marca = 'Fila'
    this.color = 'yellow'
    this.marcas = new Array();
    this.zapatillas = []
  }

  ngOnInit() {
    this.zapatillas = this._zapatillasService.getZapatilas()
    alert(this._zapatillasService.getTexto())
    this.getMarcas();
    
  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla, index)=>{
      // Nike
      // Reebook 
      // Nike
      // Reebook
      // **Si esta zapatilla.marca en marcas me trae su indice que es de 0 a N**
      // **Si no esta zapatilla.marca en marcas me trae un -1**
      // como es la primera pasada indexOf traera un -1 ya que no cuenta con ningun elemento en su interior
      // entonces lo agrega
      // cuando se vuelve a topar a una marca que ya exista, es decir ya no te dara algo menor que 0 ya que ya sera un indice de 0 a N
      // entonces no lo agrega al array de marcas
    // console.log(zapatilla.marca)
    // console.log(this.marcas.indexOf(zapatilla.marca))
      if(this.marcas.indexOf(zapatilla.marca) < 0){
        this.marcas.push(zapatilla.marca);
      }
     
      
    })
    
  }


  getMarca(){
    alert(this.mi_marca)
  }

  addMarca(){
    this.marcas.push(this.mi_marca)
  }

  deleteMarca(indice: number){
    this.marcas.splice(indice, 1);
  }

  onBlur(){
    console.log("Haz salido del input")
  }

  mostrarPalabra(){
    alert(this.mi_marca)
  }

}
