import { Component,OnInit } from '@angular/core';

import { Quote } from "../../assets/data/quote.interface";

import Quotes from "../../assets/data/quotes";

import { QuotesPage } from "../quotes/quotes";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection : {category : string , quotes:Quote[] ,icon : string}[]
  quotesPage = QuotesPage;

  ngOnInit(){
      this.quoteCollection = Quotes;
  }
}
