import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/Services/empleado.service';

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.css']
})
export class DetallesEmpleadoComponent {

  
  constructor(private empleadoServicio:EmpleadoService,private router: ActivatedRoute){

  }
  id: number;
  empleado: Empleado = new Empleado();

  ngOnInit(): void{
    this.id = this.router.snapshot.params['id'];
    this.empleadoServicio.obtenerEmpleado(this.id).subscribe(dato => {
      console.log(dato);
    this.empleado = dato;
    },error => console.log(error));
  }
}
