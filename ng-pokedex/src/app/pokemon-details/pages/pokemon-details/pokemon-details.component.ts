import { Component } from '@angular/core';
import { Pokemon } from '../../../../types/typesPokemon';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { InfoChartCardComponent } from '../../components/info-card/info-chart-card.component';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  pokemonDetails: Pokemon = {
    id: 4,
    name: 'Charmander',
    generation: 'Generation 1',
    type: ['fire-icon'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    color: 'container-red'
  }

  components = [
    {
      component: AboutCardComponent,
      tabLabel: 'Pokédex Data',
      data: {
        pokemonInfo: 'Information'
      }
    },
    {
      component: StatsComponent,
      tabLabel: 'Stats',
      data: {
        pokemonInfo: 'Information'
      }
    },
    {
      component: InfoChartCardComponent,
      tabLabel: 'Evolution',
      data: {
        pokemonInfo: 'Information'
      }
    },
  ]

  nextDetails = () => {
    console.log('NEXT')
  }

  previousDetails = () => {
    console.log('Previous')
  }
}
