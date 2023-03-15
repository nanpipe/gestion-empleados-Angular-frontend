import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/Services/empleado.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent {

  constructor(private empleadoServicio:EmpleadoService,private routerAct: ActivatedRoute,private router: Router){

  }
  id: number;
  empleado: Empleado = new Empleado();

  ngOnInit(): void{
    this.id = this.routerAct.snapshot.params['id'];
    this.empleadoServicio.obtenerEmpleado(this.id).subscribe(dato => {
      console.log(dato);
      this.empleado = dato;
    },error => console.log(error));
  }

  actualizarEmpleado(){
    this.empleadoServicio.actualizarEmpleado(this.empleado.id,this.empleado).subscribe(dato =>{
      console.log(dato);
      this.listarEmpleados();
    },error => console.log(error));
  }

  listarEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    this.actualizarEmpleado();
  }

}
