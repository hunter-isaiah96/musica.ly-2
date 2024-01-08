import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EmptyComponent } from '../empty-component/empty-component.component';
import { testTrack } from './testing-data';
import { TrackComponent } from './track.component';
describe('TrackComponent', () => {
  let component: TrackComponent;
  let fixture: ComponentFixture<TrackComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TrackComponent,
        RouterTestingModule.withRoutes([
          { path: 'track/:id', component: EmptyComponent },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackComponent);
    component = fixture.componentInstance;
    component.track = testTrack;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Render Track Details', () => {
    it('renders the tracks details', () => {
      const { track } = component;
      const trackTitle: HTMLElement =
        fixture.nativeElement.querySelector('.p-card-title');
      const trackArtist: HTMLElement =
        fixture.nativeElement.querySelector('.p-card-subtitle');
      expect(trackTitle.textContent).toContain(track.title);
      expect(trackArtist.textContent).toContain(track.artist!.name);
    });

    it('renders the tracks thumbnail', () => {
      const { track } = component;
      const artistThumbnail: HTMLImageElement =
        fixture.nativeElement.querySelector('.artist-thumbnail');
      expect(artistThumbnail.src).toContain(track.album.cover_medium);
    });

    it('goes to the track page when clicked', async () => {
      const { track } = component;
      const trackLink: HTMLAnchorElement =
        fixture.nativeElement.querySelector('.track-link');
      await trackLink.click();
      expect(router.url).toContain(`/track/${track.id}`);
    });
  });
});
