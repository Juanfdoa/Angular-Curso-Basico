import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-carateristics-employee-comp',
  templateUrl: './carateristics-employee-comp.component.html',
  styleUrls: ['./carateristics-employee-comp.component.css']
})
export class CarateristicsEmployeeCompComponent {

  constructor(private miservice:EmployeeServiceService) {
    
  }

  @Output() employeeCarateristics = new EventEmitter<string>();

  addNewCarateristic(value:string){
    this.miservice.ShowMessage("Carateristic: " + value)
    this.employeeCarateristics.emit(value);
  }
}
