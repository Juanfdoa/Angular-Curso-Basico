import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.componet';
import { EmployeeServiceService } from '../employee-service.service';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Employee list';

  constructor(private myService:EmployeeServiceService, private employeeService:DataServiceService) {
    //this.employees = this.employeeService.employees;

  }

  ngOnInit(): void {
    //this.employees = this.employeeService.employees;
    this.employeeService.GetAllEmployees().subscribe(
      myEmployees =>{
        console.log(myEmployees);
        this.employees = Object.values(myEmployees);
        
        this.employeeService.setEmployee(this.employees);
      }
    );
  }

  employees: Employee[]=[];

  /*employees: Employee[]=[

    new Employee("Juan","Acevedo","Fullstack", 1500000),
    new Employee("Carlos","Perez","Backend", 1300000),
    new Employee("Andrea","Duarte","Fullstack", 1500000),
    new Employee("Laura","Diaz","Frontend", 1400000),
  ];*/

  AddEmployee(){
    let myEmployee = new Employee(this.nameSpace, this.surnameSpace, this.chargeSpace, this.salarySpace);
    //this.myService.ShowMessage("EmployeeName: " + myEmployee.name + " " + myEmployee.surname)
    //this.employees.push(myEmployee);
    //this.employees = [ ...this.employees, myEmployee ];
    this.employeeService.addEmployeeService(myEmployee);

  };

  nameSpace:string = "";
  surnameSpace:string = "";
  chargeSpace:string = "";
  salarySpace:number = 0;
}
