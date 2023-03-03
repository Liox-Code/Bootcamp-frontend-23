export interface AllResults {
  count: number;
  next?: any;
  previous?: any;
  results: RequestNameUri[];
}

export interface RequestPokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  order: number;
  species: RequestNameUri;
  sprites: RequestPokemonSprites;
  types: RequestSlotType[];
  abilities: Ability[];
  stats: Stat[];
}

export interface RequestPokemonSprites {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
  other: Other;
}

interface Other {
  'official-artwork': Officialartwork;
}

interface Officialartwork {
  front_default: string;
  front_shiny: string;
}

export interface RequestPokemonSpecies {
  id: number;
  color: RequestNameUri;
  generation: RequestNameUri;
  evolution_chain: Uri;
  flavor_text_entries: FlavorText[];
}

export interface RequestPokemonColor {
  id: number;
  name: string;
  names: RequestPokemonName[];
  pokemon_species: RequestNameUri[];
}

export interface RequestPokemonName {
  language: RequestNameUri;
  name: string;
}

export interface RequestPokemonType {
  id: number;
  name: string;
  damage_relations: RequestDamageRelations;
  pokemon: RequestPokemonSlot[];
}

export interface RequestDamageRelations {
  double_damage_from: RequestNameUri[];
  double_damage_to: RequestNameUri[];
  half_damage_from: RequestNameUri[];
  half_damage_to: RequestNameUri[];
  no_damage_from: RequestNameUri[];
  no_damage_to: RequestNameUri[];
}

export interface RequestGeneration {
  id: number;
  name: string;
  pokemon_species: RequestNameUri[];
}

interface RequestPokemonSlot {
  pokemon: RequestNameUri;
  slot: number;
}
interface Uri {
  url: string;
}

export interface RequestNameUri {
  name: string;
  url: string;
}

export interface RequestSlotType {
  slot: number;
  type: RequestNameUri;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: RequestNameUri;
}

interface Ability {
  ability: RequestNameUri;
  is_hidden: boolean;
  slot: number;
}

export interface EvolutionChain {
  id: number;
  chain: Chain;
}

interface Chain {
  evolves_to: Chain[];
  species: RequestNameUri;
}

interface FlavorText {
  flavor_text: string;
  language: RequestNameUri;
  version: RequestNameUri;
}
