import { Album } from './Album.model';
import { Artist } from './Artist.model';
import { Contributor } from './Contributor.model';

export interface ArtistTopTracks {
  data: ArtistTopTracksData[];
  total: number;
  next: string;
}

export interface ArtistTopTracksData {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  contributors: Contributor[];
  md5_image: string;
  artist: Artist;
  album: Album;
  type: string;
}
