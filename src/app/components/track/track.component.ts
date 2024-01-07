import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Track } from '../../models/Track.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'deezer-track',
  standalone: true,
  imports: [CardModule, RouterLink],
  templateUrl: './track.component.html',
  styleUrl: './track.component.scss',
})
export class TrackComponent {
  @Input() track!: Track;
  constructor() {}
  getTrackLink(trackId: number): string {
    return `/track/${trackId}`;
  }
}
