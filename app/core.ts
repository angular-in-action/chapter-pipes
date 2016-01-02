import {Component} from 'angular2/core'

@Component({
  selector: 'core',
  template: `
    <h3>Core Pipes</h3>
    <p>Date: {{book.meap | date:'MMM, y'}}</p>
    <p>Lowercase: {{book.name | lowercase}}</p>
    <p>Uppercase: {{book.name | uppercase}}</p>
    <p>Number: {{book.words | number}}</p>
    <p>Percent: {{book.chapters[0] / book.words | percent:'.0-1'}}</p>
    <p>Currency: {{book.price | currency:'USD':true}}</p>
    <p>Slice: {{book.chapters | slice:0:3}}</p>
    <p>Async: {{book.delayed | async}}</p>
    <p>JSON: {{book| json}}</p>
  `
})
export class Core {
  book: any;
  constructor() {
    this.book = {
      meap: new Date(2015, 9, 1),
      name: 'Angular 2 in Action',
      price: 44.99,
      words: 70423,
      chapters: [9247, 10324, 12358, 21038, 9432, 8024],
      delayed: new Promise((resolve, reject) => {
        setTimeout(() => resolve('Available now!'), 3000);
      })
    };
  }
}
