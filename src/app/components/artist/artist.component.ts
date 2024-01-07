import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Artist } from '../../models/Artist.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'deezer-artist',
  standalone: true,
  imports: [RouterLink, AvatarModule],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss',
})
export class ArtistComponent {
  @Input() artist!: Artist;
  getArtistLink(id: number) {
    return `/artist/${id}`;
  }
}
