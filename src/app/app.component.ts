import { Component } from '@angular/core';
import { Platform,App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = LoginPage;
  constructor(public app: App,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage: Storage) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      setTimeout(() => {
        splashScreen.hide();
      }, 1000);
    });
  }
}

