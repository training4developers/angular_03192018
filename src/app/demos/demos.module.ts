import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DemoPipeComponent, MyUpperCasePipe, MyAppendPipe],
  exports: [DemoPipeComponent],
})
export class DemosModule { }
