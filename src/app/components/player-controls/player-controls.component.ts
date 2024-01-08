import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ListboxClickEvent, ListboxModule } from 'primeng/listbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SliderModule } from 'primeng/slider';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AudioPlayer } from '../../models/AudioPlayer.model';
import { Track } from '../../models/Track.model';
import { DurationFormat } from '../../pipes/duration/duration-format';
import { AudioPlayerService } from '../../services/audio-player/audio-player.service';
import { AudioPlayerActions } from '../../store/audioplayer/audio-player.action';
import { AudioPlayerState } from '../../store/audioplayer/audio-player.state';

@Component({
  selector: 'app-player-controls',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SliderModule,
    FormsModule,
    DurationFormat,
    OverlayPanelModule,
    DataViewModule,
    ListboxModule,
    AutoCompleteModule,
    TagModule,
    RouterLink,
  ],
  templateUrl: './player-controls.component.html',
  styleUrl: './player-controls.component.scss',
})
export class PlayerControlsComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @Select(AudioPlayerState.getPlayer)
  player$!: Observable<AudioPlayer>;
  player!: AudioPlayer;
  playList: Track[] = [];

  constructor(private audioService: AudioPlayerService, private store: Store) {}

  public ngOnInit(): void {
    this.player$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((audioPlayer) => (this.player = audioPlayer));
    this.loadPlaylist();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  handlePlaylistClick(event: ListboxClickEvent) {
    this.audioService.loadAndPlay(event.value);
  }

  async loadPlaylist() {}

  toggleAudio(): void {
    if (this.player.isPlaying) {
      this.audioService.pause();
    } else {
      this.audioService.play();
    }
  }

  onSeek() {
    this.store.dispatch(new AudioPlayerActions.SetSeeking(true));
  }

  onSeekEnd() {
    this.store.dispatch(new AudioPlayerActions.SetSeeking(false));
    if (this.player.currentTime !== undefined)
      this.audioService.setCurrentTime(this.player.currentTime);
  }
}
