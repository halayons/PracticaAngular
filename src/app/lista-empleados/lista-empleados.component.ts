import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent {
  empleados:Empleado[];
  constructor(private empleadoServicio:EmpleadoService){
    this.obtenerEmpleados();
  }
  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato =>{
      this.empleados=dato;
    })
  }
  
  /* empleados =[{
    "id":1,
    "nombre":"Christian",
    "apellido" : "Ramirez",
    "email" : "cristian29@gmail.com"
  },
  {"id":2,
  "nombre":"Gabriel",
  "apellido" : "Ramirez",
  "email" : "gabriel20@gmail.com"}];  */

}
