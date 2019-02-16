import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { PopularComponent } from './components/popular/popular.component';
import { MovieComponent } from './components/movie/movie.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'cartelera', component: CarteleraComponent},
  {path: 'home', component: HomeComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'movie/:idx', component: MovieComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
