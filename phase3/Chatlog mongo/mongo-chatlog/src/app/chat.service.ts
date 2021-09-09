import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from './chat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public http:HttpClient) { }

  addChat(chat:Chat):Observable<any>{
    return this.http.post("http://localhost:9090/api/chat/addChat", chat, {responseType:'text'});
  }
}
