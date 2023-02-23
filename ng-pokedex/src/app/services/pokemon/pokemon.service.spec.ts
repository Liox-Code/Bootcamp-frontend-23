import { TestBed } from '@angular/core/testing';

import { PokemonService as PokemonService } from './pokemon.service';

describe('PokeApiService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
