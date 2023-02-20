import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetPokemons, GetPokemonsResult } from '../../types/typesGetPokemons';
import { GetPokemonDetails } from '../../types/typesGetPokemonDetails';
import { GetPokemonSpecies } from '../../types/typesGetPokemonSpecies';

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
}
