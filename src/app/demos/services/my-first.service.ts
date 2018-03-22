import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  constructor() {
    console.log('my first service constructor');
  }

  add(a, b) {
    return a + b;
  }
}
