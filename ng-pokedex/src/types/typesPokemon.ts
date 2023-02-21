export interface Pokemon {
  id: number,
  name: string,
  image: string,
  type: string[],
  color: string,
}

export interface PokemonTypeDetails {
  id: number;
  type: PokemonType,
  pokemons: string[];
  effectivenessTypes: PokemonType[];
  weaknessesTypes: PokemonType[];
}

export interface PokemonType {
  name: string;
  icon: string,
}
