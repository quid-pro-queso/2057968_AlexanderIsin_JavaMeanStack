import { Injectable, Output, ViewChild } from '@angular/core';
import {Task} from './task.model';

@Injectable({
    providedIn: 'root'  // it is equal to provider attribute in app.module.ts file 
  })
export class SharedService {

    constructor() { }
  
    tasks:Array<Task>=[];
  
    setUserArray(tasks:Array<Task>): void {
      this.tasks=tasks;
    }
  
    getUserArray(): Array<Task>{
      return this.tasks;
    }
}