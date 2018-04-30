import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Toggle } from 'ionic-angular';
import {settingService} from '../../services/settingsService'


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public settingService:settingService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle : Toggle){
     this.settingService.setBackground(toggle.checked)
  }

 
}
