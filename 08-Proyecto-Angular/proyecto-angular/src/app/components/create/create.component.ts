import { Component, OnInit } from '@angular/core';

// importar el modelo
import { Project } from 'src/app/models/project';

// importar el servicio 
import { ProjectService } from 'src/app/services/project.service';

import { UploadService } from 'src/app/services/upload.service';

import { NgForm } from '@angular/forms';

import { Global } from 'src/app/services/global';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status!: string;
  public filesToUpload!: Array<File>;
  public save_project: any;
  public url: string

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.title = "Crear Proyecto"
    this.project = new Project('', '', '', '', 0, '', '')
    this.url = Global.url
  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    console.log(this.project)
    // guardar los datos
    this._projectService.saveProject(this.project).subscribe({
      next: (response) => {
        if (response.project) {


          //subir la imagen
          if (this.filesToUpload) {
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                // guardo el proyecto en un atributo para poder usarlo en el html <Ir al html>
                this.save_project = result.project
                this.status = 'success';
                form.reset()
              })
          }else{
            this.save_project = response.project
                this.status = 'success';
                form.reset()
          }



        } else {
          this.status = 'failed'
        }
      },
      error: (e) => console.log(e)
    })
  }

  fileChangeEvent(fileInput: any) {
    console.log(fileInput)
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
