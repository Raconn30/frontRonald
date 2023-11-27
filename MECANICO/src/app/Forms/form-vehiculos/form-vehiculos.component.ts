import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-vehiculos',
  templateUrl: './form-vehiculos.component.html',
  styleUrls: ['./form-vehiculos.component.css']
})
export class FormVehiculosComponent {
  constructor(){}

  vehiculosForm = new FormGroup({
    marca: new FormControl<string>(null, [Validators.required]),
    color: new FormControl<string>(null, [Validators.required]),
    placa: new FormControl<string>(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
    anio: new FormControl<string>(null, [Validators.required]),
  });

  hasUnitNumber = false;

  onSubmit(): void {
    if (this.vehiculosForm.valid) {
      Swal.fire('Felicidades', 'Registro exitoso', 'success');
    } else {
      Swal.fire('Error', 'Credenciales incorrectas', 'error');
    }
  }

  public mensajeDeError(formControl: string): string {
    if (this.vehiculosForm.controls[formControl].hasError('required')) {
      return 'Este campo es requerido';
    }
    if (this.vehiculosForm.controls[formControl].hasError('maxlength')) {
      let valor =
        this.vehiculosForm.controls[formControl].errors['maxlength']
          .requiredLength;
      return 'Máximo de ' + valor + ' carácteres';
    }
    if (this.vehiculosForm.controls[formControl].hasError('minlength')) {
      let valor =
        this.vehiculosForm.controls[formControl].errors['minlength']
          .requiredLength;
      return 'Mínimo de ' + valor + ' carácteres';
    }
    if (this.vehiculosForm.controls[formControl].hasError('pattern')) {
      return 'Este campo solo puede contener números';
    }
    return '';
  }
}
