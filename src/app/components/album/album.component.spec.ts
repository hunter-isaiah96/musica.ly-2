import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EmptyComponent } from '../empty-component/empty-component.component';
import { AlbumComponent } from './album.component';
import { testAlbum } from './testing-data';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AlbumComponent,
        RouterTestingModule.withRoutes([
          { path: 'album/:id', component: EmptyComponent },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    component.album = testAlbum;

    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Rendering Album Details', () => {
    it('renders the album details', () => {
      const { album } = component;
      const albumTitle: HTMLElement =
        fixture.nativeElement.querySelector('.p-card-title');
      const albumArtist: HTMLElement =
        fixture.nativeElement.querySelector('.p-card-subtitle');
      expect(albumTitle.textContent).toContain(album.title);
      expect(albumArtist.textContent).toContain(album.artist!.name);
    });

    it('renders the albums thumbnail', () => {
      const { album } = component;
      const albumThumbnail: HTMLImageElement =
        fixture.nativeElement.querySelector('.album-thumbnail');
      expect(albumThumbnail.src).toContain(album.cover_medium);
    });
  });

  describe('Navigation', () => {
    it('goes to the album page when clicked', async () => {
      const { album } = component;
      const albumLink: HTMLAnchorElement =
        fixture.nativeElement.querySelector('.album-link');
      expect(albumLink.href).toContain(`/album/${album.id}`);
      await albumLink.click();
      fixture.detectChanges();
      expect(router.url).toContain(`/album/${album.id}`);
    });
  });
});
