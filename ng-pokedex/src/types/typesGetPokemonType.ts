export interface GetAllPokemonTypes {
  count: number;
  next?: any;
  previous?: any;
  results: PokemonTypeResults[];
}

export interface PokemonTypeResults {
  name: string;
  url: string;
}

export interface GetPokemonType {
  id: number;
  name: string;
  damage_relations: DamageRelations;
  pokemon: PokemonTypesPokemon[];
}

export interface DamageRelations {
  double_damage_from: DamageRelationsInfo[];
  double_damage_to: DamageRelationsInfo[];
  half_damage_from: DamageRelationsInfo[];
  half_damage_to: DamageRelationsInfo[];
  no_damage_from: DamageRelationsInfo[];
  no_damage_to: DamageRelationsInfo[];
}

export interface DamageRelationsInfo {
  name: string;
  url: string;
}

interface PokemonTypesPokemon {
  pokemon: PokemonTypesPokemonInfo;
  slot: number;
}

interface PokemonTypesPokemonInfo {
  name: string,
  url: string
}
