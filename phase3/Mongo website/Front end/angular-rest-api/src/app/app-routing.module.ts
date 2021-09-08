import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"courseAdd", component:CourseAddComponent},
  {path:"courseDelete", component:CourseDeleteComponent},
  {path:"courseUpdate", component:CourseUpdateComponent},
  {path:"courseList", component:CourseListComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"", redirectTo:"dashboard", pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
