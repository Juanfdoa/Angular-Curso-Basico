import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Register';
  message = '';
  registered = false;
  name:string = '';
  surname:string = '';
  charge:string = '';
  entrances: any[];

  constructor(){
    this.entrances =[
      {title:"Angular"},
      {title:"React"},
      {title:"C#"},
      {title:"PostgreSQl"},
    ]
  }
    
  UserRegister(){
    this.registered = true;
    this.message = 'the user was successfully registered';
    
  }
}
