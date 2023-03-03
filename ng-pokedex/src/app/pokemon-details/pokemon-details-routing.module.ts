import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';
import { AddPokemonComponent } from './pages/add-pokemon/add-pokemon.component';
import { LayoutComponent } from '@app/shared/components/layout/layout.component';
import { PokemonDetailsResolver } from '@app/resolvers/pokemon-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/pokemon-details/details',
        pathMatch: 'full'
      },
      {
        path: 'details/:id',
        component: PokemonDetailsComponent,
        resolve: {
          data: PokemonDetailsResolver
        }
      },
      {
        path: 'type/:id',
        component: TypesPageComponent
      },
      {
        path: 'add-pokemon',
        component: AddPokemonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonDetailsRoutingModule { }
