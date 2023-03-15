import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../empleado';
import { EmpleadoService } from '../../Services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent {
  
    constructor(private empleadoServicio:EmpleadoService,private router: Router){

    }
    empleados:Empleado[];
    empleado:Empleado;

    ngOnInit(){
      this.obtenerEmpleados();


    }

    private obtenerEmpleados(){
      this.empleadoServicio.obtenerListaEmpleados().subscribe(dato => {
        this.empleados = dato;
      })
    }


    actualizarEmpleado(id:number){
      this.router.navigate(['actualizar-empleado',id]);
    }

    detallesEmpleado(id:number){
      this.router.navigate(['detalles-empleado',id]);
    }

     eliminarEmpleado(id:number){
      this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
        console.log(dato);
        this.obtenerEmpleados();
      })
    }
}
