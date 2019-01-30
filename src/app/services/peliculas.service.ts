import { Injectable } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import 'rxjs/add/operator/map';
import { Jsonp } from '@angular/http';

@Injectable()
export class PeliculasService {
  populars: any[] ;
  private apikey = '';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor( private jsonp: Jsonp ) {

   }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
  return new Promise((resolve , reject) => {
      this.jsonp.get( url ).subscribe(result => {
        if ( result) {
          this.populars = result.json().results;
          resolve(this.populars);
        } else {
          reject(null);
        }
      });
    }).catch(function () {alert('se ha presentado una anomalia'); });
  }

  getCartelera() {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=2018-12-15&primary_release_date.lte=2018-12-31&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url );
  }

  buscarPelicula( texto: string ) {

    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res => res.json());
  }

  getMovie(idx: number) { // validate the possibility of return.
    return this.populars[idx];
  }
}
