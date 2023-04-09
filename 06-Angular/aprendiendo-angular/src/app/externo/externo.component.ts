import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../services/peticiones.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers : [PeticionesServices]
})
export class ExternoComponent implements OnInit{
  public user : any;
  public userId: number;
  public fecha: any;

  public new_user: any;
  public usuario_guardado: any;


  constructor(
    private _peticionesService : PeticionesServices
  ){
    this.userId = 1
    this.new_user ={
      "name": "",
      "job": ""
  }
  }

  ngOnInit() {
   this.cargaUsuario()
   this.fecha = new Date()
   
  }

  cargaUsuario(){
    this.user = false
    // asi se hace ahora
    this._peticionesService.getUser(this.userId).subscribe(
      {
        next: (result) => {
          this.user = result.data
        },
        error: (e) => console.log(e),
      }
    )
    // asi se hacia antes
    // this._peticionesService.getUser().subscribe(
    //   result =>{
    //     this.user = result.data
    //   },
    //   error =>{
    //     console.log(<any>error)
    //   }
    // )
  }

  onSubmit(form: NgForm){
    this._peticionesService.addUSer(this.new_user).subscribe(
      {
        next: (response)=>{
          console.log(response)
          form.resetForm()
          this.usuario_guardado = response
        },
       error: (e) => console.log(e)
      }
    )
    
    // this._peticionesService.addUSer(this.new_user).subscribe(
    //   response =>{
    //     console.log(response)
    //     form.reset()
    //   },
    //   error =>{
    //     console.log(<any>error)
    //   }
    // )

  }
}
