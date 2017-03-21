import { Component, OnInit, Input } from '@angular/core';
import { Messages } from '../message';

@Component({
  selector: 'app-message-text',
  templateUrl: './message-text.component.html',
  styleUrls: ['./message-text.component.css']
})
export class MessageTextComponent implements OnInit {

  @Input()
  message: Messages;
  
  // TODO - slice text if to long
  constructor() { }

  ngOnInit() {
  }

}
