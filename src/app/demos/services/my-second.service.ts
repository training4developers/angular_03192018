import { Injectable } from '@angular/core';

import { MyFirstService } from './my-first.service';

@Injectable()
export class MySecondService {

  constructor(private myFirstSvc: MyFirstService) {
    console.log('my second service constructor');
  }

  getResult(a, b) {
    return this.myFirstSvc.add(a, b);
  }
}
