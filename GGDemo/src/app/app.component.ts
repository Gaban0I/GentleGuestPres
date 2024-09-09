import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TradeComponent } from './trade/trade.component';
import { TitreBandeauComponent } from './titre-bandeau/titre-bandeau.component';
import {List_trade} from './trade/List_trade';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TradeComponent,TitreBandeauComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GentleGuest Intro';
  trade_members = List_trade
  onSelectTrade(trade_id : string){
    console.log('selected user with id '+ trade_id);
  }
}
