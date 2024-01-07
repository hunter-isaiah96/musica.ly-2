import { TestBed } from '@angular/core/testing';

import { DeezerAPI } from './deezer.service';

describe('DeezerService', () => {
  let service: DeezerAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeezerAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
