import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import axios from 'axios';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private searchResultSubject = new BehaviorSubject<any[]>([])

  private apiKey: string = 'b6ff45cb8c9ed4be824152fec3320156';
  private apiUrl: string = 'https://api.themoviedb.org/3';
  private popularEndPoint: string = '/movie/popular'
  //?api_key=
  public movieTitle: any
  
  constructor(private http: HttpClient) {}

  public getMoviesPopulares() {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&languagem=en-US&page1`;

    return this.http.get(url)
  }
  //  https://api.themoviedb.org/3/search/movie?api_key=b6ff45cb8c9ed4be824152fec3320156&query=Black Panther: Wakanda Forever
  public getMoviesSearch(query: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`; 

    return this.http.get(url)
  }

  public updateSearchResults(results: any[]): void {
    this.searchResultSubject.next(results)
    console.log(results)
  }

  get searchResults() {
    return this.searchResultSubject.asObservable();
  }

  public getSearchResults(): Observable<any[]> {
    return this.searchResultSubject.asObservable();
  }
  

  public getImageUrl(path: string): string {
    const baseUrl = '';
    return `https://image.tmdb.org/t/p/w500/${path}`;
  }

  
}
  
