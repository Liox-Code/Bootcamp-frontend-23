import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageUrl: string = '';
  @Input() color: string = '';
  @Input() title: string = '';
  @Input() tags: string[] = [];

  pokemonColors = {
    red: 'bg-red',
    blue: 'bg-blue',
    yellow: 'bg-yellow'
  };
}
