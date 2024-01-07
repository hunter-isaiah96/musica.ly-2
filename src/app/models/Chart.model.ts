import { Album } from './Album.model';
import { Artist } from './Artist.model';
import { Playlist } from './Playlist.model';
import { Podcast } from './Podcast.model';
import { Track } from './Track.model';

export interface Chart {
  tracks: Tracks;
  albums: Albums;
  artists: Artists;
  playlists: Playlists;
  podcasts: Podcasts;
}

export interface Tracks {
  data: Track[];
  total: number;
}

export interface Albums {
  data: Album[];
  total: number;
}

export interface Artists {
  data: Artist[];
  total: number;
}

export interface Playlists {
  data: Playlist[];
  total: number;
}

export interface Podcasts {
  data: Podcast[];
  total: number;
}
