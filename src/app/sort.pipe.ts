import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(items: any[]): any[] {
    if (!items) return [];
    return items.sort((a, b) => {
      const aValue = a.title ? a.title : a.name;
      const bValue = b.title ? b.title : b.name;
      return aValue.localeCompare(bValue);
    });
  }
}
