import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuState:string = 'out';
  toggleSidebar(): void {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  constructor() { }

  ngOnInit() {
  }

}
