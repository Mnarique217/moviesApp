import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  items: any[] = [];
  constructor(public ps: PeliculasService) {
    this.ps.getCartelera().subscribe((data) => {
      this.items = data.json().results;
    });
  }

  ngOnInit() {
  }

}
