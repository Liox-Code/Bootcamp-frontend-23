import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { RequestGeneration, RequestPokemonDetails, RequestPokemonSpecies, RequestNameUri, RequestSlotType } from '../../../types/pokemonRequest.types';
import { Pokemon } from '../../../types/typesPokemon';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  pokemonGenerations: RequestGeneration[] = []
  allPokemons: RequestNameUri[] = []
  pokemons: Pokemon[] = []

  constructor(private apiService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.apiService.getAllPokemons(20, 0).subscribe((pokemonLists: RequestNameUri[]) => {
      for (const pokemonItem of pokemonLists) {
        this.getPokemonDetailsAndSpecies(pokemonItem.url);
      }
    });
  }

  getPokemonDetailsAndSpecies(pokemonUrl: string): void {
    this.apiService.getPokemonDetails(pokemonUrl).subscribe((details: RequestPokemonDetails) => {
      const pokemon = this.createPokemon(details);
      this.getPokemonSpecies(pokemon, details.species.url);
    });
  }

  getPokemonSpecies(pokemon: Pokemon, speciesUrl: string): void {
    this.apiService.getPokemonSpecies(speciesUrl).subscribe((species: RequestPokemonSpecies) => {
      pokemon.color = species.color.name;
      this.addPokemonToList(pokemon);
    });
  }

  createPokemon(details: RequestPokemonDetails): Pokemon {
    const pokemon: Pokemon = {
      id: details.id,
      image: details.sprites.other['official-artwork'].front_default,
      name: details.species.name,
      color: '',
      type: details.types.map((type: RequestSlotType) => type.type.name),
    };
    return pokemon;
  }

  addPokemonToList(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  selectGeneration(selectedGeneration: string){
    console.log(selectedGeneration)
  }
}
