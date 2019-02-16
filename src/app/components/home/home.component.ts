import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartelera: any[];
  populares: any[];
  ninos: any[];
  titulo: string;
  ready: boolean;
  constructor(public ps: PeliculasService) {
    this.ps.getCartelera().then((data: any) => {
      this.cartelera = data;
   this.cartelera.forEach((e) => {
    console.log(e.poster_path);
    console.log('\n');
    console.log(e.overview);
    console.log(e.title);
    });
    });
 

    this.ps.getPopulares().then((data: any) => {
      this.populares = data;
    });

    this.ps.getNinos().then((data: any) => {
      this.ninos = data;
    });

    this.ps.trailers().then((data: any) => {
    });

  }
  ngOnInit() {
  }

}
