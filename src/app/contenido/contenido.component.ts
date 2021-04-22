import { Component, OnInit } from '@angular/core';
import {Personas} from './../usuarios/usuarios.module';
import {UsuariosService} from './../usuarios.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {ModalComponent} from './../modal/modal.component'


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  users: any;
  listado = [];


  constructor(private usuariosService: UsuariosService) {
    
   }

  ngOnInit(): void {
    this.usuariosService.getPersonas().subscribe(data => {
      this.users = data.results;
    });
   
  }

  
}
