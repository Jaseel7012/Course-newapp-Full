import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewCourseComponent } from './view-course/view-course.component';
const myroute:Routes=[
  {
    path:"",
    component:AddComponent
  },{
    path:"view",
    component:ViewCourseComponent
  }

  
]
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
