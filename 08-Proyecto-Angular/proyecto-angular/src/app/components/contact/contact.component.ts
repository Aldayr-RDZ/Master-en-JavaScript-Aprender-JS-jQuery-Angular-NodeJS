
import { Component, OnInit, ViewChild } from '@angular/core';
// import * as $ from 'jquery'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean
  public autor: any;
  @ViewChild('textos', {static: true}) textos: any; //hacemos esto para acceder a la variable creada en el html

  constructor() {
    this.widthSlider = 0;
    this.anchuraToSlider = 0;
    this.captions = false
   }
 
  ngOnInit(): void {
      // alert(document.querySelector('#texto')?.innerHTML)
      // var opcion_clasica = document.querySelector('#texto')?.innerHTML acceder a los datos del dom tradicionalmente
      // alert(opcion_clasica)
      // console.log(this.textos.nativeElement.outerText) //imprimimos por consola el texto
  }
  
  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = false
  }

  getAutor(event:any){
    this.autor = event
  }
 
}