import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
  @Input() iLike:boolean = false;
  @Input() totalLikes:number = 0
  
  constructor() { }
  
  onClick(){
    this.iLike = !this.iLike;
    this.totalLikes += this.iLike ? 1 : -1;
  }

}
