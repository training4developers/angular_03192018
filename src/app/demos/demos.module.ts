import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { ValidationSummaryComponent } from './components/validation-summary/validation-summary.component';
import { DemoForm2Component } from './components/demo-form2/demo-form2.component';
import { DemoServiceComponent } from './components/demo-service/demo-service.component';
import { MyFirstService } from './services/my-first.service';
import { MySecondService } from './services/my-second.service';
import { DemoHttpComponent } from './components/demo-http/demo-http.component';


const mySecondServiceProvider = {
  provide: MySecondService,
  useFactory: (myFirstSvc) => new MySecondService(myFirstSvc),
  deps: [ MyFirstService ],
};

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule,
  ],
  declarations: [
    DemoPipeComponent, MyUpperCasePipe, MyAppendPipe,
    DemoFormComponent, ValidationSummaryComponent, DemoForm2Component,
    DemoServiceComponent,
    DemoHttpComponent
  ],
  exports: [
    DemoPipeComponent,
    DemoFormComponent,
    DemoForm2Component,
    DemoServiceComponent,
    DemoHttpComponent,
  ],
  providers: [
    MyFirstService,
    mySecondServiceProvider,
  ],
})
export class DemosModule { }

