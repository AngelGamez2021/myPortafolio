import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../interfaces/usuarios.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuariosService } from '../../../services/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})


export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [];


  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuariosService, private _snackBar: MatSnackBar, public dialog: MatDialog ) { }

  ngOnInit(): void {  
    this.cargarUsuarios();
  }


  cargarUsuarios() {
    this.listUsuarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios);

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number){
      console.log(index);
      this._usuarioService.deleteUsuario(index);
      
      this._snackBar.open('el usuario fue eliminado con éxito', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      
      
      // despues de eliminar, cargamos nuevamente los usuarios
      this.cargarUsuarios();   
  }



  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CrearUsuarioComponent, {
      height: '60%',
      width: '60%'    
    });
  }


}
