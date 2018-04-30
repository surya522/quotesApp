import { Component,OnInit } from '@angular/core';
import { IonicPage, NavParams,AlertController } from 'ionic-angular';
import { Quote } from "../../assets/data/quote.interface"
import { QuotesService } from '../../services/quotes'


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup : {category : string , quotes:Quote[] ,icon : string}

  constructor(private navParams: NavParams, 
    private alertCtrl : AlertController,
    private quotesService : QuotesService) {

  }
 
  //  ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data
  //   Add elvis(?) operator 
  //  }
  ngOnInit() {
    this.quoteGroup = this.navParams.data;  
  }

  onAddToFavorite(selectedQuote : Quote){
    const alert = this.alertCtrl.create({
      title      : "Add Quote",
      subTitle   : "Are you sure?",
      message    : "Are you sure , you want to exit",
     // buttons : ['OK']
      buttons    : [
        {
        text : 'Yes,go a head',
        handler : () => {
          this.quotesService.addQuoteToFavorites(selectedQuote);
        }
      },
      {
        text : 'No,I change my mind',
        role : 'Cancelled',
        handler : () => {
          console.log('Cancel');
        }
      }
    ] 
    });
    alert.present();
  }

}
