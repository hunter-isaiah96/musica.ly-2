import { importProvidersFrom } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AudioPlayerService } from '../../services/audio-player/audio-player.service';
import { AudioPlayerState } from '../../store/audioplayer/audio-player.state';
import { EmptyComponent } from '../empty-component/empty-component.component';
import { PlayerControlsComponent } from './player-controls.component';
import { testTrack } from './testing-data';

describe('PlayerControlsComponent', () => {
  let component: PlayerControlsComponent;
  let fixture: ComponentFixture<PlayerControlsComponent>;
  let audioPlayer: AudioPlayerService;
  let store: Store;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PlayerControlsComponent,
        RouterTestingModule.withRoutes([
          { path: 'track/:id', component: EmptyComponent },
          { path: 'artist/:id', component: EmptyComponent },
        ]),
      ],
      providers: [
        AudioPlayerService,
        importProvidersFrom(NgxsModule.forRoot([AudioPlayerState])),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerControlsComponent);
    component = fixture.componentInstance;
    audioPlayer = TestBed.inject(AudioPlayerService);
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Audio Player', () => {
    it('loads the correct song in the audioPlayer and the audioPlayer store', fakeAsync(() => {
      audioPlayer.load(testTrack);
      expect(audioPlayer.audio?.src).toContain(testTrack.preview);
      const { player } = store.selectSnapshot((state) => state.audioPlayer);
      expect(player.currentSong).toBe(testTrack);
    }));

    it('hides the song details if no song is loaded', () => {
      const { player } = store.selectSnapshot((state) => state.audioPlayer);
      const currentSongDetails = fixture.nativeElement.querySelector(
        '.current-song-details'
      );
      const isSrcEmpty =
        !audioPlayer.audio!.src || audioPlayer.audio!.src === '';
      expect(isSrcEmpty).toBe(true);
      expect(currentSongDetails).not.toBeTruthy();
      expect(player.currentSong).toBe(undefined);
    });

    it('loads and displays the currently loaded song', () => {
      audioPlayer.load(testTrack);
      fixture.detectChanges();
      const currentSongDetails = fixture.nativeElement.querySelector(
        '.current-song-details'
      );
      expect(currentSongDetails).toBeTruthy();
      const currentSongThumbnail: HTMLImageElement =
        currentSongDetails.querySelector('.current-song-thumbnail');
      const currentSongTitle: HTMLAnchorElement =
        currentSongDetails.querySelector('.current-song-track-link');
      const currentSongArtist: HTMLAnchorElement =
        currentSongDetails.querySelector('.current-song-artist-link');
      console.log(currentSongTitle.textContent);
      expect(currentSongThumbnail.src).toContain(testTrack.album.cover_medium);
      expect(currentSongTitle.textContent).toContain(testTrack.title);
      expect(currentSongArtist.textContent).toContain(testTrack.artist.name);
    });
  });

  describe('Navigation', () => {
    it('goes to the track page when the title is clicked', async () => {
      audioPlayer.load(testTrack);
      fixture.detectChanges();
      const currentSongDetails = fixture.nativeElement.querySelector(
        '.current-song-details'
      );
      expect(currentSongDetails).toBeTruthy();
      const currentSongTrackLink: HTMLAnchorElement =
        currentSongDetails.querySelector('.current-song-track-link');
      expect(currentSongTrackLink.href).toContain(`/track/${testTrack.id}`);
      await currentSongTrackLink.click();
      fixture.detectChanges();
      expect(router.url).toContain(`/track/${testTrack.id}`);
    });
    it('goes to the artist page when the artist is clicked', async () => {
      audioPlayer.load(testTrack);
      fixture.detectChanges();
      const currentSongDetails = fixture.nativeElement.querySelector(
        '.current-song-details'
      );
      expect(currentSongDetails).toBeTruthy();
      const currentSongArtistLink: HTMLAnchorElement =
        currentSongDetails.querySelector('.current-song-artist-link');
      expect(currentSongArtistLink.href).toContain(
        `/artist/${testTrack.artist.id}`
      );
      await currentSongArtistLink.click();
      fixture.detectChanges();
      expect(router.url).toContain(`/artist/${testTrack.artist.id}`);
    });
  });
});
