import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Color {
  id: number;
  name: string;
  hexCode: string;
}

@Component({
  selector: 'demo-http',
  templateUrl: './demo-http.component.html',
  styleUrls: ['./demo-http.component.css']
})
export class DemoHttpComponent implements OnInit {

  private colors: Color[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient
      .get<Color[]>('http://localhost:3010/colors')
      .toPromise()
      .then(colors => {
        this.colors = colors;
      });
  }

}
