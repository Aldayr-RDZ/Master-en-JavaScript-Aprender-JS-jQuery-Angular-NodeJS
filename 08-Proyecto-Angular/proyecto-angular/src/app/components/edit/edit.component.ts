import { Component, OnInit } from '@angular/core';
// importar el modelo
import { Project } from 'src/app/models/project';

// importar el servicio 
import { ProjectService } from 'src/app/services/project.service';

import { UploadService } from 'src/app/services/upload.service';

import { NgForm } from '@angular/forms';

import { Global } from 'src/app/services/global';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public status!: string;
  public filesToUpload!: Array<File>;
  public save_project: any;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute,

  ) {
    this.title = "Editar proyecto"
    this.url = Global.url
    this.project = new Project('','','','',0,'','')
  }

  ngOnInit(): void {
    
    this._route.params.subscribe({
      next: (params) =>{
        
        let id = params['id']
        
        this.getProject(id)
      }
    })
  }

  getProject(id: any) {
    this._projectService.getProject(id).subscribe({
      next: (response) => {
        
        this.project = response.project
        
      },
      error: (e) => console.log(e)
    })
  }

  onSubmit(form: NgForm) {
    this._projectService.updateProject(this.project).subscribe({
      next: (response) => {
        if (response.project) {
          
          if (this.filesToUpload) {
            //subir la imagen
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                // guardo el proyecto en un atributo para poder usarlo en el html <Ir al html>
                this.save_project = result.project
                this.status = 'success';

              })
          }else{
            this.save_project = response.project
            this.status = 'success';
          }

        } else {
          this.status = 'failed'
        }
      },
      error: (e) => console.log(e)
    })
  }

  fileChangeEvent(fileInput: any) {
    
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }


}
