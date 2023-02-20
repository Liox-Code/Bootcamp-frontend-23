export interface GetPokemonDetails {
  id: number;
  order: number;
  species: Species;
  sprites: Sprites;
  types: Type[];
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Type {
  slot: number;
  type: TypeInfo;
}

export interface TypeInfo {
  name: string;
  url: string;
}
