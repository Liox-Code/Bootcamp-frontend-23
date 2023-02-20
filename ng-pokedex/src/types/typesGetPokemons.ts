export interface GetPokemons {
  count: number;
  next: string;
  previous?: any;
  results: GetPokemonsResult[];
}

export interface GetPokemonsResult {
  name: string;
  url: string;
}
