import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string ;
  public followers: number;

  constructor(
    
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.nombre = ''
    this.followers = 0;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      // this.nombre = params.nombre
      this.nombre = params['nombre']
      this.followers = +params['followers']
      // console.log(this.nombre)
      // console.log(this.followers)
      // console.log(params)
      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home'])
      }
    })
  }

  redirigir(){
    this._router.navigate(['/videojuegos'])
  }

}
