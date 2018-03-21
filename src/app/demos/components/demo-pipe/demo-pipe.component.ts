import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent implements OnInit {

  message = 'Live long and prosper.';

  constructor() { }

  ngOnInit() {
  }

}
