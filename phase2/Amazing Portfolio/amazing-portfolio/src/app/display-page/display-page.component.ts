import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.services';
import { User } from '../user.model';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {
  users?:Array<User>;
  username:string="";
  @Input()
  showDisplay:boolean = false;
  constructor(public ser:SharedService) { }

  ngOnInit(): void {
    this.users = this.ser.getUserArray();
    this.username=this.users[0].userName;
  }

}
