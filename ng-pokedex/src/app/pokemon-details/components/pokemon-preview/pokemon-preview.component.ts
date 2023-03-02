import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.scss']
})
export class PokemonPreviewComponent {
  @Input() data = {
    id: 4,
    name: 'Charmander',
    generation: 'Generation 1',
    type: ['fire-icon'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    color: 'container-red'
  }

  ngOnInit(): void {
    // console.log(this.data)
  }
}
