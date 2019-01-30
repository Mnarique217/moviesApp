import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { PopularComponent } from './components/popular/popular.component';

const routes: Routes = [
  {path: 'pelicula', component: PeliculaComponent},
  {path: 'cartelera', component: CarteleraComponent},
  {path: 'popular', component: PopularComponent},
  {path: '**', component: CarteleraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
