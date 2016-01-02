import {Component} from 'angular2/core';

import {TempPipe} from './pipes/temp';
import {WindPipe} from './pipes/wind';

@Component({
  selector: 'weather',
  pipes: [TempPipe, WindPipe],
  template: `
  <h3>Today's Weather</h3>
  <ul>
    <li>High: <span [innerHTML]="weather.high | temp"></span></li>
    <li>Low: <span [innerHTML]="weather.low | temp"></span></li>
    <li>Wind: {{weather.wind | wind}}</li>
  </ul>
  `
})
export class Weather {
  weather:any;

  constructor() {
    this.weather = {
      high: 86,
      low: 65,
      wind: {
        speed: 9,
        direction: 323
      }
    };

    setInterval(() => {
      var directionChange = Math.round(Math.random() * 50) * (Math.random() < 0.5 ? -1 : 1);
      this.weather.wind.direction = this.weather.wind.direction + directionChange;
      if (this.weather.wind.direction > 360) {
        this.weather.wind.direction = this.weather.wind.direction - 360;
      } else if (this.weather.wind.direction < 0) {
        this.weather.wind.direction = this.weather.wind.direction + 360;
      }

      var speedChange = Math.round(Math.random() * 2) * (Math.random() < 0.5 ? -1 : 1);
      this.weather.wind.speed = this.weather.wind.speed + speedChange;
      if (this.weather.wind.speed < 0) {
        this.weather.wind.speed = 0;
      }
    }, 3000);
  }
}
