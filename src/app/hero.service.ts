import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'apii/heroes1';

  constructor(private http:HttpClient, public messageService:MessageService) { }

  getHeroes(): Observable<Hero[]> { 
    
    this.log('fecthed heros!');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes...')),
        catchError(this.handleError('getHeroes',[]))
    );
  }

  getHeroById(id:number): Observable<Hero> { 
   // this.messageService.add(`HeroService:fetched hero id=${id}`);
    //this.log(`fetched hero id=${id}`);
    //return of(HEROS.find(hero=>hero.id===id));

    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_=>this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> { 
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
        tap(_=>this.log(`updated ${this.heroesUrl} hero id=${hero.id} here!`)),
        catchError(this.handleError<any>('updateHero'))
    );
  }

  

  private log(message: string) {
    this.messageService.add(`HeroService:${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
