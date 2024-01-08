import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackInfoComponent } from './track-info.component';
import { AudioPlayerService } from '../../services/audio-player/audio-player.service';
import { NgxsModule, Store } from '@ngxs/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { importProvidersFrom } from '@angular/core';

describe('TrackInfoComponent', () => {
  let component: TrackInfoComponent;
  let fixture: ComponentFixture<TrackInfoComponent>;
  let audioService: AudioPlayerService;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TrackInfoComponent,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [importProvidersFrom(NgxsModule.forRoot([]))],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackInfoComponent);
    component = fixture.componentInstance;
    audioService = TestBed.inject(AudioPlayerService);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
