import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/color';

@Component({
  selector: 'color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  @Output()
  submitColor = new EventEmitter<Color>();

  colorForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.colorForm = this.fb.group({
      colorNameInput: [ '' ],
    });

  }

  ngOnInit() {
  }

  submitTheColor() {

    this.submitColor.emit({
      name: this.colorForm.value.colorNameInput,
      hexCode: '',
    });

  }

}
