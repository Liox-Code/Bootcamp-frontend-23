import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-info-chart-card',
  templateUrl: './info-chart-card.component.html',
  styleUrls: ['./info-chart-card.component.scss']
})
export class InfoChartCardComponent {
  info = {
    title: 'Evolution Chart',
    evolutions: []
  }

  constructor(@Inject('data') private data: any) {}

  ngOnInit(): void {
    this.info.evolutions = this.data
  }
}
