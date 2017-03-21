import { Component, OnInit } from '@angular/core';
import { Activity } from '../activities';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities = ACTIVITIES;

  constructor() { }

  ngOnInit() {
  }

}

const ACTIVITIES: Activity[] = [
  {userName: 'Nina Jones', action: 'added a new project', result: 'Free UI Kit', time: 0, avatar: '../../assets/images/nina-jones-avatar.png'},
  {userName: 'James Smith', action: 'commented project', result: 'Free PSD Template', time: 40, avatar: '../../assets/images/james-smith-avatar.png'},
  {userName: 'Alex Clooney', action: 'completed task', result: 'Symu Website', time: 60, avatar: '../../assets/images/alex-clooney.png'},
  {userName: 'Alexandra Spears', action: 'added a new project', result: 'Free PSD (...)', time: 360, avatar: '../../assets/images/alexandra-spears.png'},
];