import { Component, OnDestroy, OnInit } from '@angular/core';
import { type AudioPlayer } from '../../models/AudioPlayer.model';
import { type AlbumInfo } from '../../models/AlbumInfo.model';
import { type Track } from '../../models/Track.model';
import { AudioPlayerState } from '../../store/audioplayer/audio-player.state';
import { DeezerAPI } from '../../services/deezer/deezer.service';
import { ActivatedRoute } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DurationFormat } from '../../pipes/duration/duration-format';
import { AudioPlayerService } from '../../services/audio-player/audio-player.service';
import { Select } from '@ngxs/store';

import { Observable, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-album-info',
  standalone: true,
  imports: [CommonModule, TableModule, DurationFormat],
  templateUrl: './album-info.component.html',
  styleUrl: './album-info.component.scss',
})
export class AlbumInfoComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  @Select(AudioPlayerState.getPlayer)
  player$!: Observable<AudioPlayer>;
  player!: AudioPlayer;
  albumInfo!: AlbumInfo | undefined;

  constructor(
    private audioService: AudioPlayerService,
    private deezerApi: DeezerAPI,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.player$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((audioPlayer) => (this.player = audioPlayer));
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      this.loadAlbum(params['id']);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  loadAlbum(albumId: number) {
    this.deezerApi
      .getAlbum(albumId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((albumInfo) => {
        this.albumInfo = albumInfo;
      });
  }

  playTrack(track: Track) {
    this.audioService.load(track);
    this.audioService.play();
  }
}
