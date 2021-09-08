import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
  courses:Array<Course>=[];

  constructor(public courseSer:CourseService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(){
    this.courseSer.retrieveCourses().subscribe(result=>{
      this.courses=result;
    }, error=>console.log(error));
  }
}
