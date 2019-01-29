import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasService } from './services/peliculas.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopularComponent } from './components/popular/popular.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularComponent,
    PeliculaComponent,
    CarteleraComponent
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
