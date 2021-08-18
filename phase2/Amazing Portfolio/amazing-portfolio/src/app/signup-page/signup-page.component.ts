import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { SharedService } from '../shared.services';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})


export class SignupPageComponent implements OnInit {

  constructor(public ser:SharedService) { }

  ngOnInit(): void {
  }

  storeData(fNameRef:any,lNameRef:any, usernameRef:any, passwrodRef:any){
    let user:User={fName:fNameRef.value, lName:lNameRef.value, userName:usernameRef.value, password:passwrodRef.value};
    let users:Array<User>=[];
    users.push(user);
    this.ser.setUserArray(users);
  }
}
