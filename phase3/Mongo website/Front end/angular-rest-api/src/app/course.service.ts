import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public http:HttpClient) { }

  addCourse(course:Course):Observable<any>{
    return this.http.post("http://localhost:9090/api/course/storeCourse", course, {responseType:'text'});
  }
  deleteCourse(_cid:any):Observable<any>{
    return this.http.delete("http://localhost:9090/api/course/deleteCourse/"+_cid, {responseType:"text"});
  }
  retrieveCourses():Observable<any>{
    return this.http.get<Course[]>("http://localhost:9090/api/course/getAllCourses");
  }
  updateCourse(cid:any, amt:any):Observable<any>{
    return this.http.put("http://localhost:9090/api/course/updateCourse", {_cid:cid, amt:amt});
  }
}
