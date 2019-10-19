import {RouterModule, Routes, Router} from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { ExpressComponent } from './express/express.component';
import { NodeComponent } from './node/node.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { MongoDBComponent } from './mongo-db/mongo-db.component';

const appRoutes : Routes = [
    {path:'', component:HomeComponent, pathMatch:'full'},
    {path:'homePage', component:HomeComponent},
    {path:'angular' , component:AngularComponent},
    {path:'express' , component:ExpressComponent},
    {path:"node",  component:NodeComponent},
    {path:"mongodb",component:MongoDBComponent},
    {path:"miscellaneous", component:MiscellaneousComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}