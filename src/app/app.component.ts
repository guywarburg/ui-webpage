import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(25%)',
        width: '80%'
      })),
      state('out', style({
        transform: 'translateX(0)',
        width: '100%'
      })),
      transition('in => out', animate('500ms linear')),
      transition('out => in', animate('500ms linear'))
    ]),
  ]
})
export class AppComponent {
  name = 'John';
  menuState:string = 'out';

  toggleSidebar(): void {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}