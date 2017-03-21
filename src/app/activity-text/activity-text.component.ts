import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../activities';

@Component({
  selector: 'app-activity-text',
  templateUrl: './activity-text.component.html',
  styleUrls: ['./activity-text.component.css']
})
export class ActivityTextComponent implements OnInit {
  
  @Input()
  activity: Activity;

  setTime(timePast): string {
    if( timePast === 0) {
      return 'Just now';
    } else if(timePast < 60) {
      return timePast.toString() + ' minutes ago';
    } else if( timePast === 60) {
      return '1 hour ago';
    } else {
      return (timePast / 60).toString() + ' hours ago';
    }
  }
  constructor() { }

  ngOnInit() {
  }
}