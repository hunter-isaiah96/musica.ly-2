import { Injectable } from '@angular/core';
import { Tracks } from '../../models/Track.model';
import { Chart } from '../../models/Chart.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrackInfo } from '../../models/TrackInfo.model';
import { AlbumInfo } from '../../models/AlbumInfo.model';
import { ArtistTopTracks } from '../../models/ArtistTopTracks.model';
import { Artist } from '../../models/Artist.model';
import { Playlists } from '../../models/Playlist.model';

interface DeezerAPIMethods {
  getChart: () => Observable<any>;
  getTracks: (search: string) => Observable<any>;
  getTrack: (trackId: number) => Observable<any>;
  getAlbum: (albumId: number) => Observable<any>;
  getArtist: (artistId: number) => Observable<any>;
  getArtistTopTracks: (artistId: number) => Observable<any>;
  getArtistPlaylists: (artistId: number) => Observable<any>;
}

@Injectable({
  providedIn: 'root',
})
export class DeezerAPI implements DeezerAPIMethods {
  baseURL = 'https://api.deezer.com';
  constructor(private http: HttpClient) {}

  getChart(): Observable<Chart> {
    const response = this.http.get<Chart>(`${this.baseURL}/chart`);
    return response;
  }

  getTracks(search: string): Observable<Tracks> {
    const response = this.http.get<Tracks>(
      `${this.baseURL}/search/track?q=${search}`
    );
    return response;
  }

  getTrack(trackId: number): Observable<TrackInfo> {
    const response = this.http.get<TrackInfo>(
      `${this.baseURL}/track/${trackId}`
    );
    return response;
  }

  getAlbum(albumId: number): Observable<AlbumInfo> {
    const response = this.http.get<AlbumInfo>(
      `${this.baseURL}/album/${albumId}`
    );
    return response;
  }

  getArtist(artistId: number): Observable<Artist> {
    const response = this.http.get<Artist>(
      `${this.baseURL}/artist/${artistId}`
    );
    return response;
  }

  getArtistTopTracks(artistId: number): Observable<ArtistTopTracks> {
    const response = this.http.get<ArtistTopTracks>(
      `${this.baseURL}/artist/${artistId}/top`
    );
    return response;
  }

  getArtistPlaylists(artistId: number): Observable<Playlists> {
    const response = this.http.get<Playlists>(
      `${this.baseURL}/artist/${artistId}/playlists`
    );
    return response;
  }
}
