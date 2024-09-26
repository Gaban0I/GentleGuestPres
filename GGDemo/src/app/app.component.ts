import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TradeComponent } from './trade/trade.component';
import { TitreBandeauComponent } from './titre-bandeau/titre-bandeau.component';
import { List_trade} from './trade/List_trade';
import { TradeArgumentsComponent } from './trade-arguments/trade-arguments.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TradeComponent,TitreBandeauComponent,TradeArgumentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GentleGuest Intro';
  trade_members = List_trade;
  selectedTradeId?:string;

  get selectedTrade(){
  return this.trade_members.find((trade_members) => trade_members.trade_id === this.selectedTradeId )!;
  }

  


  onSelectTrade(trade_id : string){
    this.selectedTradeId = trade_id;
  }
}
