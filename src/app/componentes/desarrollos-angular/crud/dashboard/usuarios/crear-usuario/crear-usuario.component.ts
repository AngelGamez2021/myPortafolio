import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../interfaces/usuarios.interface';
import { UsuariosService } from 'src/app/componentes/desarrollos-angular/services/usuarios.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss'],
})
export class CrearUsuarioComponent implements OnInit {
  sexo: any[] = ['Masculino', 'Femenino'];
  form: FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuariosService, private router: Router) {
    this.form = fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  agregarUsuario() {
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
    };
    this._usuarioService.addUsuario(user),
    this.router.navigate(['/dashboard/usuarios'])


    console.log(user);
    
  }
}
