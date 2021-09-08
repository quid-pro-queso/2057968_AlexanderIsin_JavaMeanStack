import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseAddComponent,
    CourseUpdateComponent,
    CourseDeleteComponent,
    CourseListComponent,
    DashboardComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
