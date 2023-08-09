import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewerComponent } from './components/viewer/viewer.component';
import { GetTypePipe } from './components/get-type.pipe';
import { GetTitlePipe } from './get-title.pipe';
import { ToArrayPipe } from './to-array.pipe';
import { HideFieldPipe } from './hide-field.pipe';
import { ModalViewerComponent } from './components/viewer/modal-viewer.modal';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    GetTypePipe,
    GetTitlePipe,
    ToArrayPipe,
    HideFieldPipe,
    ModalViewerComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
