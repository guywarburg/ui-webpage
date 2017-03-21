import { Component, OnInit } from '@angular/core';
import { Messages } from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})


export class MessagesComponent implements OnInit {
  messages = MESSAGES;

  constructor() { }
  ngOnInit() {
  }
}

const MESSAGES: Messages[] = [
  { userName: "Nina Jones", messageTime: "5 minutes ago", avatar: "../../assets/images/nina-jones-avatar.png", 
  content: "Hey You! It’s me again :-) I attached new (...)", read: false},
  { userName: "Nina Jones", messageTime: "About 20 minutes ago", avatar: "../../assets/images/nina-jones-avatar.png", 
  content: "Hey! I attached some new PSD files for (...)", read: false},
  { userName: "James Smith", messageTime: "2 days ago", avatar: "../../assets/images/james-smith-avatar.png", 
  content: "Good morning, you are fired!", read: true},
  { userName: "Nina Jones", messageTime: "About 2 weeks ago", avatar: "../../assets/images/nina-jones-avatar.png", 
  content: "Hello! Could You bring me coffee please?", read: true}
];