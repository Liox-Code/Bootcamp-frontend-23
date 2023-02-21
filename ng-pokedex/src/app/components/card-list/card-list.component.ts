import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../types/typesPokemon';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() pokemons: Pokemon[] = []
}
