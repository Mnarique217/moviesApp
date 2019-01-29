import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';

const routes: Routes = [
  {path: 'pelicula', component: PeliculaComponent},
  {path: 'cartelera', component: CarteleraComponent},
  {path: '**', component: CarteleraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
