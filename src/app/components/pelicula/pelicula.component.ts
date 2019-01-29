import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  items: any[] = [];
  constructor(public _ps: PeliculasService) {
    this._ps.getPopulares().subscribe((data) => {
      this.items = data.json().results;
      console.log(this.items);
    });
  }

  ngOnInit() {
  }

}
