import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DeezerAPI } from '../../services/deezer/deezer.service';
import { TrackInfo } from '../../models/TrackInfo.model';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { DurationFormat } from '../../pipes/duration/duration-format';
import { ButtonModule } from 'primeng/button';
import { ArtistComponent } from '../../components/artist/artist.component';
import { AudioPlayerService } from '../../services/audio-player/audio-player.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AudioPlayer } from '../../models/AudioPlayer.model';
import { AudioPlayerState } from '../../store/audioplayer/audio-player.state';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [
    CommonModule,
    AvatarModule,
    DurationFormat,
    ButtonModule,
    ArtistComponent,
    RouterLink,
  ],
  templateUrl: './track-info.component.html',
  styleUrl: './track-info.component.scss',
})
export class TrackInfoComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @Select(AudioPlayerState.getPlayer)
  player$!: Observable<AudioPlayer>;
  player!: AudioPlayer;
  trackInfo!: TrackInfo | undefined;
  constructor(
    private route: ActivatedRoute,
    private deezerApi: DeezerAPI,
    private audioService: AudioPlayerService
  ) {}

  ngOnInit(): void {
    this.player$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((audioPlayer) => (this.player = audioPlayer));
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      this.loadData(params['id']);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  getArtistLink(id: number) {
    return `/artist/${id}`;
  }

  loadData(trackId: number) {
    this.deezerApi
      .getTrack(trackId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((trackInfo) => {
        this.trackInfo = trackInfo;
      });
  }

  trackToggleState(): boolean {
    return !!(
      this.trackInfo &&
      this.player.currentSong &&
      this.trackInfo.id === this.player.currentSong.id &&
      this.player.isPlaying
    );
  }

  playTrack(): void {
    if (!this.trackInfo) return;

    if (this.trackInfo.id === (this.player.currentSong?.id ?? 0)) {
      if (this.player.isPlaying) {
        this.audioService.pause();
        return;
      }
      this.audioService.play();
    } else {
      this.audioService.loadAndPlay(this.trackInfo);
    }
  }
}
