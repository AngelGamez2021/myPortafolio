import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../interfaces/usuarios.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})


export class UsuariosComponent implements OnInit {
  
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


    displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
    dataSource = new MatTableDataSource(this.listUsuarios);

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
 
    constructor() { }

  
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
