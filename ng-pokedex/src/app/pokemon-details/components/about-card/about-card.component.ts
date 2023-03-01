import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {
  about = {
    description: 'Description ok the pokemon lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    species: 'Seed',
    height: '0.7m (2.04)',
    weight: '6.9kg (15.2lbs)',
    abilities: [
      '1. Overgrow'
    ],
    weaknesses: ['fire','ice']
  }

  constructor(@Inject('data') private data: any) {}

  ngOnInit(): void {
    // this.about.description = this.data.pokemonInfo
  }
}
