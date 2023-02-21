export interface GetPokemonColor {
  id: number;
  name: string;
  names: PokemonName[];
  pokemon_species: PokemonLanguage[];
}

export interface PokemonName {
  language: PokemonLanguage;
  name: string;
}

export interface PokemonLanguage {
  name: string;
  url: string;
}
