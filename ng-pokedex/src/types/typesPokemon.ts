export interface Pokemon {
  id: number,
  name: string,
  image: string,
  type: string[],
  color: string,
  generation: string
}

export interface PokemonDetails {
  id: number,
  name: string,
  image: string,
  type: string[],
  color: string,
  generation: string,
  data: PokedexData
  stats: nameValue[]
  evolutions: Pokemon[]
  flavor_text_entries: FlavorText[]
}

export interface PokemonTypeDetails {
  id: number;
  type: PokemonType,
  pokemons: string[];
  effectivenessTypes: PokemonType[];
  weaknessesTypes: PokemonType[];
}

export interface PokedexData {
  species: string[]
  height: number,
  weight: number,
  abilities: string[]
  weaknesses: string[]
}

export interface PokemonType {
  name: string;
  icon: string,
}

export interface nameValue {
  name: string;
  value: number;
}

interface FlavorText {
  flavor_text: string;
  language: RequestNameUri;
  version: RequestNameUri;
}

export interface RequestNameUri {
  name: string;
  url: string;
}
