import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';

import {MessageService} from './message.service'


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService:MessageService) { }

  getHeroes(): Observable<Hero[]> { 
    this.messageService.add('HeroService: fecthed heros!');
    return of(HEROS);
  }
}
