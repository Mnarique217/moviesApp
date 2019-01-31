import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { PopularComponent } from './components/popular/popular.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'pelicula/:pelicula', component: PeliculaComponent},
  {path: 'cartelera', component: CarteleraComponent},
  {path: 'home', component: HomeComponent},
  {path: 'popular', component: PopularComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
