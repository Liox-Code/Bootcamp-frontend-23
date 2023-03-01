import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemon-details/details',
    pathMatch: 'full'
  },
  {
    path: 'details',
    component: PokemonDetailsComponent
  },
  {
    path: 'type',
    component: TypesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonDetailsRoutingModule { }
