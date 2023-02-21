import { Component } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { GetPokemonType, PokemonTypeResults } from '../../../types/typesGetPokemonType';
import { PokemonTypeDetails } from '../../../types/typesPokemon';

@Component({
  selector: 'app-types-page',
  templateUrl: './types-page.component.html',
  styleUrls: ['./types-page.component.scss']
})
export class TypesPageComponent {
  pokemonTypes: PokemonTypeDetails[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllPokemonTypes().subscribe((pokemonTypes: PokemonTypeResults[]) => {
      for (const typeItem of pokemonTypes) {
        this.apiService.getPokemonTypes(typeItem.url).subscribe((pokemonType: PokemonTypeDetails) => {
          this.pokemonTypes.push(pokemonType)
        });
      }
    });
  }
}
