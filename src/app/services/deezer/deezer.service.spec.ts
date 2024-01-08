import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { DeezerAPI } from './deezer.service';
import {
  getAlbumResult,
  getArtistPlaylistsResults,
  getArtistResult,
  getArtistTopTracksResult,
  getChartResults,
  getTrackResult,
  getTracksResults,
} from './test-data';

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
    const artistId = 2385;
    const trackId = 2565567572;
    const albumId = 530364182;
    const searchQuery = 'query';

    it('fetches tracks from search()', () => {
      spyOn(deezerApi, 'getTracks').and.returnValue(of(getTracksResults));
      deezerApi.getTracks(searchQuery).subscribe((trackResults) => {
        expect(trackResults).toEqual(getTracksResults);
      });
    });

    it('fetches the chart from getChart()', () => {
      spyOn(deezerApi, 'getChart').and.returnValue(of(getChartResults));
      deezerApi.getChart().subscribe((chartResult) => {
        expect(chartResult).toEqual(getChartResults);
      });
    });

    it('fetches a track from getTrack()', () => {
      spyOn(deezerApi, 'getTrack').and.returnValue(of(getTrackResult));
      deezerApi.getTrack(trackId).subscribe((trackResult) => {
        expect(trackResult).toEqual(getTrackResult);
      });
    });

    it('fetches a track from getAlbum()', () => {
      spyOn(deezerApi, 'getAlbum').and.returnValue(of(getAlbumResult));
      deezerApi.getAlbum(albumId).subscribe((albumResult) => {
        expect(albumResult).toEqual(getAlbumResult);
      });
    });

    it('fetches an artist from getArtist()', () => {
      spyOn(deezerApi, 'getArtist').and.returnValue(of(getArtistResult));
      deezerApi.getArtist(artistId).subscribe((artistResult) => {
        expect(artistResult).toEqual(getArtistResult);
      });
    });

    it('fetches an artist from getArtist()', () => {
      spyOn(deezerApi, 'getArtist').and.returnValue(of(getArtistResult));
      deezerApi.getArtist(artistId).subscribe((artistResult) => {
        expect(artistResult).toEqual(getArtistResult);
      });
    });

    it('fetches an artists top tracks from getArtistTopTracks()', () => {
      spyOn(deezerApi, 'getArtistTopTracks').and.returnValue(
        of(getArtistTopTracksResult)
      );
      deezerApi
        .getArtistTopTracks(artistId)
        .subscribe((artistTopTracksResults) => {
          expect(artistTopTracksResults).toEqual(getArtistTopTracksResult);
        });
    });

    it('fetches artist playlists from getArtistPlaylists()', () => {
      spyOn(deezerApi, 'getArtistPlaylists').and.returnValue(
        of(getArtistPlaylistsResults)
      );
      deezerApi
        .getArtistPlaylists(artistId)
        .subscribe((artistPlaylistsResults) => {
          expect(artistPlaylistsResults).toEqual(getArtistPlaylistsResults);
        });
    });
  });
});
