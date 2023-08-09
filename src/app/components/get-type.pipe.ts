import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getType',
})
export class GetTypePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    if (Array.isArray(value)) {
      return 'array';
    } else if (typeof value === 'string') {
      return 'string';
    }
    return 'undefined';
  }
}
