import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { element } from 'protractor';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

   @Input() sliderMovies: any[];
   sliderMoviesToDisplay: any[];
   slide_mrgin_t_move = 100; // how many pixels margin to move
   current_margin = 0; // initially is 0
   max_margin_left_slide =  0; // use dinamically!
   max_margin_right_slide = 0; // use dinamically!
   displayReady = false;
  constructor() { }

  ngOnInit() {
     this.sliderMoviesToDisplay = this.sliderMovies.filter(item => item.backdrop_path != null);
     console.log('slider');
     console.log(this.sliderMoviesToDisplay);
     let width = this.sliderMoviesToDisplay.length;
     this.max_margin_left_slide = (width - 1) * 100  * -1;
     width = width * 100;
     $('#slide').css('width', '' + width + '%');
     this.displayReady = true;
  }

  slide_next() {
    if ( this.current_margin > this.max_margin_left_slide ) {
         this.current_margin = this.current_margin - this.slide_mrgin_t_move;
         $('#slide').animate({marginLeft: '' + this.current_margin + '%' }, 750 );
    }
 }

 slide_prev() {
     if ( this.current_margin < this.max_margin_right_slide ) {
      this.current_margin = this.current_margin + this.slide_mrgin_t_move;
      $('#slide').animate({marginLeft: '' + this.current_margin + '%' }, 750 );
     }
 }
}
