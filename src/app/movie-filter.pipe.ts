import {Pipe, PipeTransform} from '@angular/core';
import {ApiService} from './api.service'


@Pipe({
    name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

    movies : any;
    movie : any[] = []
    seePoster;
    constructor(private api : ApiService){
  
    }
    ngOnInit(){
      this.api.GetAllMovie().subscribe(result=>{
         this. movies = result
      },error=>console.error());
    }
    transform(value:any, filter: string):any {
        filter = filter ? filter.toLocaleLowerCase() : null;
         for (let mov in this.movies) {
             this.movie = mov as any
         }
           
        return filter ? value.filter((movie:any) =>
            movie.movieName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    } 

}
