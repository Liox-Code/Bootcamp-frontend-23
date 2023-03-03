import { Component } from '@angular/core';
import { PokemonDetails } from '../../../../types/typesPokemon';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { InfoChartCardComponent } from '../../components/info-card/info-chart-card.component';
import { PokemonService } from '@app/services/pokemon/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Location: Location
  ){
  }

  pokemonDetails: PokemonDetails = {
    id: 1,
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
    evolutions: [],
    flavor_text_entries: []
  }

  components: {
    component: any
    tabLabel: string
    data: any
  }[] = []

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.pokemonDetails = data['data']

      this.components = [
        {
          component: AboutCardComponent,
          tabLabel: 'Pokédex Data',
          data: data['data'].data
        },
        {
          component: StatsComponent,
          tabLabel: 'Stats',
          data: {
            stats: data['data'].stats
          }
        },
        {
          component: InfoChartCardComponent,
          tabLabel: 'Evolution',
          data: data['data'].evolutions
        },
      ]
    });
  }

  goBack = () => {
    this.Location.back();
  }

  nextDetails = (pokemonId: number) => {
    const newId = (pokemonId + 1).toString();
    this.router.navigate(['/pokemon-details/details', newId], {
      relativeTo: this.route
    });
  }

  previousDetails = (pokemonId: number) => {
    const newId = (pokemonId - 1).toString();
    this.router.navigate(['/pokemon-details/details', newId], {
      relativeTo: this.route
    });
  }
}
