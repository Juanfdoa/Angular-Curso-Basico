import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',   
  //template:"<p>Here goes an employee</p>",   Html inline
  styleUrls: ['./employee.component.css']    
  //styles:['p{background-color:blue}']        Css inline
})
export class EmployeeComponent {

  name="Juan";
  surname="Acevedo";
  age=26;
  company="Team international"


  //getAge(){
  //  return this.age;
  //}

  //saveCompany(value:String){          event click

  //}

  ableBox = false;
  checkboxValue= false;

  registerText = "There is not anyone logged"

  setUserRegister(event:Event){
    //alert("The user is already logged")
    //alert(event.target)

    if((<HTMLInputElement>event.target).value == 'yes'){
      this.registerText = 'There is already an user';
    }else{
      this.registerText = 'There is not anyone logged'
    }
    
  }

}
