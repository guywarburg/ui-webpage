import { Component, trigger } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'John';
  menuState:string = 'out';

  toggleSidebar(): void {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}