import { Component } from '@angular/core';
import { JokeFormComponent } from './joke-form/joke-form.component'
import { JokeListComponent } from './joke-list/joke-list.component'
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the Joke Application!';
}
