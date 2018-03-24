import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Color {
  id: number;
  name: string;
  hexCode: string;
}

@Injectable()
export class ColorsSvcService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Color[]>('http://localhost:3010/colors')
      .toPromise();
  }

  getOne(colorId: number) {
    return this.httpClient
      .get<Color>('http://localhost:3010/colors/'
        + encodeURIComponent(colorId.toString())).toPromise();
  }

  insert(color: Color) {
    return this.httpClient
      .post<Color>('http://localhost:3010/colors', color).toPromise();
  }

}
