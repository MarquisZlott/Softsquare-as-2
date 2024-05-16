import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  standalone: true
})
export class ReducePipe implements PipeTransform {
  transform(value: string, maxLength: number = 50): string {
    if (!value) return '';
    return value.length <= maxLength ? value : value.substring(0, maxLength) + '...';
  }
}
