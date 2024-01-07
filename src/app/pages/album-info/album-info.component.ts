import { Component, OnInit } from '@angular/core';
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

import { Observable } from 'rxjs';
@Component({
  selector: 'app-album-info',
  standalone: true,
  imports: [CommonModule, TableModule, DurationFormat],
  templateUrl: './album-info.component.html',
  styleUrl: './album-info.component.scss',
})
export class AlbumInfoComponent implements OnInit {
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
    this.player$.subscribe((audioPlayer) => (this.player = audioPlayer));
    this.route.params.subscribe((params) => {
      this.loadAlbum(params['id']);
    });
  }

  loadAlbum(albumId: number) {
    this.deezerApi.getAlbum(albumId).subscribe((albumInfo) => {
      this.albumInfo = albumInfo;
    });
  }

  playTrack(track: Track) {
    this.audioService.load(track);
    this.audioService.play();
  }
}
