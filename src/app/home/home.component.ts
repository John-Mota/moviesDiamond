import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private apiKey: string = 'b6ff45cb8c9ed4be824152fec3320156'
  private url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}language=en-US&page=1`

  movies: any[] = []
  constructor (private moviesService: MoviesService) {}

  ngOnInit(): void {
    
    this.moviesService.getMoviesPopulares(this.url)
    .subscribe((response: any) => {
      this.movies = response.results;
    })
      
  }
  getImageUrl(path: string): string {
    return this.moviesService.getImageUrl(path)
  }

}
