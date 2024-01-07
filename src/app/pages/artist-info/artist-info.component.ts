import { Component, OnInit } from '@angular/core';
import { ArtistTopTracks } from '../../models/ArtistTopTracks.model';
import { DeezerAPI } from '../../services/deezer/deezer.service';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/Artist.model';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { DurationFormat } from '../../pipes/duration/duration-format';
import { AudioPlayer } from '../../models/AudioPlayer.model';
import { Observable } from 'rxjs';
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
export class ArtistInfoComponent implements OnInit {
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
    this.player$.subscribe((audioPlayer) => (this.player = audioPlayer));
    this.route.params.subscribe((params) => {
      this.loadArtist(params['id']);
      this.loadArtistTopTracks(params['id']);
      this.loadArtistPlaylists(params['id']);
    });
  }

  loadArtist(id: number) {
    this.deezerApi.getArtist(id).subscribe((artist) => {
      this.artist = artist;
    });
  }

  loadArtistTopTracks(id: number) {
    this.deezerApi.getArtistTopTracks(id).subscribe((artistTopTracks) => {
      this.artistTopTracks = artistTopTracks;
    });
  }

  loadArtistPlaylists(id: number) {
    this.deezerApi.getArtistPlaylists(id).subscribe((artistPlaylists) => {
      this.artistPlaylists = artistPlaylists;
    });
  }

  playTrack(track: Track) {
    this.audioService.loadAndPlay(track);
  }
}
