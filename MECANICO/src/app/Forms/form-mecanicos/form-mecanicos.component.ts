import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-mecanicos',
  templateUrl: './form-mecanicos.component.html',
  styleUrls: ['./form-mecanicos.component.css']
})
export class FormMecanicosComponent {
  constructor(){}

  mecanicosForm = new FormGroup({
    nombre: new FormControl<string>(null, [Validators.required]),
    apellido: new FormControl<string>(null, [Validators.required]),
    celular: new FormControl<string>(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
  });


  hasUnitNumber = false;

  onSubmit(): void {
    if (this.mecanicosForm.valid) {
      Swal.fire('Felicidades', 'Registro exitoso', 'success');
    } else {
      Swal.fire('Error', 'Credenciales incorrectas', 'error');
    }
  }

  public mensajeDeError(formControl: string): string {
    if (this.mecanicosForm.controls[formControl].hasError('required')) {
      return 'Este campo es requerido';
    }
    if (this.mecanicosForm.controls[formControl].hasError('maxlength')) {
      let valor =
        this.mecanicosForm.controls[formControl].errors['maxlength']
          .requiredLength;
      return 'Máximo de ' + valor + ' carácteres';
    }
    if (this.mecanicosForm.controls[formControl].hasError('minlength')) {
      let valor =
        this.mecanicosForm.controls[formControl].errors['minlength']
          .requiredLength;
      return 'Mínimo de ' + valor + ' carácteres';
    }
    if (this.mecanicosForm.controls[formControl].hasError('pattern')) {
      return 'Este campo solo puede contener números';
    }
    return '';
  }
}
