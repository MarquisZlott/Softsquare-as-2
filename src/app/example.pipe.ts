import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipes',
  standalone: true
})
export class ExamplePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value + "test";
  }

}
