import { Component, Input } from '@angular/core';
import { PokemonTypeDetails } from '../../../types/typesPokemon';

@Component({
  selector: 'app-symbol-list',
  templateUrl: './symbol-list.component.html',
  styleUrls: ['./symbol-list.component.scss']
})
export class SymbolListComponent {
  @Input() pokemonTypes: PokemonTypeDetails[] = []

  ngAfcterViewInit(){
    console.log('this.pokemonTypes')
  }
}
