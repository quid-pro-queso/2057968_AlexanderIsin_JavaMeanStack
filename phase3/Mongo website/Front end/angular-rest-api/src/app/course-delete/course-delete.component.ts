import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {

  courseRef = new FormGroup({
    _cid:new FormControl()
  })
  constructor(public courseSer:CourseService, public router:Router) { }

  ngOnInit(): void {
  }

  deleteCourse(){
    let course = this.courseRef.value;
    this.courseSer.deleteCourse(course._cid).subscribe(result=>console.log(result), error=>console.log(error));
    this.courseRef.reset();
  }

}
