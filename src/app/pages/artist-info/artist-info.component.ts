import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArtistTopTracks } from '../../models/ArtistTopTracks.model';
import { DeezerAPI } from '../../services/deezer/deezer.service';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/Artist.model';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { DurationFormat } from '../../pipes/duration/duration-format';
import { AudioPlayer } from '../../models/AudioPlayer.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AudioPlayerState } from '../../store/audioplayer/audio-player.state';
import { Select } from '@ngxs/store';
import { AudioPlayerService } from '../../services/audio-player/audio-player.service';
import { Track } from '../../models/Track.model';
import { CommonModule } from '@angular/common';
import { Playlists } from '../../models/Playlist.model';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-artist-info',
  standalone: true,
  imports: [
    CommonModule,
    AvatarModule,
    TableModule,
    DurationFormat,
    CardModule,
  ],
  templateUrl: './artist-info.component.html',
  styleUrl: './artist-info.component.scss',
})
export class ArtistInfoComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  @Select(AudioPlayerState.getPlayer)
  player$!: Observable<AudioPlayer>;
  player!: AudioPlayer;
  artistTopTracks!: ArtistTopTracks;
  artistPlaylists!: Playlists;
  artist!: Artist;

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
      this.loadArtist(params['id']);
      this.loadArtistTopTracks(params['id']);
      this.loadArtistPlaylists(params['id']);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  loadArtist(id: number) {
    this.deezerApi
      .getArtist(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((artist) => {
        this.artist = artist;
      });
  }

  loadArtistTopTracks(id: number) {
    this.deezerApi
      .getArtistTopTracks(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((artistTopTracks) => {
        this.artistTopTracks = artistTopTracks;
      });
  }

  loadArtistPlaylists(id: number) {
    this.deezerApi
      .getArtistPlaylists(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((artistPlaylists) => {
        this.artistPlaylists = artistPlaylists;
      });
  }

  playTrack(track: Track) {
    this.audioService.loadAndPlay(track);
  }
}
