import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  courseRef = new FormGroup({
    _cid:new FormControl(),
    cname:new FormControl(),
    desc:new FormControl(),
    amt:new FormControl()
  })

  constructor(public courseSer:CourseService) { }
  msg?:string;

  ngOnInit(): void {
  }

  addCourse(){
    let course = this.courseRef.value;
    this.courseSer.addCourse(course).subscribe(result=>this.msg=result, error=>console.log(error));
    this.courseRef.reset();
  }

}
