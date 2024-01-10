import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { DeezerAPI } from './deezer.service';

import { apiCalls } from './helpers';

describe('DeezerService', () => {
  let deezerApi: DeezerAPI;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    deezerApi = TestBed.inject(DeezerAPI);
  });

  describe('Initialization', () => {
    it('should be created', () => {
      expect(deezerApi).toBeTruthy();
    });
  });

  describe('DeezerAPI', () => {
    apiCalls.forEach(({ testName, func, results, args }) => {
      it(testName, () => {
        spyOn(deezerApi, func).and.returnValue(of(results));
        const method = deezerApi[func as keyof DeezerAPI] as Function;
        method.apply(deezerApi, args).subscribe((dataResults: any) => {
          expect(dataResults).toEqual(results);
        });
        expect(method).toHaveBeenCalledWith(...args);
      });
    });
  });
});
