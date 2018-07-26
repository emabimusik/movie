import { Component, OnChanges, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnChanges {
  
  @Input()rating : number = 4;
  
  reviewWidth: number;
  ngOnChanges():void{
   this.reviewWidth = this.rating * 86 / 5;
  }
  
}
