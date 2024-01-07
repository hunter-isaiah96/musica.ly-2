import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistInfoComponent } from './artist-info.component';
import { NgxsModule } from '@ngxs/store';
import { AudioPlayerState } from '../../store/audioplayer/audio-player.state';

describe('ArtistInfoComponent', () => {
  let component: ArtistInfoComponent;
  let fixture: ComponentFixture<ArtistInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistInfoComponent],
      providers: [NgxsModule.forRoot([AudioPlayerState])],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
