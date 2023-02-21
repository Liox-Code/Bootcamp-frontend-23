import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowInfoTagsComponent } from './row-info-tags.component';

describe('RowInfoTagsComponent', () => {
  let component: RowInfoTagsComponent;
  let fixture: ComponentFixture<RowInfoTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowInfoTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowInfoTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
