import { Component } from '@angular/core';
import { IonicPage, NavParams,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})

export class QuotePage {
  person : string;
  text   : string;

  constructor( public navParams: NavParams,
                private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose() {
    this.viewCtrl.dismiss();
  }

}
