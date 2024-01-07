import { Component } from '@angular/core';
import { TrackComponent } from '../../components/track/track.component';
import { AlbumComponent } from '../../components/album/album.component';
import { ArtistComponent } from '../../components/artist/artist.component';
import { DeezerAPI } from '../../services/deezer/deezer.service';
import { Chart } from '../../models/Chart.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TrackComponent, AlbumComponent, ArtistComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  chart: Chart | null = null;
  constructor(private deezerApi: DeezerAPI) {
    this.loadChart();
  }

  async loadChart() {
    this.deezerApi.getChart().subscribe((chart) => {
      this.chart = chart;
    });
  }
}
