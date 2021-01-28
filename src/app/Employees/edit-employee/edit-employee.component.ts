import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  
  editEmployeForm: FormGroup;
  emp: Employee;
  constructor(private employeeService: EmployeeService,private route:ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUser();
  }

  editEmployeeFormMethod(){
    this.editEmployeForm = this.formBuilder.group({
      name: [this.emp.Name,[Validators.required,Validators.minLength(4)]],
      email:[this.emp.Email,[Validators.required,Validators.email]],
      address:[this.emp.Address,[Validators.required,Validators.minLength(4)]],
      phone:[this.emp.Phone,[Validators.required,Validators.minLength(11),Validators.maxLength(14)]],
    });
  }

  editEmployee(){
    this.emp = Object.assign({},this.editEmployeForm.value);
    this.employeeService.updatEmployee(+this.route.snapshot.params['id'], this.emp).subscribe(next=>{
      alert("Info updated");
      this.editEmployeForm.reset(this.emp);
    },error=>{
      alert("Couldn't update info.")
    })
  }

  getUser(){
    this.employeeService.getEmployee(+this.route.snapshot.params['id']).subscribe((employee: Employee)=> {
      this.emp = employee;
    },error =>  {
      alert('Error loding details.');
    },()=>{
      this.editEmployeeFormMethod();
    });
  }

}
