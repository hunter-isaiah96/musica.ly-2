import { NgModule } from '@angular/core';
import { DurationFormatPipe } from './duration-format.pipe'; // Import the custom pipe

@NgModule({
  declarations: [
    DurationFormatPipe, // Add the custom pipe to the declarations array
  ],
  exports: [
    DurationFormatPipe, // Export the pipe so that it can be used in other modules
  ],
})
export class DurationFormat {}
