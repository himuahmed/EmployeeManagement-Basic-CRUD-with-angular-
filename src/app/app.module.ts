import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employees/employee-list/employee-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './route';
import { EmployeeService } from './_services/employee.service';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Employees/edit-employee/edit-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PaginationModule } from 'ngx-bootstrap/pagination';
import { EmployeeListResolver } from './_resolvers/employee-list.resolver';
import { EmployeeNavSharedService } from './_services/employee-nav-shared.service';


@NgModule({
  declarations: [			
    AppComponent,
      NavbarComponent,
      EmployeeListComponent,
      AddEmployeeComponent,
      EditEmployeeComponent ,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmployeeService,
    EmployeeListResolver,
    EmployeeNavSharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
