import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomePageComponent,
    CardComponent,
    CardListComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    SharedModule,
    MatIconModule
  ]
})
export class PokemonListModule { }
