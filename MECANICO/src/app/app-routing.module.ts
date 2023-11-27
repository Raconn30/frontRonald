import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { MecanicosComponent } from './Components/mecanicos/mecanicos.component';
import { FormClientesComponent } from './Forms/form-clientes/form-clientes.component';
import { FormVehiculosComponent } from './Forms/form-vehiculos/form-vehiculos.component';

const routes: Routes = [
  {path: 'Vehiculos',component:VehiculosComponent},
  {path: 'Clientes',component:ClientesComponent},
  {path: 'Mecanicos',component:MecanicosComponent},
  {path: 'form-clientes',component:FormClientesComponent},
  {path: 'form-vehiculos',component:FormVehiculosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
