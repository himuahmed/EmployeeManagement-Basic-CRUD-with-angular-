import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { EmployeeNavSharedService } from 'src/app/_services/employee-nav-shared.service';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeResponse: Employee[];
  totalPage: number;
  totalCount: number;
  pageSize:number;
  currentPage:number;
  paginations: Pagination;
  isChecked= false;
  checkedEmployees = [];

  constructor(private employeeService: EmployeeService,private route: ActivatedRoute,private sharedService: EmployeeNavSharedService) {
 
   }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.employeeResponse = data["employeesResolver"]["employees"];
      this.totalPage = data["employeesResolver"]["TotalPage"];
      this.totalCount = data["employeesResolver"]["TotalCount"];
      this.pageSize = data["employeesResolver"]["PageSize"];
      this.currentPage = data["employeesResolver"]["CurrentPage"];       
    })
  }

  removeEmployee(id:number)
  {
    this.employeeService.deleteEmployee(id).subscribe(next=>{   
      alert("Employee record deleted");
      window.location.reload();     
    },error=>{
      alert("Couldn't delete the record");
    })
  }

  removeMultipleEmployees(id:number[]){
    this.employeeService.deleteEmployees(id).subscribe(next=>{
      alert("Employee records deleted");
    },error=>{
      alert("Couldn't delete employee records.");
    })
  }

  checkAll(e){
    if(e.target.checked==true){
      this.isChecked = true;
      this.employeeResponse.forEach(element => {
        this.checkedEmployees.push(element.Id);  
        this.sharedService.checkedIds(element.Id);      
      });
    }
    else{
      this.isChecked = false;
      this.checkedEmployees.length=0;
      this.sharedService.uncheckAll();
      console.log(this.checkedEmployees);
    }
  }

  onCheck(evt){
    if (!this.checkedEmployees.includes(evt)) {
      this.checkedEmployees.push(evt);
      this.sharedService.checkedIds(evt); 
    } else {
      var index = this.checkedEmployees.indexOf(evt);
      if (index > -1) {
        this.checkedEmployees.splice(index, 1);
      }
      this.sharedService.uncheckId(evt);
    }
    console.log(this.checkedEmployees);
  }
  
  pageChanged(event: any):void {
    this.isChecked = false;
    this.sharedService.uncheckAll();
    this.currentPage = event.page;
    this.loadPagedEmployees();
    
  }
  
  loadPagedEmployees(){
    this.employeeService.getEmployees(this.currentPage,this.pageSize).subscribe((emp: Response) => {
      this.totalPage = emp["TotalPage"];
      this.totalCount = emp["TotalCount"];
      this.pageSize = emp["PageSize"];
      this.currentPage = emp["CurrentPage"];    
      this.employeeResponse = emp["employees"];
      console.log(emp["employees"]);
    },error=>{
      alert("Couldn't load employees");
    }
    )}

}
