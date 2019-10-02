import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import {  HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AngularRaveModule } from 'angular-rave';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AngularRaveModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXme80IsTCbI6EyeotugTsfzsWSDmvyFw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
