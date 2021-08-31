import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskRef = new FormGroup({
    empId:new FormControl(),
    taskId:new FormControl(),
    task:new FormControl(),
    deadline:new FormControl()
  })

  tasks:Array<Task>=[];
  storeMsg?:string;
  taskId?:number;
  deleteMsg?:string;
  constructor(public taskSer:TaskService) { }

  ngOnInit(): void {
  }

  storeInfo(){
    let task = this.taskRef.value;
    this.taskSer.storeCustomerInfo(task).subscribe(result=>{
      this.storeMsg=result.msg;
      this.getAllTasks();
    }, error => console.log(error));
    this.taskRef.reset();

  }

  getAllTasks(){
    this.taskSer.retrieveTasks().subscribe(result=>{
      this.tasks=result;
    }, error=>console.log(error));
  }

  deleteTask(taskId:any){
    this.taskSer.deleteTask(taskId).subscribe(result=>{
      this.deleteMsg = result.msg;
      this.getAllTasks();
    }, error => console.log(error));
  }
}
