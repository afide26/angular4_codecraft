import { Component, OnInit, OnDestroy } from '@angular/core';
import { Joke } from '../models/joke.model'
@Component({
  selector: 'app-joke-list',
  template: `
    <app-joke-form (jokeCreated)="addJoke($event)"></app-joke-form>
    <app-joke *ngFor="let j of jokes; let i = index" [joke]="j" (onDeleteJoke)="deleteJoke($event)">
    <span class="setup">{{i + 1}}. {{ j.setup }}</span>
    </app-joke>
  `,
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
   }
  
  addJoke(joke){
    this.jokes.unshift(joke);
  }

  deleteJoke(joke){
    let jokeToDelete = this.jokes.indexOf(joke);
    if(jokeToDelete !== -1){
      this.jokes.splice(jokeToDelete,1);
    }
  }
  ngOnInit() {
  }

}
