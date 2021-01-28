import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { emit } from 'process';
import { EmployeeNavSharedService } from '../_services/employee-nav-shared.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  employeeIds: number[] =[];
  constructor(private sharedService:  EmployeeNavSharedService,private employeeService:EmployeeService) { }

  ngOnInit() {
    
  }

  deleteEmployees()
  {
    
    this.employeeIds = this.sharedService.returnIds();
    if(this.employeeIds.length<=0)
    {
      alert("Please select employee record.")
    }
    else{
      this.employeeService.deleteEmployees(this.employeeIds).subscribe(next=>{
        alert("Employe records deleted.");
        window.location.reload();
      },error=>{
        alert("Couldn't delete selected records.")
      });
    }

  }
}
