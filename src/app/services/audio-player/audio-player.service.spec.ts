import { TestBed } from '@angular/core/testing';

import { AudioPlayerService } from './audio-player.service';
import { NgxsModule, Store } from '@ngxs/store';
import { AudioPlayerState } from '../../store/audioplayer/audio-player.state';
import { testTrack } from './testing-data';

describe('AudioPlayerService', () => {
  let audioService: AudioPlayerService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AudioPlayerState])],
    });
    audioService = TestBed.inject(AudioPlayerService);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(audioService).toBeTruthy();
  });

  it('should play a song', () => {
    expect(audioService).toBeTruthy();
    expect(audioService.audio).toBeTruthy();
    // audioService.load(testTrack);
  });
});
