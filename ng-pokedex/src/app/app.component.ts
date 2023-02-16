import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pokemons: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllPokemons(20, 0).subscribe((response: any) => {
      this.pokemons = response.results;
      for (const pokemon of this.pokemons) {
        this.apiService.getPokemonDetails(pokemon.url).subscribe((details: any) => {
          pokemon.image = details.sprites.front_default;
          pokemon.type = details.types.map((t: any) => t.type.name);
          this.apiService.getPokemonDetails(details.species.url).subscribe((details: any) => {
            pokemon.color = details.color.name;
          });
        });
      }
    });
  }

}
