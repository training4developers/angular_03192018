import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  demoForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.demoForm = this.fb.group({
      messageInput: ['', {
        validators: [
          Validators.required, Validators.minLength(4)
        ],
      }],
    });

  }

  ngOnInit() {
  }

}
