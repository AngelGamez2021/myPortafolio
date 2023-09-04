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

  get nombreValido() {
    return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched;
  }
  get apellidoValido() {
    return this.form.get('apellido')?.invalid && this.form.get('apellido')?.touched;
  }
  get correoValido() {
    return this.form.get('correo')?.invalid && this.form.get('correo')?.touched;
  }
  get passwordValido() {
    return this.form.get('password')?.invalid && this.form.get('password')?.touched;
  }
  // get password2Valido() {
  //   return this.form.get('password2')?.invalid && this.form.get('password2')?.touched;
  // }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.form = this.fb.group({

      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      // password2: ['', Validators.required]

    }, {
      // Validators:this.passwordIguales('password1','password2')
    })
  }

  guardar() {
    console.log(this.form);

    // this.passNoValido();

    // si el formulario es invalido
    if (this.form.invalid) {
    }
    // vamos a recorrer cada valor de los controls y vas a mostrar el alerta de cual no se está llenando
    return Object.values(this.form.controls).forEach(control => {

      control.markAllAsTouched();

    })


  }
  limpiar() {
    this.form.reset();
  }

  //   // aqui tomamos los valores digitados para compararlos 
  //   passNoValido(){
  //     const pass1 = this.form.get('password1')?.value;
  //     const pass2 = this.form.get('password2')?.value;

  //     if(pass1 !== pass2){
  //       return true;
  //     }else{
  //       return false;
  //     }

  //   }

  // // aqui atrapamos los valores para validators
  //   passwordIguales(pass1Name: string, pass2Name: string){


  //     return (formgroup: FormGroup)=>{

  //       const pass1Control = formgroup.get(pass1Name);
  //       const pass2Control = formgroup.get(pass2Name);

  //       // si el valor de pass1 y es igual a pass2, no hay error
  //       if(pass1Control?.value === pass2Control?.value){

  //         pass2Control?.setErrors(null)

  //       }else{
  //         pass2Control?.setErrors({noEsIgual: true})
  //       }


  //     }
  //   }

}
