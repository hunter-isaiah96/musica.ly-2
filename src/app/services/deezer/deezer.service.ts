import { Injectable } from '@angular/core';
import { Track } from '../../models/Track.model';
import { Chart } from '../../models/Chart.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrackInfo } from '../../models/TrackInfo.model';
import { AlbumInfo } from '../../models/AlbumInfo.model';
import { ArtistTopTracks } from '../../models/ArtistTopTracks.model';
import { Artist } from '../../models/Artist.model';
import { Playlists } from '../../models/Playlist.model';

@Injectable({
  providedIn: 'root',
})
export class DeezerAPI {
  baseURL = 'https://api.deezer.com';
  constructor(private http: HttpClient) {}

  async search(search: string): Promise<Track[]> {
    const response = await fetch(`${this.baseURL}/search/track?q=${search}`);
    const tracks = await response.json();
    return tracks.data;
  }

  getChart(): Observable<Chart> {
    const response = this.http.get<Chart>(`${this.baseURL}/chart`);
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
