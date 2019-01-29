import { Injectable } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import 'rxjs/add/operator/map';
import { Jsonp } from '@angular/http';

@Injectable()
export class PeliculasService {

  private apikey = '544dc170e1224ff4a7f93960ec2b2b12';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor( private jsonp: Jsonp ) {

   }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url );
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

}
