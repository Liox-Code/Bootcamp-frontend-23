import { Pokemon } from './Pokemon'

@randomPokemonId
export class Trainer {
  name: string
  pokemonTeam: Pokemon[] = []
  constructor (name: string) {
    this.name = name
  }

  catchPokemon (pokemonId: number) {
    console.log(`pokemonId ${pokemonId}`)
  }
}

function randomPokemonId (target: Function) {
  console.log(target)
}
