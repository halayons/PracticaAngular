import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-registrar-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent{
  empleado: Empleado=new Empleado();
  
  onSubmit(){
    console.log(this.empleado);
  }
  
}
