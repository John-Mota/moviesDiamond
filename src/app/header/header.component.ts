import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public nameMovie: string = ''

  movies: any[] = []
  constructor(
    private moviesService: MoviesService,
    private homeComponent: HomeComponent
    ) {}

  ngOnInit(): void {}

  public searchMovies(query: string) {
    this.homeComponent.searchMovies(query);
    }

}
