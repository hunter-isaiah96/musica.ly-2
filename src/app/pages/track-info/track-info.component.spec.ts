import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackInfoComponent } from './track-info.component';
import { AudioPlayerService } from '../../services/audio-player/audio-player.service';
import { Store } from '@ngxs/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

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
    }).compileComponents();

    fixture = TestBed.createComponent(TrackInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
