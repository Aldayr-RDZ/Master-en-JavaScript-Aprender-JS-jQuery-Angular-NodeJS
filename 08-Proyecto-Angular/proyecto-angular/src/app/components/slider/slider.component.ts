import { Component, Input, Output, EventEmitter ,OnInit } from '@angular/core';
declare var $:any
 
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
 
 @Input() anchura!: number;
 @Input('etiquetas') captions!: boolean
 @Output() conseguirAutor = new EventEmitter();

 public autor: any;
 constructor(){
  this.autor ={
    nombre: "Angel Aldayr",
    website: "github.com/Aldayr-RDZ",
    email: 'angel@angel.com'
  }
 }
  
  ngOnInit(): void {
    console.log(this.anchura)
 
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: this.captions,
        slideWidth: this.anchura
      })
      //lanzamos evento
      this.conseguirAutor.emit(this.autor)
  }


  
  lanzar(event: any){
    
    this.conseguirAutor.emit(this.autor)
  }


}
