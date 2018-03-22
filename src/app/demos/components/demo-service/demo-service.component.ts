import { Component, OnInit, Injectable } from '@angular/core';

import { MySecondService } from '../../services/my-second.service';

@Component({
  selector: 'demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.css'],
})
export class DemoServiceComponent implements OnInit {

  constructor(
    private mySecondSvc: MySecondService,
  ) { }

  ngOnInit() {
    console.log(this.mySecondSvc.getResult(5, 3));
  }

}
