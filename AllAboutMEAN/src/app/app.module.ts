import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularComponent } from './angular/angular.component';
import { ExpressComponent } from './express/express.component';
import { NodeComponent } from './node/node.component';
import { MongoDBComponent } from './mongo-db/mongo-db.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularComponent,
    ExpressComponent,
    NodeComponent,
    MongoDBComponent,
    MiscellaneousComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
