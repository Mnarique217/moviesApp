import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  items: any[] = [];
  constructor(public _ps: PeliculasService, private router: Router) {
    this._ps.getPopulares().then((result: any) => {
      this.items = result;
      console.log(this.items);
    }); // seems a mistake, but is just tslint

  /*  this._ps.getPopulares().subscribe((data) => {
      this.items = data.json().results;
      console.log(this.items);
    });*/
  }
  ngOnInit() {
  }


  verMas(idx: number) {
    this.router.navigate(['/movie', idx]);
   }

}



