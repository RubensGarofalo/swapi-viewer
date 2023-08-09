import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray',
})
export class ToArrayPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string[] {
    return value as string[];
  }
}
