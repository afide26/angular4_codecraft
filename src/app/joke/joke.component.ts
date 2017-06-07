import { Component, OnInit, Input,Output, EventEmitter,OnDestroy } from '@angular/core';

import { Joke } from '../models/joke.model';
import { CcCardHoverDirective } from '../cc-card-hover.directive';
import { LikeComponent } from '../like/like.component';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input('joke') data: Joke
  @Output() onDeleteJoke = new EventEmitter<Joke>();

  constructor() { }
  
  deleteJoke(){
    this.onDeleteJoke.emit(this.data);
  }
  
  ngOnInit() {
  }
  
  ngOnDestroy(){
    alert("Are you sure you want to delete this joke!");
    console.log("You removed:", this.data.setup);
  }
}
