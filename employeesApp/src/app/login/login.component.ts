import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//https://www.youtube.com/watch?v=wGv3mjvLtdY&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=40
export class LoginComponent {

  constructor(private loginService:LoginService){}

  login(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;

    this.loginService.login(email, password);

  }
}
