import { Track } from '../../models/Track.model';

export namespace AudioPlayerActions {
  // Actions
  export class GetPlaylist {
    static readonly type = '[AudioPlayer] Get playlist songs';
  }
  export class SetCurrentSong {
    static readonly type = '[AudioPlayer] Set current song';
    constructor(public song: Track) {}
  }
  export class SetIsPlaying {
    static readonly type = '[AudioPlayer] Set is playing';
    constructor(public isPlaying: boolean) {}
  }
  export class SetCurrentTime {
    static readonly type = '[AudioPlayer] Set current time';
    constructor(public currentTime: number | undefined) {}
  }
  export class SetDuration {
    static readonly type = '[AudioPlayer] Set duration';
    constructor(public duration: number | undefined) {}
  }
  export class SetSeeking {
    static readonly type = '[AudioPlayer] Set seeking';
    constructor(public seeking: boolean) {}
  }
}
