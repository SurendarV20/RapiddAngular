import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeTransform'
})
export class TimeTransformPipe implements PipeTransform {

  transform(value: number): string {
    let hours = value.toString().split('.');
    let minutes = Math.floor(value % 60);
    return hours[0] + ' hrs ' + minutes + ' mins';
  }

}
