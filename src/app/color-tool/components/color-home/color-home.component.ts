import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/color';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  fields = [
    { name: 'name', caption: 'Name' },
    { name: 'hexCode', caption: 'HexCode' },
  ];

  colors: Color[] = [
    { id: 1, name: 'hot pink', hexCode: '' },
    { id: 2, name: 'blue', hexCode: '' },
    { id: 3, name: 'green', hexCode: '' },
    { id: 4, name: 'white', hexCode: '' },
    { id: 5, name: 'red', hexCode: '' },
  ];

  get sortedColors() {

    console.log('this.sortField: ', this.sortField);

    const sortFieldName = this.sortField || 'id';

    return this.colors.concat().sort( (a, b) => {

      if (a[sortFieldName] > b[sortFieldName]) {
        return 1;
      } else if (a[sortFieldName] < b[sortFieldName]) {
        return -1;
      } else {
        return 0;
      }

    });
  }

  colorForm: FormGroup;
  sortForm: FormGroup;
  sortField: string;

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) {


    this.sortForm = this.fb.group({
      sortField: [''],
    });

  }

  ngOnInit() {
  }

  addColor(newColor: Color) {
    this.colors.push({
      ...newColor,
      id: Math.max(...this.colors.map(c => c.id)) + 1,
    });
  }

  setSortField(sortFieldName: string) {

    if (sortFieldName) {
      this.sortForm.controls.sortField.setValue(sortFieldName);
      this.sortField = sortFieldName;
    } else {
      this.sortField = this.sortForm.value.sortField;
    }

  }

}
