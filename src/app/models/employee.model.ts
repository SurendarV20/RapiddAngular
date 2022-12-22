import { Guid } from 'guid-typescript';

export class Employee {
  Id: Guid;
  EmployeeName: string;
  StarTimeUtc: Date;
  EndTimeUtc: Date;
  EntryNotes: string;
  DeletedOn: Date;
  TimeWorked:number;
}
