import { Injectable, Output, ViewChild } from '@angular/core';
import { DisplayPageComponent } from './display-page/display-page.component';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'  // it is equal to provider attribute in app.module.ts file 
})
export class SharedService {

  constructor() { }

  users:Array<User>=[];

  setUserArray(users:Array<User>): void {
    this.users=users;
  }

  getUserArray(): Array<User>{
    return this.users;
  }

  loadSignup(){

}

loadDisplay(){
    


}

loadLogin(){
    
}

}