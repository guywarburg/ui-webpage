import { Component, OnInit } from '@angular/core';
import { Tasks } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = TASKS;
  
  constructor() { }

  ngOnInit() {
  }

}

const TASKS: Tasks[] = [
  {title: 'New website for Symu.co', dueDate: -5, avatar: '../../assets/images/task-n.png'},
  {title: 'Free business PSD Template', dueDate: -2, avatar: '../../assets/images/task-f.png'},
  {title: 'New logo for JCD.pl', dueDate: 5, avatar: '../../assets/images/task-n.png'},
  {title: 'Free Icons Set vol. 3', dueDate: 10, avatar: '../../assets/images/task-n.png'}
];