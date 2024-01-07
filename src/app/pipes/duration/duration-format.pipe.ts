import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormat',
})
export class DurationFormatPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value === undefined || isNaN(value)) {
      return '';
    }

    const minutes: number = Math.floor(value / 60);
    const seconds: number = value - minutes * 60;

    const formattedMinutes: string = String(minutes).padStart(2, '0');
    const formattedSeconds: string = String(Math.floor(seconds)).padStart(
      2,
      '0'
    ); // Remove decimal numbers

    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
