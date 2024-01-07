import { Album } from './Album.model';
import { Artist } from './Artist.model';

export interface Track {
  id: number;
  readable?: boolean;
  title: string;
  title_short: string;
  title_version?: string;
  link: string;
  duration: number;
  rank: number;
  position?: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: Artist;
  album: Album;
  type: string;
}

export interface Tracks {
  data: Track[];
}
