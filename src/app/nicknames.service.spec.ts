import { TestBed } from '@angular/core/testing';

import { NicknamesService } from './nicknames.service';

describe('NicknamesService', () => {
  let service: NicknamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NicknamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
