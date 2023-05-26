import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeSonCComponent } from './employee-son-c/employee-son-c.component';
import { CarateristicsEmployeeCompComponent } from './carateristics-employee-comp/carateristics-employee-comp.component';
import { EmployeeServiceService } from './employee-service.service';
import { DataServiceService } from './data-service.service';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DataServices } from './data.services';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'proyects', component:ProyectsComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'contact', component:ContactComponent, canActivate:[LoginGuardian]},
  {path:'update-employee/:id', component:UpdateEmployeeComponent},
  {path:'log-in', component:LoginComponent},
  {path:'**', component:ErrorPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSonCComponent,
    CarateristicsEmployeeCompComponent,
    HomeComponent,
    AboutUsComponent,
    ProyectsComponent,
    ContactComponent,
    UpdateEmployeeComponent,
    ErrorPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule    //modulo para usar firebase
  ],
  providers: [
    EmployeeServiceService,
    DataServiceService,   //en el viceo es empleados service
    DataServices,
    LoginService,
    CookieService,      //npm install ngx-cookie-service --save
    LoginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
