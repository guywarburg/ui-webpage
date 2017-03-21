import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from '../task';

@Component({
  selector: 'app-task-text',
  templateUrl: './task-text.component.html',
  styleUrls: ['./task-text.component.css']
})
export class TaskTextComponent implements OnInit {
  @Input()
  task: Tasks;

  createDueDateString(timeLeft): string{
    if(timeLeft >= 0) {
      return timeLeft.toString() + ' days left';
    }
    return Math.abs(timeLeft).toString() + ' days delays';
  }
  constructor() { }

  ngOnInit() {
  }

}
