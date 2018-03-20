import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { ColorFormComponent } from './components/color-form/color-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [ColorHomeComponent, ToolHeaderComponent, ColorFormComponent],
  exports: [ColorHomeComponent],
})
export class ColorToolModule { }
