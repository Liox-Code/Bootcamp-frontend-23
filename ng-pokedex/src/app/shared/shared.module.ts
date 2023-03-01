import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { BadgeComponent } from './components/badge/badge.component';
import { DropdownComponent } from './components/dropdown/dropdown.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { SymbolComponent } from './components/symbol/symbol.component'
import { SymbolListComponent } from './components/symbol-list/symbol-list.component'
import { TagPokemonTypeComponent } from './components/tag-pokemon-type/tag-pokemon-type.component'



@NgModule({
  declarations: [
    BadgeComponent,
    DropdownComponent,
    NavbarComponent,
    NotFoundComponent,
    SymbolComponent,
    SymbolListComponent,
    TagPokemonTypeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    BadgeComponent,
    DropdownComponent,
    NavbarComponent,
    NotFoundComponent,
    SymbolComponent,
    SymbolListComponent,
    TagPokemonTypeComponent
  ]
})
export class SharedModule { }
