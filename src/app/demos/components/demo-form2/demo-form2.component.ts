import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

const myRequired = (c: AbstractControl) => {

  if (c.value == null || String(c.value).length === 0) {
    return { myRequired: true };
  } else {
    return null;
  }

};

@Component({
  selector: 'demo-form2',
  templateUrl: './demo-form2.component.html',
  styleUrls: ['./demo-form2.component.css']
})
export class DemoForm2Component implements OnInit {

  theForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.theForm = this.fb.group({
      message: ['', myRequired ],
    });

  }

  ngOnInit() {
  }

}
