import { Component } from '@angular/core';

@Component({
  selector: 'app-info-chart-card',
  templateUrl: './info-chart-card.component.html',
  styleUrls: ['./info-chart-card.component.scss']
})
export class InfoChartCardComponent {
  data = {
    title: 'Evolution Chart',
    evolutions: {
      id: 0,
      name: '',
      image: '',
      type: [],
      color: '',
      generation: ''
    }
  }
}
