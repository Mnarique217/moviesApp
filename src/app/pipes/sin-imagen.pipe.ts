import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinImagen'
})
export class SinImagenPipe implements PipeTransform {

  transform(movie: any): any {
    const url = 'https://image.tmdb.org/t/p/w400/';

    if ( movie.poster_path ) {
        return url + movie.poster_path;
      } else {
        return '../assets/img/noimg.png';
      }
  }

}
