import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  items: any[] = [];
  movie: any;
  url = 'https://image.tmdb.org/t/p/w400/';
  constructor(public _ps: PeliculasService, private actRoute: ActivatedRoute) {

    this.actRoute.params.subscribe(param => {
      this.movie = this._ps.getMovie(param['pelicula']);
      if (!this.movie ) {
        alert('no popular or billboard load');
      } else {
       this.url = this.url + this.movie.poster_path;
       console.log(this.url);
      }
    });
  }

  ngOnInit() {
  }

}
