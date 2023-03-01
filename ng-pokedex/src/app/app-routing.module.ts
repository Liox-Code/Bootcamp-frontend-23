import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pokemon-list/pokemon-list.module').then( module => module.PokemonListModule)
  },
  {
    path: 'pokemon-details',
    loadChildren: () => import('./pokemon-details/pokemon-datails.module').then( module => module.PokemonDatailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
