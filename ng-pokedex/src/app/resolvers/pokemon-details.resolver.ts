import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of} from 'rxjs';
import { PokemonService } from '@app/services/pokemon/pokemon.service';
import { RequestSlotType } from '../../types/pokemonRequest.types';
import { Pokemon, PokemonDetails } from '../../types/typesPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsResolver implements Resolve<Observable<PokemonDetails>> {
  constructor(private pokemonService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonDetails> {
    const id = route.paramMap.get('id') || '1'

    const pokemonDetails: PokemonDetails = {
      id: 1,
      name: '',
      generation: '',
      type: [],
      image: '',
      color: '',
      data: {
        species: [''],
        height: 0,
        weight: 0,
        abilities: [''],
        weaknesses: ['']
      },
      stats: [],
      evolutions: [],
      flavor_text_entries: []
    }

    this.pokemonService.getPokemonDetails(id).subscribe(details => {
      pokemonDetails.id = details.id
      pokemonDetails.name = details.name
      pokemonDetails.image = details.sprites.other['official-artwork'].front_default
      pokemonDetails.type = details.types.map((type: RequestSlotType) => type.type.name)
      pokemonDetails.data.species = details.types.map((type: RequestSlotType) => type.type.name)
      pokemonDetails.data.height = details.height
      pokemonDetails.data.weight = details.weight
      pokemonDetails.data.abilities = details.abilities.map((ability) => ability.ability.name)

      details.types.map((type: RequestSlotType) => {
        this.pokemonService.getPokemonTypes(type.type.url).subscribe((type) => {
          pokemonDetails.data.weaknesses = type.weaknessesTypes.map((type) => type.name)
        })
      })

      details.stats.forEach((stat) => {
        pokemonDetails.stats.push( {
          name: stat.stat.name,
          value: stat.base_stat
        })
      })
    })
    this.pokemonService.getPokemonSpecies(id).subscribe(species => {
      pokemonDetails.color = species.color.name;
      pokemonDetails.generation = species.generation.name;

      species.flavor_text_entries.forEach((textEntry) => {
        pokemonDetails.flavor_text_entries.push({
          flavor_text: textEntry.flavor_text,
          language: textEntry.language,
          version: textEntry.version
        });
      })

      this.pokemonService.getPokemonEvolutionChain(species.evolution_chain.url).subscribe((pokemonNames) => {

        pokemonNames.map((name) => {
          const pokemon: Pokemon = {
            id: 0,
            name: '',
            image: '',
            color: '',
            type: [],
            generation: '',
          }
          this.pokemonService.getPokemonDetails(name).subscribe(details => {
            pokemon.id = details.id
            pokemon.name = details.name
            pokemon.image = details.sprites.other['official-artwork'].front_default
            pokemon.type = details.types.map((type: RequestSlotType) => type.type.name)
          })

          this.pokemonService.getPokemonSpecies(name).subscribe(species => {
            pokemon.color = species.color.name
            pokemon.generation = species.generation.name
          })

          pokemonDetails.evolutions.push(pokemon)
        })
      })
    })

    return of(pokemonDetails)
  }
}
