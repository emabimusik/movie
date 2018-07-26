import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable ,pipe} from 'rxjs';
import { map } from 'rxjs/operators';
import {IMovie} from './movie';

@Injectable()
export class ApiService {
  movies: IMovie[];
  movie: IMovie;

 constructor(private http :HttpClient,
  private route: ActivatedRoute){

 }
  private  _movieUrl ='/assets/movies.json';

  GetAllMovie(): Observable<any> {
    return this.http.get(this._movieUrl);
        
}

getMovieId(id:number) :Observable <IMovie> {

  return this.GetAllMovie().pipe(map(movies=> movies.find(movie => movie.movieId==id)));
    
 }
  
  getMovies():IMovie[]{
    return[
      {
        "movieId": 2,
        "movieName": "Titanic!",
        "movieStar": "DiCaprio",
        "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        "releaseDate": "3/13/2016",
        "price": 8.00,
        "starRating": 4.5,
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMzg1MDA0MTU2Nl5BMl5BanBnXkFtZTcwMTMzMjkxNw@@._V1_.jpg"
      },
      {
        "movieId": 3,
        "movieName": "Jaws!",
        "movieStar": "Shaw",
        "description": "When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and a grizzled fisherman set out to stop it.",
        "releaseDate": "4/13/2016",
        "price": 6.00,
        "starRating": 4.8,
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
      },
      {
        "movieId": 4,
        "movieName": "Sully",
        "movieStar": "Hanks",
        "description": "The story of Chesley Sullenberger, who became a hero after gliding his plane along the water in the Hudson River, saving all of the airplane flights 155 crew and passengers.",
        "releaseDate": "9/9/2016",
        "price": 16.00,
        "starRating": 3.5,
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTg5NTUwNDIyOV5BMl5BanBnXkFtZTgwMjI2OTc3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "movieId": 5,
        "movieName": "Wild Life",
        "movieStar": "Albert",
        "description": "A daring parrot recounts how Robinson Crusoe came to be stranded on a tropical island.",
        "releaseDate": "9/9/2016",
        "price": 14.00,
        "starRating": 5.0,
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMjA4OTE0MjAwNl5BMl5BanBnXkFtZTgwMjY4Mzg2OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "movieId": 6,
        "movieName": "Other People",
        "movieStar": "Plemons",
        "description": "A struggling comedy writer, fresh off a breakup and in the midst of the worst year of his life, returns to Sacramento to care for his dying mother.",
        "releaseDate": "9/10/2016",
        "price": 16.00,
        "starRating": 2.2,
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTk2NzUzNTgyNl5BMl5BanBnXkFtZTgwNjkzODM2OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
      }
    ]
  }



 

}


