import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { DemoFormComponent } from './components/demo-form/demo-form.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  declarations: [
    DemoPipeComponent, MyUpperCasePipe, MyAppendPipe, DemoFormComponent
  ],
  exports: [DemoPipeComponent, DemoFormComponent],
})
export class DemosModule { }
