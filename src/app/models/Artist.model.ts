export interface Artist {
  id: number;
  name: string;
  link?: string;
  share?: string;
  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
  radio?: boolean;
  position?: number;
  nb_album?: number;
  nb_fan?: number;
  tracklist: string;
  type: string;
}
