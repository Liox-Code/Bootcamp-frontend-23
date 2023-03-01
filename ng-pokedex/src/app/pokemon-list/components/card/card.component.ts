import {
  Component, Input
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageUrl = '';
  @Input() color = '';
  @Input() id = 0;
  @Input() title = '';
  @Input() tags: string[] = [];

  pokemonColors = {
    red: 'bg-red',
    blue: 'bg-blue',
    yellow: 'bg-yellow'
  };
}
