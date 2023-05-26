import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(private LoginService:LoginService){}
ngOnInit(): void {
  firebase.initializeApp({
    apiKey: "AIzaSyBukZKTLIAe1Ab5hGB8Tk-5NdmDXDiN2uQ",
    authDomain: "my-clients-67552.firebaseapp.com",
  });
}

IsLogued(){
  return this.LoginService.IsLogged();
}

LogOut(){
  this.LoginService.Logout();
}
  
}
