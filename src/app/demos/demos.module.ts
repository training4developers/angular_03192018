import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { ValidationSummaryComponent } from './components/validation-summary/validation-summary.component';
import { DemoForm2Component } from './components/demo-form2/demo-form2.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  declarations: [
    DemoPipeComponent, MyUpperCasePipe, MyAppendPipe, DemoFormComponent, ValidationSummaryComponent, DemoForm2Component
  ],
  exports: [DemoPipeComponent, DemoFormComponent, DemoForm2Component],
})
export class DemosModule { }
