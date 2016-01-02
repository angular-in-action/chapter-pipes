import {Pipe} from 'angular2/core';

@Pipe({
  name: 'wind',
  pure: false
})
export class WindPipe {
  transform(value, [metric]) {
    var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    var degree = value.direction;

    if (degree > 338) {
      degree = 360 - degree;
    }
    var index = Math.floor((degree + 22) / 45);

    if (metric) {
      return value.speed + 'kph ' + directions[index];
    }
    return value.speed + 'mph ' + directions[index];
  }
}
