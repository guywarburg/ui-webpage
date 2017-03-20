import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen:string = 'out';

  @Output()
  toggleSidebar = new EventEmitter<string>();
  
  sidebarPos(): void {
    this.isMenuOpen = this.isMenuOpen === 'out' ? 'in' : 'out';
    this.toggleSidebar.emit(this.isMenuOpen);
  }
  constructor() { }

  ngOnInit() {
  }

}
