import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, from, switchMap, take } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-modal-viewer',
  templateUrl: './modal-viewer.modal.html',
  styleUrls: ['./modal-viewer.modal.scss'],
})
export class ModalViewerComponent {
  @Input() detail: { [key: string]: string | string[] } | null = null;

  constructor(
    private _modalCtrl: ModalController,
    private _apiSvc: ApiService
  ) {}

  close(): Observable<boolean> {
    return from(this._modalCtrl.dismiss(null, 'close'));
  }

  openModalByUrl(url: string): void {
    this._apiSvc
      .getUrl(url)
      .pipe(
        //this gives us the possibility of not having an unsubscription
        take(1),
        switchMap((detail) => {
          //create modal
          return this._modalCtrl.create({
            component: ModalViewerComponent,
            componentProps: { detail },
          });
        })
      )
      .subscribe((modal) => {
        //show modal
        modal.present();
      });
  }
}
