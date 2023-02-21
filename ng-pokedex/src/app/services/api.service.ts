import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetPokemons, GetPokemonsResult } from '../../types/typesGetPokemons';
import { GetAllPokemonTypes, GetPokemonType, PokemonTypeResults } from '../../types/typesGetPokemonType';
import { GetPokemonDetails } from '../../types/typesGetPokemonDetails';
import { GetPokemonSpecies } from '../../types/typesGetPokemonSpecies';
import { PokemonTypeDetails } from '../../types/typesPokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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
    'normal': "normal-icon",
    'fighting': "fighting-icon",
    'flying': "flying-icon",
    'poison': "poison-icon",
    'ground': "ground-icon",
    'rock': "rock-icon",
    'bug': "bug-icon",
    'ghost': "ghost-icon",
    'steel': "steel-icon",
    'fire': "fire-icon",
    'water': "water-icon",
    'grass': "grass-icon",
    'electric': "electric-icon",
    'psychic': "psychic-icon",
    'ice': "ice-icon",
    'dragon': "dragon-icon",
    'dark': "dark-icon",
    'fairy': "fairy-icon",
    'unknown': "unknown-icon",
    'shadow': "shadow-icon",
  }

  constructor(private http: HttpClient) { }

  getAllPokemons(limit: number, offset: number): Observable<GetPokemonsResult[]> {
    const url = `${this.apiUrl}pokemon?limit=${limit}&offset=${offset}`;
    return this.http.get<GetPokemons>(url).pipe(map((res) => { return this.parseAllPokemons(res) }))
  }

  private parseAllPokemons(response: GetPokemons): GetPokemonsResult[] {
    const parsedAllPokemonsData = response.results.map(
      (result) => {
        return result
      }
    );
    return parsedAllPokemonsData
  }

  getPokemonDetails(url: string): Observable<GetPokemonDetails> {
    return this.http.get<GetPokemonDetails>(url).pipe(map((res) => { return this.parsePokemonDetails(res) }))
  }

  private parsePokemonDetails(response: GetPokemonDetails): GetPokemonDetails {
    const pokemonDetails = response
    return pokemonDetails
  }

  getPokemonSpecies(url: string): Observable<GetPokemonSpecies> {
    return this.http.get<GetPokemonSpecies>(url).pipe(map((res) => { return this.parsePokemonSpecies(res) }))
  }

  private parsePokemonSpecies(response: GetPokemonSpecies): GetPokemonSpecies {
    const pokemonSpecies = response
    pokemonSpecies.color.name = this.colors[pokemonSpecies.color.name]
    return pokemonSpecies
  }

  getAllPokemonTypes(): Observable<PokemonTypeResults[]> {
    const url = `${this.apiUrl}type`;
    return this.http.get<GetAllPokemonTypes>(url).pipe(map((res) => { return this.parseAllPokemonTypes(res) }))
  }

  private parseAllPokemonTypes(response: GetAllPokemonTypes): PokemonTypeResults[] {
    const parsedAllPokemonsData = response.results.map(
      (result) => {
        return result
      }
    );
    return parsedAllPokemonsData
  }

  getPokemonTypes(url: string): Observable<PokemonTypeDetails> {
    return this.http.get<GetPokemonType>(url).pipe(map((res) => { return this.parsePokemonTypes(res) }))
  }

  private parsePokemonTypes(response: GetPokemonType): PokemonTypeDetails {
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

  private setTypeIcon(typeName: string) {
    return {
      name: typeName,
      icon: this.icons[typeName],
    }
  }
}
