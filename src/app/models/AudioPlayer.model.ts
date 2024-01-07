import { Track } from './Track.model';

export interface AudioPlayer {
  isPlaying: boolean;
  currentSong: Track | undefined;
  currentTime: number | undefined;
  duration: number | undefined;
  seeking: boolean;
}
