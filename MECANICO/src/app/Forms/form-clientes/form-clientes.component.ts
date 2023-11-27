import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent {
  constructor(){}

  clientesForm = new FormGroup({
    nombre: new FormControl<string>(null, [Validators.required]),
    apellido: new FormControl<string>(null, [Validators.required]),
    celular: new FormControl<string>(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    email: new FormControl<string>(null, [Validators.email])
  });


  hasUnitNumber = false;

  onSubmit(): void {
    if (this.clientesForm.valid) {
      Swal.fire('Felicidades', 'Registro exitoso', 'success');
    } else {
      Swal.fire('Error', 'Credenciales incorrectas', 'error');
    }
  }

  public mensajeDeError(formControl: string): string {
    if (this.clientesForm.controls[formControl].hasError('required')) {
      return 'Este campo es requerido';
    }
    if (this.clientesForm.controls[formControl].hasError('maxlength')) {
      let valor =
        this.clientesForm.controls[formControl].errors['maxlength']
          .requiredLength;
      return 'Máximo de ' + valor + ' carácteres';
    }
    if (this.clientesForm.controls[formControl].hasError('minlength')) {
      let valor =
        this.clientesForm.controls[formControl].errors['minlength']
          .requiredLength;
      return 'Mínimo de ' + valor + ' carácteres';
    }
    if (this.clientesForm.controls[formControl].hasError('pattern')) {
      return 'Este campo solo puede contener números';
    }
    if (this.clientesForm.controls[formControl].hasError('email')) {
      return 'Ingrese un email example@example.com';
    }
    return '';
  }
}
