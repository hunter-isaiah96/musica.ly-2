import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { DeezerAPI } from '../../services/deezer/deezer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AudioPlayerState } from '../../store/audioplayer/audio-player.state';
import { testSearchResults } from './testing-data';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TrackInfoComponent } from '../../pages/track-info/track-info.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let deezerApi: DeezerAPI;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SearchBarComponent,
        RouterTestingModule.withRoutes([
          { path: 'track/:id', component: TrackInfoComponent },
        ]),
      ], // Mock HttpClient
      providers: [
        DeezerAPI,
        provideNoopAnimations(),
        provideHttpClient(withFetch()),
        importProvidersFrom(NgxsModule.forRoot([AudioPlayerState])),
      ], // Provide the service
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    deezerApi = TestBed.inject(DeezerAPI);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Search Functionality', () => {
    let autoCompleteInput: HTMLInputElement;
    let autocompleteItems: HTMLLIElement[];
    let searchSpy: jasmine.Spy;

    beforeEach(fakeAsync(() => {
      searchSpy = spyOn(deezerApi, 'search').and.returnValue(
        Promise.resolve(testSearchResults)
      );
      autoCompleteInput = fixture.nativeElement.querySelector(
        '.p-autocomplete-input'
      );
      autoCompleteInput.value = 'Jimi';
      autoCompleteInput.dispatchEvent(new Event('input'));
      tick(300);
      autoCompleteInput.dispatchEvent(new Event('focus'));
      fixture.detectChanges();
      autocompleteItems = fixture.nativeElement.querySelectorAll(
        '.p-autocomplete-items li'
      );
      flush();
    }));

    it('fetches search results on input', fakeAsync(() => {
      expect(searchSpy).toHaveBeenCalledWith(component.songSearch);
      expect(component.searchedTracks).toEqual(testSearchResults);
      expect(autocompleteItems.length).toBeGreaterThan(0);
    }));

    it('renders a list of artists', fakeAsync(() => {
      autocompleteItems.forEach((item: HTMLElement, index: number) => {
        const { album, title, artist } = component.searchedTracks[index];
        const imgElement: HTMLImageElement = item.querySelector(
          '.search-song-thumbnail'
        )!;
        const titleElement: HTMLElement =
          item.querySelector('.search-song-title')!;
        const artistElement: HTMLElement = item.querySelector(
          '.search-song-artist'
        )!;
        expect(imgElement.src).toBe(album.cover_small);
        expect(titleElement.textContent).toContain(title);
        expect(artistElement.textContent).toContain(artist.name);
      });
    }));

    it('goes to the track page when clicked', fakeAsync(() => {
      const { id } = component.searchedTracks[0];
      autocompleteItems[0].click();
      tick();
      expect(router.url).toContain(`/track/${id}`);
    }));
  });
});
