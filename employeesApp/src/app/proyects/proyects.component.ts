import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { DataServiceService } from '../data-service.service';
import { Employee } from '../employee.componet';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {

  constructor(private router:Router, private myService:EmployeeServiceService, private employeeService:DataServiceService){}


  AddEmployee(){
    let myEmployee = new Employee(this.nameSpace, this.surnameSpace, this.chargeSpace, this.salarySpace);
    //this.myService.ShowMessage("EmployeeName: " + myEmployee.name + " " + myEmployee.surname)
    //this.employees.push(myEmployee);
    //this.employees = [ ...this.employees, myEmployee ];
    this.employeeService.addEmployeeService(myEmployee);

    this.goHome();

  };

  nameSpace:string = "";
  surnameSpace:string = "";
  chargeSpace:string = "";
  salarySpace:number = 0;

goHome(){
  this.router.navigate([""]);
}

}
