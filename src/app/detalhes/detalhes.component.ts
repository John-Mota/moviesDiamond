import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  public movie: any
  
constructor(
  private moviesService: MoviesService,
  private route: ActivatedRoute
  ) {}


ngOnInit(): void {

  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.moviesService.getMovieId(+id).subscribe((response: any) => {
      this.movie = response;
      console.log(this.movie)
    });
  }
    
}

public goBack() {
  window.history.back();
}



  public getImageUrl(path: string): string {
    return this.moviesService.getImageUrl(path)
  }
}


/*
public searchMovies(query: string): void {
  this.moviesService.getMoviesSearch(query)
  .subscribe((response: any) => {
    this.moviesService.updateSearchResults(response.results);
    this.hasSearchResults = true;
  })
}
*/

