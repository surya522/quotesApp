import { Quote } from "../assets/data/quote.interface"

export class QuotesService {
    public favouriteQuotes: Quote [] = [];
    

    addQuoteToFavorites(quote : Quote){
        this.favouriteQuotes.push(quote);
        console.log(this.favouriteQuotes);
    }

    // removeQuoteFromFavorites(quote : Quote ){
    //     const position = this.favouriteQuotes.findIndex((quoteEl:Quote) => {
                
    //     });
    // }

   getFavoriteQuotes(){
       return this.favouriteQuotes.slice();
   }
}