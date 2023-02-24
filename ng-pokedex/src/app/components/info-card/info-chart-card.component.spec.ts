import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoChartCardComponent } from './info-chart-card.component';

describe('InfoChartCardComponent', () => {
  let component: InfoChartCardComponent;
  let fixture: ComponentFixture<InfoChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoChartCardComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InfoChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
