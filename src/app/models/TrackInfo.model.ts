import { Album } from '../models/Album.model';
import { Artist } from '../models/Artist.model';
import { Contributor } from '../models/Contributor.model';
export interface TrackInfo {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  isrc: string;
  link: string;
  share: string;
  duration: number;
  track_position: number;
  disk_number: number;
  rank: number;
  release_date: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  bpm: number;
  gain: number;
  available_countries: string[];
  contributors: Contributor[];
  md5_image: string;
  artist: Artist;
  album: Album;
  type: string;
}
