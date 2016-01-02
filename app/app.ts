import {Component} from 'angular2/core';

import {Weather} from './weather';
import {Core} from './core';

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
