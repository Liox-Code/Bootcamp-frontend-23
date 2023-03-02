import { Component, Injector, Input, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabContainerComponent {
  @Input() components: any[]= []
  selectedTabIndex = 0

  ngOnInit(): void {
  }

  onTabChanged(event: MatTabChangeEvent) {
    this.selectedTabIndex = event.index;
  }

  createInjector(data: any) {
    const injector = Injector.create({
      providers: [{
        provide: 'data',
        useValue: data
      }]
    });
    return injector;
  }
}
