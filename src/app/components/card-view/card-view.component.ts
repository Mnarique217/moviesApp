import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Input() cardMovies: any[];
  @Input() cardTitle: string;
  @Input() idCard: string; // for evade duplicate content

  slide_mrgin_t_move = 25; // how many pixels margin to move
  current_margin = 0; // initially is 0
  max_margin_left_slide =  -100; // use dinamically!
  max_margin_right_slide = 0; // use dinamically!
  transition_duration = 800;
  moviesToDisplay: any[];
  readyToDisplay = false;
 constructor() { }

 ngOnInit() {
    this.moviesToDisplay = this.cardMovies.filter(item => item.poster_path != null && item.overview !== '');
    const width = this.moviesToDisplay.length;
    console.log(this.cardMovies);

    this.max_margin_left_slide = (width - 4) * 25 * -1;
    if ( this.max_margin_left_slide > 0 ) {
      this.max_margin_left_slide = 0;
    }
    if ( this.max_margin_left_slide > 0 ) {
        this.max_margin_left_slide *= - 1 ;
    }
    this.readyToDisplay = true;
 }

 card_next() {
   if ( this.current_margin > this.max_margin_left_slide ) {
        this.current_margin = this.current_margin - this.slide_mrgin_t_move;
        $('#' + this.idCard + '').animate({marginLeft: '' + this.current_margin + '%' }, this.transition_duration );
   }
}

card_prev() {
    if ( this.current_margin < this.max_margin_right_slide ) {
     this.current_margin = this.current_margin + this.slide_mrgin_t_move;
     $('#' + this.idCard + '').animate({marginLeft: '' + this.current_margin + '%' }, this.transition_duration );
    }
}
}
