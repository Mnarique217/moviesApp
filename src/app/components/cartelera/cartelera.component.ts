import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { SinImagenPipe } from '../../pipes/sin-imagen.pipe';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  items: any[];
  titulo: string;
  constructor(public ps: PeliculasService) {
    this.ps.getCartelera().then((data: any) => {
      this.items = data;
      console.log(this.items);
    });

  }

  ngOnInit() {
  }

}
