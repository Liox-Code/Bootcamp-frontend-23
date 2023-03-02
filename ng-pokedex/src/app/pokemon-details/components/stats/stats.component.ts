import { Component, Inject } from '@angular/core';


type stats = {
  name: string
  value: number
}

type receivedData = {
  description: string
  stats: stats[]
  total: number
}
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})

export class StatsComponent {
  stats: receivedData = {
    description: 'The ranges shown on the right  are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252EVs, 31IVs; minimum values are based on a hindering nature, 0EVs, 0IVs',
    stats: [],
    total: 318
  };

  constructor(@Inject('data') private data: stats[]) {}

  ngOnInit(): void {
    console.log(this.data)
    this.stats.stats = this.data
  }

}
