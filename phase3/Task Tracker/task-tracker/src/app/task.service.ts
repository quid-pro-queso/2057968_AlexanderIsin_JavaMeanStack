import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http:HttpClient) { }

  storeCustomerInfo(task:Task):Observable<any>{
    return this.http.post<any>("http://localhost:9090/storeTask", task); //post takes two param 1st URL and 2nd is Data in JSON format
  }

  retrieveTasks():Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:9090/allTasks");
  }

  deleteTask(taskId:any):Observable<any>{
    return this.http.delete<any>("http://localhost:9090/deleteTask/" + taskId);
  }
}
