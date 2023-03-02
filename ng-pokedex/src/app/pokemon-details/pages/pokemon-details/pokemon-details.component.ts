import { Component } from '@angular/core';
import { Pokemon, PokemonDetails } from '../../../../types/typesPokemon';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { InfoChartCardComponent } from '../../components/info-card/info-chart-card.component';
import { PokemonService } from '@app/services/pokemon/pokemon.service';
import { RequestSlotType } from '../../../../types/pokemonRequest.types';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {

  constructor(private pokemonService: PokemonService){
  }

  pokemonDetails: PokemonDetails = {
    id: 4,
    name: '',
    generation: '',
    type: [],
    image: '',
    color: '',
    data: {
      species: [''],
      height: 0,
      weight: 0,
      abilities: [''],
      weaknesses: ['']
    },
    stats: [],
    evolutions: []
  }

  components = [
    {
      component: AboutCardComponent,
      tabLabel: 'Pokédex Data',
      data: this.pokemonDetails.data
    },
    {
      component: StatsComponent,
      tabLabel: 'Stats',
      data: this.pokemonDetails.stats
    },
    {
      component: InfoChartCardComponent,
      tabLabel: 'Evolution',
      data: this.pokemonDetails.evolutions
    },
  ]

  ngOnInit(): void {
    this.getPokemon()
    console.log(this.pokemonDetails)
  }

  getPokemon(): void {
    this.pokemonService.getPokemonDetails('1').subscribe(details => {
      this.pokemonDetails.id = details.id
      this.pokemonDetails.name = details.name
      this.pokemonDetails.image = details.sprites.other['official-artwork'].front_default
      this.pokemonDetails.type = details.types.map((type: RequestSlotType) => type.type.name)
      this.pokemonDetails.data.species = details.types.map((type: RequestSlotType) => type.type.name)
      this.pokemonDetails.data.height = details.height
      this.pokemonDetails.data.weight = details.weight
      this.pokemonDetails.data.abilities = details.abilities.map((ability) => ability.ability.name)

      details.types.map((type: RequestSlotType) => {
        this.pokemonService.getPokemonTypes(type.type.url).subscribe((type) => {
          this.pokemonDetails.data.weaknesses = type.weaknessesTypes.map((type) => type.name)
        })
      })

      details.stats.forEach((stat) => {
        this.pokemonDetails.stats.push( {
          name: stat.stat.name,
          value: stat.base_stat
        })
      })
    })
    this.pokemonService.getPokemonSpecies('1').subscribe(species => {
      this.pokemonDetails.color = species.color.name;
      this.pokemonDetails.generation = species.generation.name

      this.pokemonService.getPokemonEvolutionChain(species.evolution_chain.url).subscribe((pokemonNames) => {

        pokemonNames.map((name) => {
          const pokemon: Pokemon = {
            id: 0,
            name: '',
            image: '',
            color: '',
            type: [],
            generation: '',
          }
          this.pokemonService.getPokemonDetails(name).subscribe(details => {
            pokemon.id = details.id
            pokemon.name = details.name
            pokemon.image = details.sprites.other['official-artwork'].front_default
            pokemon.type = details.types.map((type: RequestSlotType) => type.type.name)
          })

          this.pokemonService.getPokemonSpecies(name).subscribe(species => {
            pokemon.color = species.color.name
            pokemon.generation = species.generation.name
          })

          this.pokemonDetails.evolutions.push(pokemon)
        })
      })
    })
  }

  nextDetails = () => {
    console.log('NEXT')
    console.log(this.pokemonDetails)
  }

  previousDetails = () => {
    console.log('Previous')
  }
}
