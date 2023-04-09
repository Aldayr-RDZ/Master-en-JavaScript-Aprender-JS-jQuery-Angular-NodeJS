import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contactoUsuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;
  public show_data: any

  constructor(){
    this.usuario = new ContactoUsuario('', '', '', '')

  }
  
  ngOnInit(): void {
    
  }

  onSubmit(form : any){
    this.show_data = this.usuario
    // form.reset()
    // console.log("Evento submit lanzado")
    console.log(this.show_data)
  }

}
