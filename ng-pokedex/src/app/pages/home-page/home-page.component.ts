import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { GetPokemonsResult } from '../../../types/typesGetPokemons';
import { GetPokemonDetails, Type } from '../../../types/typesGetPokemonDetails';
import { Pokemon } from '../../../types/typesPokemon';
import { GetPokemonSpecies } from '../../../types/typesGetPokemonSpecies';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  allPokemons: GetPokemonsResult[] = [];
  pokemons: Pokemon[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllPokemons(20, 0).subscribe((pokemonLists: GetPokemonsResult[]) => {
      for (const pokemonItem of pokemonLists) {
        const pokemon: Pokemon = {
          id: 0,
          image: '',
          name: pokemonItem.name,
          color: '',
          type: [],
        }
        this.apiService.getPokemonDetails(pokemonItem.url).subscribe((details: GetPokemonDetails) => {
          pokemon.id = details.id;
          pokemon.image = details.sprites.front_default;
          pokemon.type = details.types.map((type: Type) => type.type.name);
          this.apiService.getPokemonSpecies(details.species.url).subscribe((species: GetPokemonSpecies) => {
            pokemon.color = species.color.name;
          });
        });

        this.pokemons.push(pokemon)
      }
    });
  }
}
