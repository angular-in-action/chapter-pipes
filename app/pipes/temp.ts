import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {
  transform(value, [metric]) {
    if (metric) {
      return value + '&deg;C';
    }
    return value + '&deg;F';
  }
}
