import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTitle',
})
export class GetTitlePipe implements PipeTransform {
  private _allowedTitles = ['title', 'name'];
  transform(
    item: { [key: string]: string | string[] },
    ...args: unknown[]
  ): string {
    for (let i = 0; i < this._allowedTitles.length; i++) {
      const title = this._allowedTitles[i];
      if (item[title] != null) {
        return item[title] as string;
      }
    }
    return '';
  }
}
