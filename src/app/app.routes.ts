import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TrackInfoComponent } from './pages/track-info/track-info.component';
import { AlbumInfoComponent } from './pages/album-info/album-info.component';
import { ArtistInfoComponent } from './pages/artist-info/artist-info.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'track/:id', component: TrackInfoComponent },
  { path: 'artist/:id', component: ArtistInfoComponent },
  { path: 'album/:id', component: AlbumInfoComponent },
];
