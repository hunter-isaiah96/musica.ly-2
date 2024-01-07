import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Album } from '../../models/Album.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'deezer-album',
  standalone: true,
  imports: [CommonModule, RouterLink, CardModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss',
})
export class AlbumComponent {
  @Input() album!: Album;
  getAlbumLink(albumId: number) {
    return `/album/${albumId}`;
  }
}
