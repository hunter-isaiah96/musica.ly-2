import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EmptyComponent } from '../empty-component/empty-component.component';
import { ArtistComponent } from './artist.component';
import { testArtist } from './testing-data';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ArtistComponent,
        RouterTestingModule.withRoutes([
          { path: 'artist/:id', component: EmptyComponent },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    component.artist = testArtist;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Rendering Artist Details', () => {
    it('should display the artists name', () => {
      const { artist } = component;
      const artistName: HTMLHeadElement =
        fixture.nativeElement.querySelector('.artist-name');
      expect(artistName.textContent).toContain(artist.name);
    });
    it('should display the artists thumbnail', () => {
      const { artist } = component;
      const artistThumbnail: HTMLImageElement =
        fixture.nativeElement.querySelector('.artist-thumbnail');
      expect(artistThumbnail.src).toContain(artist.picture_medium!);
    });
  });

  describe('Navigation', () => {
    it('should redirect you to the artist route', async () => {
      const { artist } = component;
      const artistLink: HTMLAnchorElement =
        fixture.nativeElement.querySelector('.artist-link');
      expect(artistLink.href).toContain(`/artist/${artist.id}`);
      await artistLink.click();
      fixture.detectChanges();
      expect(router.url).toContain(`/artist/${artist.id}`);
    });
  });
});
