import { Injectable } from '@angular/core';
import { Usuario } from '../crud/interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

    
  listUsuarios: Usuario[] = [
    {usuario: 1, nombre: 'Hydrogen', apellido: 'Hilton', sexo: 'Masculino'},
    {usuario: 2, nombre: 'Helium', apellido: 'Allen', sexo: 'Femenino'},
    {usuario: 3, nombre: 'Lithium', apellido: 'Mosk', sexo: 'Masculino'},
    {usuario: 4, nombre: 'Beryllium', apellido: 'Smith', sexo: 'Masculino'},
    {usuario: 5, nombre: 'Boron', apellido: 'Ryffo', sexo: 'Masculino'},
    {usuario: 6, nombre: 'Carbon', apellido: 'Rig', sexo: 'Masculino'},
    {usuario: 7, nombre: 'Nitrogen', apellido: 'Bellany', sexo: 'Masculino'},
    {usuario: 8, nombre: 'Oxygen', apellido: 'Mersh', sexo: 'Masculino'},
    {usuario: 9, nombre: 'Fluorine', apellido: 'Land', sexo: 'Femenino'},
    {usuario: 10, nombre: 'Neon', apellido: 'Juli', sexo: 'Femenino'},
  ];


  constructor() { }

  getUsuario(){
    // el slice te devuelve una copia del listado de usuarios
    return this.listUsuarios.slice();
  }

  deleteUsuario(index: number){
    // Splice!!!! entra al array y busca el indice a eliminar y la cantidad a eliminar
    this.listUsuarios.splice(index, 1)
  }
}
