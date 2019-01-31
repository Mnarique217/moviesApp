import { Component, OnInit, Input } from '@angular/core';
import { SinImagenPipe } from '../../pipes/sin-imagen.pipe';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input() peliculas: any[];
  // tslint:disable-next-line:no-input-rename
  @Input('titulo') titulo;
  flag: boolean;
  constructor() {
   }

   ngOnInit() {
    console.log(this.peliculas);
    this.peliculas = this.peliculas;
    this.flag = true;
  }

}
