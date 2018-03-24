import { Component, OnInit } from '@angular/core';
import { ColorsSvcService, Color } from '../../services/colors-svc.service';


@Component({
  selector: 'demo-http',
  templateUrl: './demo-http.component.html',
  styleUrls: ['./demo-http.component.css']
})
export class DemoHttpComponent implements OnInit {

  private colors: Color[];

  constructor(private colorsSvc: ColorsSvcService) { }

  ngOnInit() {

    this.colorsSvc.getAll()
      .then(colors => {
        this.colors = colors;
      });


  }

}
