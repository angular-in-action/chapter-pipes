import {Component} from 'angular2/core';

import {Core} from './components/core';

@Component({
  selector: 'app',
  directives: [Core],
  template: `
    <core></core>
  `
})
export class App {

}
