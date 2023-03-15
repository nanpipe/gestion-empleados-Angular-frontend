import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmpleadosComponent } from './Componentes/list-empleados/list-empleados.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './Componentes/registrar-empleado/registrar-empleado.component'
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './Componentes/actualizar-empleado/actualizar-empleado.component';
import { DetallesEmpleadoComponent } from './Componentes/detalles-empleado/detalles-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    DetallesEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
