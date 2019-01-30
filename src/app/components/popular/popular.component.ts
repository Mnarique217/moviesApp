import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

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
