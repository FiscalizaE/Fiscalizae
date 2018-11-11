import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DenuciaCidadaoPage } from '../pages/denucia-cidadao/denucia-cidadao';
import { HomeCidadaoPage } from '../pages/home-cidadao/home-cidadao';
import { DenunciaProvider } from '../providers/denuncia/denuncia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DenuciaCidadaoPage,
    HomeCidadaoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DenuciaCidadaoPage,
    HomeCidadaoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DenunciaProvider
  ]
})
export class AppModule { }
