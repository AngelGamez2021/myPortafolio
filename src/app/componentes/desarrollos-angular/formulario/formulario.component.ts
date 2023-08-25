import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.form = this.fb.group({

      nombre: ['', [Validators.required, Validators.minLength(8)]],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password1: ['', Validators.required, [Validators.required, Validators.minLength(8)]],
      password2: ['', Validators.required]

    })
  }

  guardar() {
    console.log(this.form);

  }
  limpiar() {
    this.form.reset();
  }

}
