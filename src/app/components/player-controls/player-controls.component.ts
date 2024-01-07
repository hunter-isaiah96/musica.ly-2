import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { DataViewModule } from 'primeng/dataview';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxClickEvent, ListboxModule } from 'primeng/listbox';
import { TagModule } from 'primeng/tag';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DurationFormat } from '../../pipes/duration/duration-format';
import { AudioPlayer } from '../../models/AudioPlayer.model';
import { AudioPlayerService } from '../../services/audio-player/audio-player.service';
import { AudioPlayerState } from '../../store/audioplayer/audio-player.state';
import { AudioPlayerActions } from '../../store/audioplayer/audio-player.action';
import { CommonModule } from '@angular/common';
import { Track } from '../../models/Track.model';
import { RouterLink } from '@angular/router';

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
export class PlayerControlsComponent implements OnInit {
  @Select(AudioPlayerState.getPlayer)
  player$!: Observable<AudioPlayer>;
  player!: AudioPlayer;
  playList: Track[] = [];

  constructor(private audioService: AudioPlayerService, private store: Store) {}

  public ngOnInit(): void {
    this.player$.subscribe((audioPlayer) => (this.player = audioPlayer));
    this.loadPlaylist();
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
