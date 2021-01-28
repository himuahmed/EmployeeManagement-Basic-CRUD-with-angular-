import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AddEmployeeComponent } from "./Employees/add-employee/add-employee.component";
import { EditEmployeeComponent } from "./Employees/edit-employee/edit-employee.component";
import { EmployeeListComponent } from "./Employees/employee-list/employee-list.component";
import { EmployeeListResolver } from "./_resolvers/employee-list.resolver";

export const appRoutes: Routes = [

    {path: '', component:EmployeeListComponent,resolve:{employeesResolver:EmployeeListResolver}},
    {
        path:'',
        runGuardsAndResolvers:'always',
        children:[
            {path:'addemployee',component:AddEmployeeComponent},
            {path:'editemployee/:id',component:EditEmployeeComponent},
        ]
    },
    {path: '**', redirectTo: '', pathMatch:'full' }
]