import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPokemonTypeComponent } from './tag-pokemon-type.component';

describe('TagPokemonTypeComponent', () => {
  let component: TagPokemonTypeComponent;
  let fixture: ComponentFixture<TagPokemonTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagPokemonTypeComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TagPokemonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
