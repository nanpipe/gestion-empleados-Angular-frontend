import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/Services/empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent {

  constructor(private empleadoServicio:EmpleadoService,private router: Router){

  }
  empleado: Empleado = new Empleado();

  ngOnInit(): void{
    console.log(this.empleado);
  }

  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato =>{
      console.log(dato);
      this.listarEmpleados();
    },error => console.log(error));
  }

  listarEmpleados(){
    this.router.navigate(['/empleados']);
  }
  onSubmit(){
    this.guardarEmpleado();
  }
}
