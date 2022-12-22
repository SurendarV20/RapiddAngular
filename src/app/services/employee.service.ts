import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, groupBy, map } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  private apiUrl = `https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==`;
  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.apiUrl);
  }
}
