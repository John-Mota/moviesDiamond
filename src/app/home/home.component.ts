import { Component, HostListener, OnInit } from '@angular/core';
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
  public page: number = 1;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.popularMovies();

    this.moviesService.getSearchResults().subscribe((results: any[]) => {
      this.movies = results;
      this.hasSearchResults = results.length > 0;
    });
  }

  public popularMovies(): void {
    if (!this.hasSearchResults) {
      this.moviesService.getMoviesPopulares(this.page).subscribe((response: any) => {
        this.movies = [...this.movies, ...response.results];
      });
    }
  }

  @HostListener('window:scroll', [])
  public onScroll(): void {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight - 200) {
      this.carregarMaisPopulares();
    }
  }

  public carregarMaisPopulares(): void {
    this.page++;
    this.popularMovies();
  }

  public voltarMaisPopulares(): void {
    if (this.page > 1) {
      this.page--;
      this.popularMovies();
    }
  }

  public searchMovies(query: string): void {
    this.moviesService.getMoviesSearch(query).subscribe((response: any) => {
      this.moviesService.updateSearchResults(response.results);
      this.hasSearchResults = true;
    });
  }

  public getImageUrl(path: string): string {
    return this.moviesService.getImageUrl(path);
  }
}
