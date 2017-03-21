import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  // Tasks component variables
  tasksTitle: string = 'Tasks';
  tasksBadge1: number = 5;
  tasksBadge2: number = 2;
  
  // messages component variables
  messagesTitle: string = 'Messages';
  messagesBadge1: number = 2;
  messagesBadge2: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
