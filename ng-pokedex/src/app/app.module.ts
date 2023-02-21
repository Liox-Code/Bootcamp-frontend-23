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

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    SearchBarComponent,
    HomePageComponent,
    TypesPageComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
