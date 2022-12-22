import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  public employees: Employee[];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (res: Employee[]) => {
        this.sortEmployees(res);
      },
      (err: any) => {
        alert(err);
      }
    );
  }

  sortEmployees(employees: Employee[]) {
    employees.forEach(
      (s) =>
        (s.TimeWorked =
          (new Date(s.EndTimeUtc).getTime() -
            new Date(s.StarTimeUtc).getTime()) /
            3600000)
    );
    let emp = [
      ...employees.reduce((map, item) => {
          const { EmployeeName: key, TimeWorked } = item;
          const prev = map.get(key);

          if (prev) {
            prev.TimeWorked += TimeWorked;
          } else {
            map.set(key, Object.assign({}, item));
          }
          return map;
        }, new Map())
        .values(),
    ];
   this.employees = emp.sort((a, b) =>
      a.TimeWorked > b.TimeWorked ? -1 : a.TimeWorked < b.TimeWorked ? 1 : 0
    );
    console.log(this.employees)
  }

}
