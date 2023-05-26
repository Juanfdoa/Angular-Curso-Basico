import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { DataServiceService } from '../data-service.service';
import { Employee } from '../employee.componet';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private router:Router, private myService:EmployeeServiceService, 
    private employeeService:DataServiceService, private route:ActivatedRoute){}

    action:number;

    ngOnInit(): void {

      this.action= this.route.snapshot.queryParams['action'];

      this.indice=this.route.snapshot.params['id'];

      let employeeUP:Employee=this.employeeService.findEmployee(this.indice);

      this.nameSpace = employeeUP.name;
      this.surnameSpace = employeeUP.surname;
      this.chargeSpace = employeeUP.charge;
      this.salarySpace = employeeUP.salary;  
    }

 /* UpdateEmployee(){
    let myEmployee = new Employee(this.nameSpace, this.surnameSpace, this.chargeSpace, this.salarySpace);
    //this.myService.ShowMessage("EmployeeName: " + myEmployee.name + " " + myEmployee.surname)
    //this.employees.push(myEmployee);
    //this.employees = [ ...this.employees, myEmployee ];
    this.employeeService.updateEmployeeService(this.indice ,myEmployee);

    this.goHome();

  };

  DeleteEmployee(){
    this.employeeService.deleteEmployeeService(this.indice);
    this.goHome();
  }
  */

  UpdateEmployee(){
    if(this.action == 1 ){
      let myEmployee = new Employee(this.nameSpace, this.surnameSpace, this.chargeSpace, this.salarySpace);
    //this.myService.ShowMessage("EmployeeName: " + myEmployee.name + " " + myEmployee.surname)
    //this.employees.push(myEmployee);
    //this.employees = [ ...this.employees, myEmployee ];
    this.employeeService.updateEmployeeService(this.indice ,myEmployee);
    }
    else
    {
      this.employeeService.deleteEmployeeService(this.indice);
    }
    
    this.goHome();
  };
  

  nameSpace:string = "";
  surnameSpace:string = "";
  chargeSpace:string = "";
  salarySpace:number = 0;

  indice:number=0;

goHome(){
  this.router.navigate([""]);
}
}
