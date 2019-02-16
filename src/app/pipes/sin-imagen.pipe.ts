import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinImagen'
})
export class SinImagenPipe implements PipeTransform {

  transform(movie: any): any {

    if ( movie.backdrop_path ) {
        return  movie.backdrop_path;
    } else
      if ( movie.poster_path ) {
      return  movie.poster_path;
      } else {
        return '../assets/img/noimg.png';
      }
  }

}
