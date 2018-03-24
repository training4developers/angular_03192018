import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRouterModule } from './company.routing';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    CommonModule, CompanyRouterModule,
  ],
  declarations: [ HomeComponent, AboutComponent, ContactComponent ],
})
export class CompanyModule { }
