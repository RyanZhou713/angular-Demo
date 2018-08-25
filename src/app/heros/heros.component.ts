import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROS } from '../mock-heros'
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  /* selectedHero: Hero = new Hero();
  onSelect(hero: Hero): void { 
    this.selectedHero = hero;
  } */

  getHeros(): void { 
    this.heroService.getHeroes().subscribe(heroes => this.heros = heroes);
  }

  add1(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }
  
  add(heroname: string): void {
    let name:string = heroname.trim();;
    if(!name){return;}
    
    this.heroService.addHero({ name } as Hero)
    .subscribe(
      hero => {this.heros.push(hero);}
    );
  }

  delete(hero: Hero): void {
    // this.heros = this.heros.filter(h => h !== hero);
    
    this.heroService.deleteHero(hero).subscribe();
  }
 
}
