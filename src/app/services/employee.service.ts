import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
  private apiUrl = `https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==`;
  constructor(private httpClient: HttpClient) {
    console.log(httpClient)
  }

  getEmployees() : Observable<any> {
   return this.httpClient.get(this.apiUrl);
  }
}
