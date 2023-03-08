import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  public movie: any
  
constructor(
  private moviesService: MoviesService,
  private route: ActivatedRoute,
  private readonly router: Router
  ) {}


ngOnInit(): void {

  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.moviesService.getMovieId(+id).subscribe((response: any) => {
      this.movie = response;
      //console.log(this.movie.poster_path)
    });
  }
    
}



  public getImageUrl(path: string): string {
    return this.moviesService.getImageUrl(path)
  }

  public goToMovieDetails(id: number): void {
    this.router.navigate(['post', 'img', id]);
  }
}


