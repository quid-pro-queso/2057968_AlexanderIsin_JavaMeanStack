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
  displayName:string="";
  showLogin:boolean=true;
  showSign:boolean=false;
  showDisplay:boolean=false;
  users: Array<any> = [];
  constructor(public ser:SharedService) { }

  ngOnInit(): void {
  }

  showSignup(){
    this.showLogin = false;
    this.showSign = true;
  }

  signUp(fNameRef:any, lNameRef:any, usernameRef:any, passwordRef:any){
    let user = {fName:fNameRef.value, lName:lNameRef.value, username:usernameRef.value, password:passwordRef.value};
    this.users.push(user);
    this.showLogin = true;
    this.showSign = false;
    console.log(this.users);
    this.msg = "Sign Up Succesful!";

  }
  check(usernameRef:any, passwordRef:any){
    console.log(this.users);
    if(this.users[0].username == usernameRef.value && this.users[0].password == passwordRef.value){
      this.showLogin = false;
      this.showDisplay = true;
      this.displayName = usernameRef.value;
    }
    else{
      this.msg = "Login failed, please try again"
    }
  }
  createTable(cName:any, pNum:any){
    let table = document.getElementById("myTable");
    let row = document.createElement("tr");
    table?.appendChild(row);
    let tName = document.createElement("td");
    let tNum = document.createElement("td");
    let name = document.createTextNode(cName.value);
    let number = document.createTextNode(pNum.value);
    tName.appendChild(name);
    tNum.appendChild(number);
    row.appendChild(tName);
    row.appendChild(tNum);



  }
}
