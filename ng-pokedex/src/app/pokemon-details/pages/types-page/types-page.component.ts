import { Component } from '@angular/core';
import { PokemonService } from '@app/services/pokemon/pokemon.service';
import { RequestNameUri } from '../../../../types/pokemonRequest.types';
import { PokemonTypeDetails } from '../../../../types/typesPokemon';

@Component({
  selector: 'app-types-page',
  templateUrl: './types-page.component.html',
  styleUrls: ['./types-page.component.scss']
})
export class TypesPageComponent {
  pokemonTypes: PokemonTypeDetails[] = []

  constructor(private apiService: PokemonService) { }

  ngOnInit(): void {
    this.apiService.getAllPokemonTypes().subscribe((pokemonTypes: RequestNameUri[]) => {
      for (const typeItem of pokemonTypes) {
        this.apiService.getPokemonTypes(typeItem.url).subscribe((pokemonType: PokemonTypeDetails) => {
          console.log(pokemonType)
          this.pokemonTypes.push(pokemonType)
        });
      }
    });
  }
}
