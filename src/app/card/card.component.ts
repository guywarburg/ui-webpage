import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // receives a title and two optional badges for display
  // if badge value is '0' is won't display
  @Input()
  title: string;
  @Input()
  badge1: number;
  @Input()
  badge2: number;

  constructor() { }

  ngOnInit() {
  }

}
