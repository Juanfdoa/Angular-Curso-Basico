import { Injectable } from '@angular/core';
import { Employee } from './employee.componet';
import { EmployeeServiceService } from './employee-service.service';
import { DataServices } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private serviceEmergentWondows: EmployeeServiceService, private httpClient:DataServices) {}
  
  setEmployee(myEmployees: Employee[]){
    this.employees = myEmployees
  }

  employees: Employee[]=[];

  /*employees: Employee[]=[

    new Employee("Juan","Acevedo","Fullstack", 1500000),
    new Employee("Carlos","Perez","Backend", 1300000),
    new Employee("Andrea","Duarte","Fullstack", 1500000),
    new Employee("Laura","Diaz","Frontend", 1400000),
  ];*/

  GetAllEmployees(){
    return this.httpClient.GetEmployees();
  }

  addEmployeeService(employee:Employee){
    this.serviceEmergentWondows.ShowMessage('Name: ' + employee.name + ' ' + employee.surname)
    this.employees.push(employee);

    this.httpClient.saveEmployees(this.employees);
  }

  findEmployee(indice:number){

    let employee:Employee = this.employees[indice];
    return employee;
  }

  updateEmployeeService(indice:number, employee:Employee){
    let employeeUpdated = this.employees[indice];
    employeeUpdated.name = employee.name;
    employeeUpdated.surname = employee.surname;
    employeeUpdated.charge = employee.charge;
    employeeUpdated.salary = employee.salary;

    this.httpClient.UpdateEmployee(indice, employee);
  }

  deleteEmployeeService(indice:number){
    this.employees.splice(indice,1);

    this.httpClient.DeleteEmployee(indice);

    if(this.employees != null)this.httpClient.saveEmployees(this.employees);

    
  }
}
