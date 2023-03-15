import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadoComponent } from './Componentes/actualizar-empleado/actualizar-empleado.component';
import { DetallesEmpleadoComponent } from './Componentes/detalles-empleado/detalles-empleado.component';
import { ListEmpleadosComponent } from './Componentes/list-empleados/list-empleados.component';
import { RegistrarEmpleadoComponent } from './Componentes/registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  {path: 'empleados', component:ListEmpleadosComponent},
  {path: '', redirectTo:'empleados',pathMatch:'full'},
  {path: 'registrar-empleado', component:RegistrarEmpleadoComponent},
  {path: 'actualizar-empleado/:id', component:ActualizarEmpleadoComponent},
  {path: 'detalles-empleado/:id', component:DetallesEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
