import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SymbolListComponent } from './components/symbol-list/symbol-list.component';
import { SymbolComponent } from './components/symbol/symbol.component';
import { TypeDetailsComponent } from './components/type-details/type-details.component';
import { PokemonPreviewComponent } from './components/pokemon-preview/pokemon-preview.component';
import { RowInfoTagsComponent } from './components/row-info-tags/row-info-tags.component';
import { InfoChartCardComponent } from './components/info-card/info-chart-card.component';
import { TagPokemonTypeComponent } from './components/tag-pokemon-type/tag-pokemon-type.component';
import { BadgeComponent } from './components/badge/badge.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { StatsComponent } from './components/stats/stats.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    HomePageComponent,
    AppComponent,
    CardComponent,
    NavbarComponent,
    SearchBarComponent,
    TypesPageComponent,
    CardListComponent,
    SymbolListComponent,
    SymbolComponent,
    TypeDetailsComponent,
    PokemonPreviewComponent,
    RowInfoTagsComponent,
    InfoChartCardComponent,
    TagPokemonTypeComponent,
    BadgeComponent,
    DropdownComponent,
    NotFoundComponent,
    PokemonDetailsComponent,
    TabContainerComponent,
    AboutCardComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
