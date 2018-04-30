import { Component,ViewChild, } from '@angular/core';
import { Platform,NavController,MenuController } from 'ionic-angular';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavoritesPage } from '../pages/favorites/favorites'
import { TabsPage } from '../pages/tabs/tabs'
import { QuotePage } from '../pages/quote/quote';
import { SettingsPage } from '../pages/settings/settings'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  settingsPage = SettingsPage;
  tabsPage = TabsPage;
  @ViewChild('nav') nav : NavController

  constructor(platform: Platform,private menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }

  onLoad(page : any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

