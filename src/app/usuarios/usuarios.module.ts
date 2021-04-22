import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
export interface Personas {
  
  nombre: string;
  apellidos : string;
  direccion : string;
  pais : string;
  codigopostal : number;
  estudios : string;
  ocupacion :string;


}