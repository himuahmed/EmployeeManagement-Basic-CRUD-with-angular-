import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  emp: Employee;
  addEmployeForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.addEmployeeFormMethod();
  }

  addEmployeeFormMethod(){
    this.addEmployeForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      address:['',[Validators.required,Validators.minLength(4)]],
      phone:['',[Validators.required,Validators.minLength(11),Validators.maxLength(14)]],
    });
  }

  addEmp(){
    this.emp = Object.assign({},this.addEmployeForm.value);
    this.employeeService.addEmployee(this.emp).subscribe(()=>{
      alert("Employee Added.");
      this.addEmployeForm.reset();
    },error=>{
      alert("Couldn't add employee.")
    })
  }

}
