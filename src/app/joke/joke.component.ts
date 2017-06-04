import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

import { Joke } from '../models/joke.model'

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

}
