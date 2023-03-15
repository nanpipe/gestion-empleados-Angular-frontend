import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  // Brings all employes



  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8081/api/v1/empleados"

  // Brings employees
  obtenerListaEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  registrarEmpleado(empleado: Empleado): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, empleado);
  }

  obtenerEmpleado(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`)
  }

  actualizarEmpleado(id: number, empleado: Empleado): Observable<object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado)
  }

  eliminarEmpleado(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
