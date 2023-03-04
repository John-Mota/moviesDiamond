import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey: string = 'b6ff45cb8c9ed4be824152fec3320156'
  private url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}language=en-US&page=1`

  constructor(private http: HttpClient) {}


  public getMoviesPopulares(url: string)  {
    return this.http.get(this.url)
    }

  public getImageUrl(path: string): string {
    const baseUrl = '';
    return `https://image.tmdb.org/t/p/w500/${path}`
  }
 
}
