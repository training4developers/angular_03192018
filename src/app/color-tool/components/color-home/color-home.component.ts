import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/color';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  colors: Color[] = [
    { id: 1, name: 'hot pink', hexCode: '' },
    { id: 2, name: 'blue', hexCode: '' },
    { id: 3, name: 'green', hexCode: '' },
    { id: 4, name: 'white', hexCode: '' },
    { id: 5, name: 'red', hexCode: '' },
  ];

  colorForm: FormGroup;

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) {
    this.colorForm = this.fb.group({
      colorNameInput: [ '' ],
    });
  }

  ngOnInit() {
  }

  addColor() {
    this.colors.push({
      id: Math.max(...this.colors.map(c => c.id)) + 1,
      name: this.colorForm.value.colorNameInput,
      hexCode: '',
    });
  }

}
