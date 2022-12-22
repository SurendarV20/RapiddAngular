import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
      this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees.subscribe((res:any)=>{

    },
    (err:any)=>{

    })
  }

}
