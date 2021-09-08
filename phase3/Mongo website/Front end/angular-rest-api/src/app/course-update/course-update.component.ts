import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {

  courseRef = new FormGroup({
    _cid:new FormControl(),
    amt:new FormControl()
  })

  constructor(public courseSer:CourseService, public router:Router) { }

  ngOnInit(): void {
  }

  updateCourse(){
    let course = this.courseRef.value;
    this.courseSer.updateCourse(course._cid, course.amt).subscribe(result=>{
      console.log(result);
    }, error=>console.log(error));

  }

}
