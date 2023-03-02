import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {

  about = {
    description: 'Description ok the pokemon lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    species: [],
    height: '',
    weight: '',
    abilities: [],
    weaknesses: []
  }

  constructor(@Inject('data') private data: any) {}

  ngOnInit(): void {
    this.about.species = this.data.species
    this.about.height = this.data.height
    this.about.weight = this.data.weight
    this.about.abilities = this.data.abilities
    this.about.weaknesses = this.data.weaknesses
  }
}
