import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackComponent } from './track.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TrackInfoComponent } from '../../pages/track-info/track-info.component';
import { testTrack } from './testing-data';
describe('TrackComponent', () => {
  let component: TrackComponent;
  let fixture: ComponentFixture<TrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TrackComponent,
        RouterTestingModule.withRoutes([
          { path: 'track/:id', component: TrackInfoComponent },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackComponent);
    component = fixture.componentInstance;
    component.track = testTrack;
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Render Track Details', () => {
    it('should renderthe tracks details', () => {
      const { track } = component;
      const trackTitle: HTMLElement =
        fixture.nativeElement.querySelector('.p-card-title');
      const trackArtist: HTMLElement =
        fixture.nativeElement.querySelector('.p-card-subtitle');
      expect(trackTitle.textContent).toContain(track.title);
      expect(trackArtist.textContent).toContain(track.artist!.name);
    });
    it('should render the tracks thumbnail', () => {
      const { track } = component;
      const artistThumbnail: HTMLImageElement =
        fixture.nativeElement.querySelector('.artist-thumbnail');
      expect(artistThumbnail.src).toContain(track.album.cover_medium);
    });
  });
});
