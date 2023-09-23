import { Injectable } from '@angular/core';
import { Usuario } from '../crud/interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

    
  listUsuarios: Usuario[] = [
    {usuario: 'user1', nombre: 'Hydrogen', apellido: 'Hilton', sexo: 'Masculino'},
    {usuario: 'user2', nombre: 'Helium', apellido: 'Allen', sexo: 'Femenino'},
    {usuario: 'user3', nombre: 'Lithium', apellido: 'Mosk', sexo: 'Masculino'},
    {usuario: 'user4', nombre: 'Beryllium', apellido: 'Smith', sexo: 'Masculino'},
    {usuario: 'user5', nombre: 'Boron', apellido: 'Ryffo', sexo: 'Masculino'},
    {usuario: 'user6', nombre: 'Carbon', apellido: 'Rig', sexo: 'Masculino'},
    {usuario: 'user7', nombre: 'Nitrogen', apellido: 'Bellany', sexo: 'Masculino'},
    {usuario: 'user8', nombre: 'Oxygen', apellido: 'Mersh', sexo: 'Masculino'},
    {usuario: 'user9', nombre: 'Fluorine', apellido: 'Land', sexo: 'Femenino'},
    {usuario: 'user1', nombre: 'Neon', apellido: 'Juli', sexo: 'Femenino'},
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


  addUsuario(usuario: Usuario){
    // el meotodo unshift es como el meotodo push solo que este añadirá es al comienzo del array
    this.listUsuarios.unshift(usuario)
  }


}
