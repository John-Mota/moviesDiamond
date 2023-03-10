import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  public movies: any[] = [];
  public movieTitle!: string;
  public hasSearchResults: boolean = false;
  constructor (
    private moviesService: MoviesService
    ) {}

  

  ngOnInit(): void {
    
    this.popularMovies() 
    
    this.moviesService.getSearchResults().subscribe((results: any[]) => {
      this.movies = results;
      this.hasSearchResults = results.length > 0;
    });
  }

  public popularMovies(): void {
    if(!this.hasSearchResults) {
      this.moviesService.getMoviesPopulares()
      .subscribe((response: any) => {
      this.movies = response.results
    });
    }
  }

  public searchMovies(query: string): void {
    this.moviesService.getMoviesSearch(query)
    .subscribe((response: any) => {
      this.moviesService.updateSearchResults(response.results);
      this.hasSearchResults = true;
    })
  }

  public getImageUrl(path: string): string {
    return this.moviesService.getImageUrl(path)
  }
}
