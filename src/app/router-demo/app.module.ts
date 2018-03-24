import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { ColorToolModule } from './color-tool/color-tool.module';
import { DemosModule } from './demos/demos.module';
// import { CompanyModule } from './company/company.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorToolModule,
    DemosModule,
    // CompanyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
