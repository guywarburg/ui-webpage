import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(-100%)'
      })),
      transition('in => out', animate('500ms linear')),
      transition('out => in', animate('500ms linear'))
    ]),
  ]
})

export class SidebarComponent implements OnInit {
  @Input()
  menuState:string;

  constructor() { }

  ngOnInit() {
  }

}
