import { Component, Input } from '@angular/core';
import { Employee } from '../employee.componet';

@Component({
  selector: 'app-employee-son-c',
  templateUrl: './employee-son-c.component.html',
  styleUrls: ['./employee-son-c.component.css']
})
export class EmployeeSonCComponent {

  @Input() employee:Employee;
  @Input() i:number;


  arrayCarateristics = [''];
  addCarateristic(newCarateristic:string){
    this.arrayCarateristics.push(newCarateristic);
  }
}
