//Vamos ha utilizar firebase -> realtime database

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "./employee.componet";
import { LoginService } from "./login/login.service";

@Injectable()

export class DataServices{

    constructor(private httpClient:HttpClient, private loginService:LoginService) {}

    
    GetEmployees(){
        const token = this.loginService.getIdToken();
       return this.httpClient.get('https://my-clients-67552-default-rtdb.firebaseio.com/datos.json?auth='+token);
        
    }

    saveEmployees(employees:Employee[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://my-clients-67552-default-rtdb.firebaseio.com/datos.json?auth='+token, employees).subscribe(
            response=> console.log("The information was save "+ response),

            error => console.log("Error: " + error),
        );

    };

    UpdateEmployee(indice:number,employee:Employee){
        const token = this.loginService.getIdToken();
        let url = 'https://my-clients-67552-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth='+token; 
        this.httpClient.put(url, employee).subscribe(
            response=> console.log("The information was save "+ response),

            error => console.log("Error: " + error),
        );
    }

    DeleteEmployee(indice:number){
        const token = this.loginService.getIdToken();
        let url = 'https://my-clients-67552-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth='+token; 
        this.httpClient.delete(url).subscribe(
            response=> console.log("The information was delete "+ response),

            error => console.log("Error: " + error),
        );
    }

    
}