export interface GetPokemonDetails {
  id: number;
  order: number;
  species: PokemonSpecies;
  sprites: PokemonSprites;
  types: PokemonType[];
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonSprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface PokemonType {
  slot: number;
  type: PokemonTypeInfo;
}

export interface PokemonTypeInfo {
  name: string;
  url: string;
}
