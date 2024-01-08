import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistInfoComponent } from './artist-info.component';
import { NgxsModule, Store } from '@ngxs/store';
import { AudioPlayerState } from '../../store/audioplayer/audio-player.state';
import { RouterTestingModule } from '@angular/router/testing';
import { importProvidersFrom } from '@angular/core';
import { AudioPlayerService } from '../../services/audio-player/audio-player.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArtistInfoComponent', () => {
  let component: ArtistInfoComponent;
  let fixture: ComponentFixture<ArtistInfoComponent>;
  let audioService: AudioPlayerService;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ArtistInfoComponent,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [importProvidersFrom(NgxsModule.forRoot([]))],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistInfoComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    audioService = TestBed.inject(AudioPlayerService);

    audioService = TestBed.inject(AudioPlayerService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
