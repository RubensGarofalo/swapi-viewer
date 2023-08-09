import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideField',
})
export class HideFieldPipe implements PipeTransform {
  hideFields = ['created', 'edited', 'url', 'name'];

  transform(value: unknown, ...args: unknown[]): boolean {
    return !this.hideFields.includes(value as string);
  }
}
