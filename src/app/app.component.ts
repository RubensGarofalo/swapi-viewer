import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  types$ = this._apiSvc.getAllTypes();
  res$: Observable<any> = of(null);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  currentType$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private _apiSvc: ApiService) {}

  selectType(event: any): void {
    this.loading$.next(true);
    this.currentType$.next(event.detail.value);
    this.res$ = this._apiSvc.get(event.detail.value).pipe(
      tap((r) => {
        if (r != null) {
          this.loading$.next(false);
        }
      })
    );
  }
}
