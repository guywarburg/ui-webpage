import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  @Input()
  menuState:string;

  @Output()
  toggleSidebar = new EventEmitter<string>();

  closeSidebar(): void{
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.toggleSidebar.emit(this.menuState);
  }
  constructor() { }

  ngOnInit() {
  }

}
