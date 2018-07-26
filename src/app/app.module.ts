import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';
// MDB Angular Free

import { AppComponent } from './app.component';
import {MovieListComponent } from './movie-list.component';
import {ApiService} from './api.service';
import {MovieFilterPipe} from './movie-filter.pipe';
import {ReviewComponent } from './review.component';
import {DetailsComponent} from './movie-detail.component';

 const routes :Routes =[
   
    { path: '', component: MovieListComponent },
    { path: 'movie/:movieId', component: DetailsComponent }
   
 ]
@NgModule({
  declarations: [
    AppComponent,MovieListComponent,
    MovieFilterPipe,
    ReviewComponent ,
    DetailsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
   

  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
