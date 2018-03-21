import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'validation-summary',
  templateUrl: './validation-summary.component.html',
  styleUrls: ['./validation-summary.component.css']
})
export class ValidationSummaryComponent implements OnInit {

  @Input()
  theForm: FormGroup;

  constructor() { }

  get errors() {
    const errors = Object.keys(this.theForm.controls).reduce( (errors, c) => {

      const control = this.theForm.controls[c];

      if (control.errors) {
        return errors.concat( Object.keys(control.errors).map( error => {

          switch (error) {
            case 'required':
              return c + ' is required';
            case 'email':
              return c + ' has an invalid email format';
            default:
              break;
          }
          return control.errors[error];
        } ));
      } else {
        return errors;
      }

    }, []);

    return errors;
  }

  ngOnInit() {
  }

}
