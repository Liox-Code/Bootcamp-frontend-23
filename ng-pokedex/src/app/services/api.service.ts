import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getAllPokemons(limit: number, offset: number): Observable<any> {
    const url = `${this.apiUrl}pokemon?limit=${limit}&offset=${offset}`;
    return this.http.get(url).pipe(
      map(response => this.parseResponse(response))
    );
  }

  getPokemonDetails(url: string) {
    return this.http.get(url);
  }

  getPokemonSpecies(url: string) {
    return this.http.get(url);
  }

  private parseResponse(response: any): any {
    return response;
  }

}
