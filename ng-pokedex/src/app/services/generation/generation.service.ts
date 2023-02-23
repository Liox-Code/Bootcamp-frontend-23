import { Injectable } from '@angular/core';
import { AllResults, RequestPokemonDetails, RequestPokemonSpecies, RequestPokemonType, RequestNameUri } from '../../../types/pokemonRequest.types';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {

  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getAllGenerations(): Observable<RequestNameUri[]> {
    const url = `${this.apiUrl}generation`;
    return this.http.get<AllResults>(url).pipe(map((res) => { return this.parseAllGenerations(res) }))
  }

  private parseAllGenerations(response: AllResults): RequestNameUri[] {
    const parseAllGenerationsData = response.results.map(
      (result) => {
        return result
      }
    );
    return parseAllGenerationsData
  }
}
