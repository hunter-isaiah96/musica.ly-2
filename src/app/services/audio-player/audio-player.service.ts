import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AudioPlayerActions } from '../../store/audioplayer/audio-player.action';
import { Track } from '../../models/Track.model';
import { TrackInfo } from '../../models/TrackInfo.model';

@Injectable({
  providedIn: 'root',
})
export class AudioPlayerService {
  public audio: HTMLAudioElement | undefined;
  constructor(private store: Store) {
    if (typeof Audio !== 'undefined') {
      this.audio = new Audio();
      this.audio.addEventListener('loadeddata', () => {
        this.store.dispatch(
          new AudioPlayerActions.SetDuration(this.audio?.duration)
        );
      });
      this.audio.addEventListener('timeupdate', () => {
        this.store.dispatch(
          new AudioPlayerActions.SetCurrentTime(this.audio?.currentTime)
        );
      });
      this.audio.addEventListener('playing', () => {
        this.store.dispatch(new AudioPlayerActions.SetIsPlaying(true));
      });
      this.audio.addEventListener('pause', () => {
        this.store.dispatch(new AudioPlayerActions.SetIsPlaying(false));
      });
    } else {
      console.warn('Audio is not supported in this environment');
    }
  }

  load(track: Track | TrackInfo) {
    if (this.audio) {
      this.audio.src = track.preview;
      this.audio.load();
      this.store.dispatch(new AudioPlayerActions.SetCurrentSong(track));
    }
  }

  loadAndPlay(track: Track | TrackInfo) {
    if (this.audio) {
      this.audio.src = track.preview;
      this.audio.load();
      this.store.dispatch(new AudioPlayerActions.SetCurrentSong(track));
      this.audio.play();
    }
  }

  play(): void {
    if (this.audio) {
      this.audio.play();
    }
  }

  pause(): void {
    if (this.audio) {
      this.audio.pause();
    }
  }

  setCurrentTime(time: number) {
    if (this.audio) {
      this.audio.currentTime = time;
    }
  }
}
