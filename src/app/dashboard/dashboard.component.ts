import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { DxTabsModule } from 'devextreme-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  tabs = [
    {
        id: 0,
        text: 'user',
        icon: 'user',
        content: 'User tab content'
    }, {
        id: 1,
        text: 'comment',
        icon: 'comment',
        content: 'Comment tab content'
    }, {
        id: 2,
        text: 'find',
        icon: 'find',
        content: 'Find tab content'
    }
];
 
  tabContent: string;
  constructor(private heroService: HeroService) { 
    this.tabContent = this.tabs[0].content;
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
