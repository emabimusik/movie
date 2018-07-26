import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ApiService} from './api.service';
import {IMovie} from './movie';

@Component({
  selector: 'app-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls:['/movie-detail.component.css']
 
})
export class DetailsComponent {


  movie;

   constructor( private route: ActivatedRoute,
    private  api: ApiService,
    private location: Location ){

   }

   ngOnInit(): void {
    this.getMovieById()
   };
   
   getMovieById(){ 
    
    }
  
   
  
}

