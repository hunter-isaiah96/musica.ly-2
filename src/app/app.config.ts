import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AudioPlayerState } from './store/audioplayer/audio-player.state';
import { DurationFormatPipe } from './pipes/duration/duration-format.pipe';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      NgxsModule.forRoot([AudioPlayerState]),
      NgxsReduxDevtoolsPluginModule.forRoot(),
      DurationFormatPipe
    ),
  ],
};
