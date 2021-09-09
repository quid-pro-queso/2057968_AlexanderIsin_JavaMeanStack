import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatRef = new FormGroup({
    cname:new FormControl(),
    chat:new FormControl()
  })

  constructor(public chatSer:ChatService) { }

  ngOnInit(): void {
  }

  addChat(){
    let chat = this.chatRef.value;
    this.chatSer.addChat(chat).subscribe(result=>console.log(result), error=>console.log(error));
    this.chatRef.reset();
  }
}
