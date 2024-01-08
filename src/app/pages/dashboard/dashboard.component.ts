import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackComponent } from '../../components/track/track.component';
import { AlbumComponent } from '../../components/album/album.component';
import { ArtistComponent } from '../../components/artist/artist.component';
import { DeezerAPI } from '../../services/deezer/deezer.service';
import { Chart } from '../../models/Chart.model';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TrackComponent, AlbumComponent, ArtistComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  chart: Chart | null = null;
  constructor(private deezerApi: DeezerAPI) {}

  ngOnInit(): void {
    this.deezerApi
      .getChart()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((chart) => {
        this.chart = chart;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
