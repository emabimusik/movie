import { Component } from '@angular/core';
import {ApiService} from './api.service';
import {MovieFilterPipe} from './movie-filter.pipe';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  
})
export class MovieListComponent {
  title = 'app';
  movies : any;
  seePoster : boolean = false;;
  
  listFilter: string = 'Titanic';
  constructor(private api : ApiService){

  }
  ngOnInit(){
    this.api.GetAllMovie().subscribe(result=>{
       this. movies = result
     
    },error=>console.error());
  }
  toggleImage():void{
    this.seePoster = !this.seePoster;
  }
  onRatingClicked(message:string){
     this.title ="Movie List:"+ message;
  }
}
