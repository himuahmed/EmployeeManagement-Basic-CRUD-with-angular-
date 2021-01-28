import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { EmployeeService } from "../_services/employee.service";

@Injectable()
export class EmployeeListResolver implements Resolve<Response> {
    constructor(private employeeService: EmployeeService, private router: Router) {}
    resolve(route: ActivatedRouteSnapshot):Observable<Response> {
        return this.employeeService.getEmployees().pipe(
            catchError(error=>{
                alert("Couldn't fetch employees");
                return of(null);
            })
        )
    }
}