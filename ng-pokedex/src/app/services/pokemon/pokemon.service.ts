import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon, PokemonTypeDetails } from '../../../types/typesPokemon';
import { AllResults, RequestPokemonDetails, RequestPokemonSpecies, RequestPokemonType, RequestNameUri, EvolutionChain } from '../../../types/pokemonRequest.types';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/';

  colors: { [key: string]: string; } = {
    'black': 'container-black',
    'blue': 'container-blue',
    'brown': 'container-brown',
    'gray': 'container-gray',
    'green': 'container-green',
    'pink': 'container-pink',
    'purple': 'container-purple',
    'red': 'container-red',
    'white': 'container-white',
    'yellow': 'container-yellow',
    'cyan': 'container-cyan',
    'unknown': 'container-unknown',
  }
  icons: { [key: string]: string; } = {
    'normal': 'normal-icon',
    'fighting': 'fighting-icon',
    'flying': 'flying-icon',
    'poison': 'poison-icon',
    'ground': 'ground-icon',
    'rock': 'rock-icon',
    'bug': 'bug-icon',
    'ghost': 'ghost-icon',
    'steel': 'steel-icon',
    'fire': 'fire-icon',
    'water': 'water-icon',
    'grass': 'grass-icon',
    'electric': 'electric-icon',
    'psychic': 'psychic-icon',
    'ice': 'ice-icon',
    'dragon': 'dragon-icon',
    'dark': 'dark-icon',
    'fairy': 'fairy-icon',
    'unknown': 'unknown-icon',
    'shadow': 'shadow-icon',
  }

  constructor(private http: HttpClient) { }

  getAllPokemons(limit: number, offset: number): Observable<RequestNameUri[]> {
    const url = `${this.apiUrl}pokemon?limit=${limit}&offset=${offset}`;
    return this.http.get<AllResults>(url).pipe(map((res) => { return this.parseAllPokemons(res) }))
  }

  private parseAllPokemons(response: AllResults): RequestNameUri[] {
    const parsedAllPokemonsData = response.results.map(
      (result) => {
        return result
      }
    );
    return parsedAllPokemonsData
  }

  getPokemonDetails(pokemonNumberOrName: string): Observable<RequestPokemonDetails> {
    const url = `${this.apiUrl}pokemon/${pokemonNumberOrName}`;
    return this.http.get<RequestPokemonDetails>(url).pipe(map((res) => { return this.parsePokemonDetails(res) }))
  }

  private parsePokemonDetails(response: RequestPokemonDetails): RequestPokemonDetails {
    const pokemonDetails = response
    for(const pokemon of pokemonDetails.types) {
      pokemon.type.name = this.icons[pokemon.type.name]
    }
    return pokemonDetails
  }

  getPokemonSpecies(pokemonNumberOrName: string): Observable<RequestPokemonSpecies> {
    const url = `${this.apiUrl}pokemon-species/${pokemonNumberOrName}`;
    return this.http.get<RequestPokemonSpecies>(url).pipe(map((res) => { return this.parsePokemonSpecies(res) }))
  }

  private parsePokemonSpecies(response: RequestPokemonSpecies): RequestPokemonSpecies {
    const pokemonSpecies = response
    pokemonSpecies.color.name = this.colors[pokemonSpecies.color.name]
    return pokemonSpecies
  }

  getAllPokemonTypes(): Observable<RequestNameUri[]> {
    const url = `${this.apiUrl}type`;
    return this.http.get<AllResults>(url).pipe(map((res) => { return this.parseAllPokemonTypes(res) }))
  }

  private parseAllPokemonTypes(response: AllResults): RequestNameUri[] {
    const parsedAllPokemonsData = response.results.map(
      (result) => {
        return result
      }
    );
    return parsedAllPokemonsData
  }

  getPokemonTypes(url: string): Observable<PokemonTypeDetails> {
    return this.http.get<RequestPokemonType>(url).pipe(map((res) => { return this.parsePokemonTypes(res) }))
  }

  private parsePokemonTypes(response: RequestPokemonType): PokemonTypeDetails {
    const { id, name, damage_relations, pokemon} = response

    const {
      double_damage_from,
      double_damage_to,
      half_damage_from,
      half_damage_to,
      no_damage_from,
      no_damage_to,
    } = damage_relations

    const effectivenessTypes = [
      ...double_damage_to.map(({name}) => this.setTypeIcon(name)),
      ...half_damage_from.map(({name}) => this.setTypeIcon(name)),
      ...no_damage_from.map(({name}) => this.setTypeIcon(name))
    ]

    const weaknessesTypes = [
      ...double_damage_from.map(({name}) => this.setTypeIcon(name)),
      ...half_damage_to.map(({name}) => this.setTypeIcon(name)),
      ...no_damage_to.map(({name}) => this.setTypeIcon(name))
    ]

    const pokemons = [...pokemon.slice(0, 3).map(({pokemon}) => pokemon.name)]

    const parsedPokemonTypes: PokemonTypeDetails = {
      id: id,
      type: this.setTypeIcon(name),
      effectivenessTypes: effectivenessTypes,
      weaknessesTypes: weaknessesTypes,
      pokemons: pokemons,
    }

    return parsedPokemonTypes
  }

  getPokemonEvolutionChain(url: string): Observable<string[]> {
    return this.http.get<EvolutionChain>(url)
      .pipe(map((evolutionChain) =>  this.getEvolutionSpecies(evolutionChain)))
  }

  private getEvolutionSpecies(evolutionChain: EvolutionChain): string[] {
    const evolutionsUrls: string[] = []
    let currentEvolution = evolutionChain.chain
    evolutionsUrls.push(currentEvolution.species.name);

    while (currentEvolution.evolves_to.length > 0){
      currentEvolution = currentEvolution.evolves_to[0];
      evolutionsUrls.push(currentEvolution.species.name);
    }

    return evolutionsUrls
  }

  private setTypeIcon(typeName: string) {
    return {
      name: typeName,
      icon: this.icons[typeName],
    }
  }
}
