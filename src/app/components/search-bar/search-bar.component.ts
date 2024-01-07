import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
  AutoCompleteSelectEvent,
} from 'primeng/autocomplete';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Track } from '../../models/Track.model';
import { AudioPlayer } from '../../models/AudioPlayer.model';
import { AudioPlayerService } from '../../services/audio-player/audio-player.service';
import { AudioPlayerState } from '../../store/audioplayer/audio-player.state';
import { AudioPlayerActions } from '../../store/audioplayer/audio-player.action';
import { DeezerAPI } from '../../services/deezer/deezer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    ToolbarModule,
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnInit {
  @Select(AudioPlayerState.getPlayer)
  player$!: Observable<AudioPlayer>;
  searchedTracks: Track[] = [];
  songSearch: string = '';
  player!: AudioPlayer;

  constructor(private deezerApi: DeezerAPI, private router: Router) {}

  ngOnInit(): void {
    this.player$.subscribe((audioPlayer) => (this.player = audioPlayer));
  }

  async onItemSelect(event: AutoCompleteSelectEvent) {
    this.router.navigate(['/track', event.value.id]);
  }

  async search(event: AutoCompleteCompleteEvent) {
    this.searchedTracks = await this.deezerApi.search(event.query);
  }
}
