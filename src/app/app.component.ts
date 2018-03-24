import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  nums: Observable<number>;

  ngOnInit() {

    const nums: Observable<number> = Observable.create( (observer: Observer<number>) => {

      const ws = new WebSocket('ws://localhost:3030');

      ws.addEventListener('message', msg => {
        observer.next(Number(msg.data));
      });

    } );

    this.nums = nums.pipe(
      map( n => n * 2 ),
      filter( n => n > 10 ),
    );

  }


}
