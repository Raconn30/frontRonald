import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { MecanicosComponent } from './Components/mecanicos/mecanicos.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AvatarModule } from 'ngx-avatars';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormClientesComponent } from './Forms/form-clientes/form-clientes.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormVehiculosComponent } from './Forms/form-vehiculos/form-vehiculos.component';
import { FormMecanicosComponent } from './Forms/form-mecanicos/form-mecanicos.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    MenuComponent,
    ClientesComponent,
    MecanicosComponent,
    FormClientesComponent,
    FormVehiculosComponent,
    FormMecanicosComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AvatarModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
