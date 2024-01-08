import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumInfoComponent } from './album-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AudioPlayerService } from '../../services/audio-player/audio-player.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { importProvidersFrom } from '@angular/core';

describe('AlbumInfoComponent', () => {
  let component: AlbumInfoComponent;
  let fixture: ComponentFixture<AlbumInfoComponent>;
  let audioService: AudioPlayerService;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AlbumInfoComponent,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [importProvidersFrom(NgxsModule.forRoot([]))],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumInfoComponent);
    component = fixture.componentInstance;
    audioService = TestBed.inject(AudioPlayerService);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
