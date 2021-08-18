import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared.services';
import { User } from '../user.model';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  msg:string="";
  showLogin:boolean=true;
  users?:Array<User>;
  constructor(public ser:SharedService) { }

  ngOnInit(): void {
  }

  check(usernameRef:any, passwordRef:any){
    this.users=this.ser.getUserArray();
    if(this.users[0].userName == usernameRef.value && this.users[0].password == passwordRef.value){
      this.showLogin = false;
      this.ser.loadDisplay();
    }
    else{
      this.msg = "Login failed, please try again"
    }
  }
}
