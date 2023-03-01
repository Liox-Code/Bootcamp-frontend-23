import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './components/dropdown/dropdown.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { NotFoundComponent } from './components/not-found/not-found.component'



@NgModule({
  declarations: [
    DropdownComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownComponent,
    NavbarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
