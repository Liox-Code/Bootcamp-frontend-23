export interface GetPokemonColor {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: Language[];
}

export interface Name {
  language: Language;
  name: string;
}

export interface Language {
  name: string;
  url: string;
}
