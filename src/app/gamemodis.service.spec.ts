import { TestBed } from '@angular/core/testing';

import { GamemodisService } from './gamemodis.service';

describe('GamemodisService', () => {
  let service: GamemodisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamemodisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
