import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageUrl: string = '';
  @Input() color: string = '';
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() tags: string[] = [];
  tilteErase = 'Fletchinder'

  pokemonColors = {
    red: 'bg-red',
    blue: 'bg-blue',
    yellow: 'bg-yellow'
  };

  constructor(){
  }

  ngAfterViewInit() {
    console.log(this.color)
  }
}
