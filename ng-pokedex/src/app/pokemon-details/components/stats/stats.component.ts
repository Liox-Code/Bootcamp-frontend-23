import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  data = {
    description: 'The ranges shown on the right  are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252EVs, 31IVs; minimum values are based on a hindering nature, 0EVs, 0IVs',
    stats: [
      {
        statName: 'HP',
        n1: 45,
        graphic: 45,
        n2: 200,
        n3: 294,
      },
      {
        statName: 'Attack',
        n1: 60,
        graphic: 180,
        n2: 180,
        n3: 250,
      }
    ],
    total: 318
  };

}
