import {Component} from 'angular2/core';

import {Weather} from './components/weather';
import {Core} from './components/core';

@Component({
  selector: 'app',
  directives: [Weather, Core],
  template: `
  <core></core>
  <hr />
  <weather></weather>
  `
})
export class App {

}
