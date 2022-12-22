import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from '../services/employee.service';
import { TimeTransformPipe } from '../time-transform.pipe';

@NgModule({
  declarations: [EmployeeComponent,TimeTransformPipe],
  imports: [CommonModule, EmployeeRoutingModule],
  exports: [EmployeeComponent],
  providers: [EmployeeService],
})
export class EmployeeModule {}
