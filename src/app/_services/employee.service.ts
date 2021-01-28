import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../_models/employee';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getEmployees(currentPage?, pageSize?): Observable<Response> {
    let params = new HttpParams();
    if(currentPage!=null && pageSize!=null) /*Max PageSize is 5.*/
    {
      params = params.append('pageNumber',currentPage);
      params = params.append('pageSize',pageSize);
    }
    return this.http.get<Response>(this.baseUrl, {params});
  } 


  getEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+'getemployee/'+id);
  }

  addEmployee(emp: Employee){
    return this.http.post(this.baseUrl+'addemployee/', emp);
  }
  
  updatEmployee(id:number, emp: Employee){
    return this.http.put(this.baseUrl+ 'updateemployee/'+id, emp);
  }

  deleteEmployee(id:number){
    return this.http.delete(this.baseUrl+'deleteemployee/'+id);
  }

  deleteEmployees(id:number[]){
   let params = new HttpParams();
    if(id!=null)
    {
      id.forEach(element => {
        params = params.append('ids',String(element));
      });
    } 
    return this.http.delete(this.baseUrl+'deleteemployees',{params});
  }

}
