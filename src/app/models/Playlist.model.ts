import { User } from './DeezerUser.model';
export interface Playlists {
  data: Playlist[];
  total: number;
}
export interface Playlist {
  id: number;
  title: string;
  public: boolean;
  nb_tracks?: number;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  md5_image: string;
  picture_type: string;
  user: User;
  type: string;
}
