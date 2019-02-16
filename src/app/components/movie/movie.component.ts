import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  url = 'https://image.tmdb.org/t/p/original/';
  movie: any;
  constructor(public _ps: PeliculasService, private actRoute: ActivatedRoute) {

    this.actRoute.params.subscribe(param => {
      this.movie = this._ps.getMovie(param['idx']);
      if (!this.movie ) {
        alert('validate is');
      } else {
       this.url = this.url + this.movie.poster_path;
       console.log(this.url);
      }
    });
  }

  ngOnInit() {
  }

}
