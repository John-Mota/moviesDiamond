import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-image-poster',
  templateUrl: './image-poster.component.html',
  styleUrls: ['./image-poster.component.css']
})
export class ImagePosterComponent implements OnInit {

  @Input() movie: any;
  @Input() id!: number;
  public imageUrl: string = ''
  public posteUrl!: string;

  public image!: Observable<SafeUrl>;
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  private API_URL = 'https://image.tmdb.org/t/p/';

 

  ngOnInit() {
    
    const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.moviesService.getMovieId(+id).subscribe((response: any) => {
          this.movie = response;
          console.log(this.movie.poster_path)
          this.imageUrl = this.movie.poster_path
          
        });
      }

      
  }

  public getImagePost(): string {
    
    return `https://image.tmdb.org/t/p/original${this.imageUrl}`;
    
  }

  public showPoster() {
    this.router.navigate(['/post/img', this.movie.id]);
  }

  public hidePoster() {
    this.router.navigate(['/detalhes', this.movie.id]);
  }

  public goBack() {
    window.history.back();
  }
  


}

