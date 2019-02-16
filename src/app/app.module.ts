import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasService } from './services/peliculas.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopularComponent } from './components/popular/popular.component';

import { SinImagenPipe } from './pipes/sin-imagen.pipe';
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/home/galeria.component';
import { MovieComponent } from './components/movie/movie.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardViewComponent } from './components/card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularComponent,
    SinImagenPipe,
    HomeComponent,
    GaleriaComponent,
    MovieComponent,
    SliderComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
