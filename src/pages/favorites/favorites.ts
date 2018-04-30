import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { QuotesService } from "../../services/quotes";
import { Quote } from "../../assets/data/quote.interface";
import { QuotePage } from "../quote/quote";
import {}


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
   quotes : Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private quotesService : QuotesService,
    private modalCtrl : ModalController                            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote : Quote) {
    const modal = this.modalCtrl.create(QuotePage,quote);
    modal.present();
  }


}
