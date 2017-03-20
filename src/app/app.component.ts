import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { Hero } from './hero';

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
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;

  menuState:string = 'out';

  toggleSidebar(): void {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];