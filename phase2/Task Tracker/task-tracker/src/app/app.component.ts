import { Component } from '@angular/core';
import { Task } from 'src/task.model';
import { SharedService } from 'src/shared.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  test: Array<any>;

  constructor(public ser:SharedService) { 
    this.test = this.ser.getUserArray();
  }

  addTask(idRef:any, nameRef:any, taskRef:any, deadlineRef:any){
    let task:Task={empID:idRef.value, name:nameRef.value, task:taskRef.value, deadline:deadlineRef.value};
    
    this.test.push(task);
    this.ser.setUserArray(this.test);
    console.log(this.test);

  }
}
