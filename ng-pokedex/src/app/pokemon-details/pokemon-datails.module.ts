import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailsRoutingModule } from './pokemon-details-routing.module';

import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';

import { AboutCardComponent } from './components/about-card/about-card.component';
import { InfoChartCardComponent } from './components/info-card/info-chart-card.component';
import { PokemonPreviewComponent } from './components/pokemon-preview/pokemon-preview.component';
import { RowInfoTagsComponent } from './components/row-info-tags/row-info-tags.component';
import { StatsComponent } from './components/stats/stats.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { TypeDetailsComponent } from './components/type-details/type-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { AddPokemonComponent } from './pages/add-pokemon/add-pokemon.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonDetailsComponent,
    TypesPageComponent,
    AboutCardComponent,
    InfoChartCardComponent,
    PokemonPreviewComponent,
    RowInfoTagsComponent,
    StatsComponent,
    TabContainerComponent,
    TypeDetailsComponent,
    AddPokemonComponent,
  ],
  imports: [
    CommonModule,
    PokemonDetailsRoutingModule,
    SharedModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class PokemonDatailsModule { }
