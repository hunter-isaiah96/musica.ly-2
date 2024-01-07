import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AudioPlayer } from '../../models/AudioPlayer.model';
import { Injectable } from '@angular/core';
import { AudioPlayerActions } from './audio-player.action';

export interface AudioPlayerStateModel {
  player: AudioPlayer;
}

@State<AudioPlayerStateModel>({
  name: 'audioPlayer',
  defaults: {
    player: {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      seeking: false,
      currentSong: undefined,
    } as AudioPlayer,
  },
})
@Injectable()
export class AudioPlayerState {
  constructor() {}
  // Actions
  @Action(AudioPlayerActions.SetCurrentSong)
  setCurrentSong(
    ctx: StateContext<AudioPlayerStateModel>,
    action: AudioPlayerActions.SetCurrentSong
  ) {
    const currentState = ctx.getState();
    const updatedPlayer: AudioPlayerStateModel = {
      player: {
        ...currentState.player, // retain current player properties
        currentSong: action.song,
      },
    };
    ctx.patchState(updatedPlayer);
  }
  @Action(AudioPlayerActions.SetIsPlaying)
  setIsPlaying(
    ctx: StateContext<AudioPlayerStateModel>,
    action: AudioPlayerActions.SetIsPlaying
  ) {
    const currentState = ctx.getState();
    const updatedPlayer: AudioPlayerStateModel = {
      player: {
        ...currentState.player, // retain current player properties
        isPlaying: action.isPlaying,
      },
    };
    ctx.patchState(updatedPlayer);
  }
  @Action(AudioPlayerActions.SetCurrentTime)
  setCurrentTime(
    ctx: StateContext<AudioPlayerStateModel>,
    action: AudioPlayerActions.SetCurrentTime
  ) {
    const currentState = ctx.getState();
    const updatedPlayer: AudioPlayerStateModel = {
      player: {
        ...currentState.player, // retain current player properties
        currentTime: action.currentTime,
      },
    };
    if (!currentState.player.seeking) ctx.patchState(updatedPlayer);
  }
  @Action(AudioPlayerActions.SetDuration)
  setDuration(
    ctx: StateContext<AudioPlayerStateModel>,
    action: AudioPlayerActions.SetDuration
  ) {
    const currentState = ctx.getState();
    const updatedPlayer: AudioPlayerStateModel = {
      player: {
        ...currentState.player, // retain current player properties
        duration: action.duration,
      },
    };
    ctx.patchState(updatedPlayer);
  }
  @Action(AudioPlayerActions.SetSeeking)
  setSeeking(
    ctx: StateContext<AudioPlayerStateModel>,
    action: AudioPlayerActions.SetSeeking
  ) {
    const currentState = ctx.getState();
    const updatedPlayer: AudioPlayerStateModel = {
      player: {
        ...currentState.player, // retain current player properties
        seeking: action.seeking,
      },
    };
    ctx.patchState(updatedPlayer);
  }

  // Getters
  @Selector()
  static getPlayer(state: AudioPlayerStateModel) {
    return state.player;
  }
}
