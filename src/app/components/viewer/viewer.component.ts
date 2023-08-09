import { Component, Input } from '@angular/core';
import { Observable, from, of, take } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { ModalController } from '@ionic/angular';
import { ModalViewerComponent } from './modal-viewer.modal';
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent {
  @Input() items: any[] = [];
  detail$: Observable<any> = of(null);

  constructor(public apiSvc: ApiService, private modalCtrl: ModalController) {}

  openModal(detail: any): void {
    //convert promise to observable
    from(
      this.modalCtrl.create({
        component: ModalViewerComponent,
        componentProps: { detail },
      })
    )
      .pipe(take(1))
      .subscribe((modal) => {
        modal.present();
      });
  }
}
