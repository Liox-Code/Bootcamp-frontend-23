import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { GenerationService } from '../../services/generation/generation.service';
import { RequestGeneration, RequestPokemonDetails, RequestPokemonSpecies, RequestNameUri, RequestSlotType } from '../../../types/pokemonRequest.types';
import { Pokemon } from '../../../types/typesPokemon';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  pokemonGenerations: RequestGeneration[] = []
  pokemons: Pokemon[] = []

  constructor(
    private pokemonService: PokemonService,
    private generationService: GenerationService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
    this.getGenerations()
  }

  getPokemons(): void {
    this.pokemonService.getAllPokemons(20, 0).subscribe((pokemonLists: RequestNameUri[]) => {
      for (const pokemonItem of pokemonLists) {
        this.getPokemonDetailsAndSpecies(pokemonItem.name);
      }
    });
  }

  getPokemonDetailsAndSpecies(pokemonNameorNumber: string): void {
    this.pokemonService.getPokemonDetails(pokemonNameorNumber).subscribe((details: RequestPokemonDetails) => {
      const pokemon = this.createPokemon(details);
      this.getPokemonSpecies(pokemon, details.id);
    });
  }

  getPokemonSpecies(pokemon: Pokemon, speciesUrl: number): void {
    this.pokemonService.getPokemonSpecies(speciesUrl).subscribe((species: RequestPokemonSpecies) => {
      pokemon.color = species.color.name;
      pokemon.generation = species.generation.name
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
      generation: '',
    };
    return pokemon;
  }

  addPokemonToList(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  getGenerations(): void {
    this.generationService.getAllGenerations().subscribe((generations: RequestNameUri[]) => {
      for (const generation of generations) {
        this.getGeneraDetails(generation.url);
      }
    });
  }

  getGeneraDetails(generationURL: string): void {
    this.generationService.getGenerationDetails(generationURL).subscribe((details: RequestGeneration) => {
      this.pokemonGenerations.push(details)
    });
  }

  selectGeneration(selectedGeneration: RequestGeneration){
    this.pokemons = []
    selectedGeneration.pokemon_species.map((pokemonSpecie) => {
      this.pokemonService.getPokemonDetails(pokemonSpecie.name).subscribe((details: RequestPokemonDetails) => {
        const pokemon = this.createPokemon(details);
        this.getPokemonSpecies(pokemon, details.id);
      });
    })

    // const pokemonsInGeneration = this.pokemons.filter((pokemon) => {
    //   console.log(`${pokemon.generation} === ${selectedGeneration.name}`)
    //   return pokemon.generation === selectedGeneration.name
    // })
    // console.log(pokemonsInGeneration)
  }
}
