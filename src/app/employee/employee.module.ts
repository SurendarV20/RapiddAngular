import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from '../services/employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule, EmployeeRoutingModule],
  providers: [EmployeeService],
})
export class EmployeeModule {}
