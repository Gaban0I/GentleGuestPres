import { Component,Input,input,Output,output, computed,signal, EventEmitter} from '@angular/core';
//import {List_trade} from './List_trade';
//const randomIndex = Math.floor(Math.random() * List_trade.length);
@Component({
  selector: 'app-trade',
  standalone: true,
  imports: [],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.css'
})
export class TradeComponent{

  //@Input{{required: true}} trade_id!: string; 
  //@Input{{required: true}} trade_avatar!: string; 
  //@Input{{required: true}} trade_name!: string; 
  trade_id=input.required<string>();
  trade_avatar=input.required<string>();
  trade_name = input.required<string>();

  //@Output() selectedTrade = new EventEmitter<string>();
  selectedTrade = output<string>();

  trade_imagePath = computed(() => {
    return 'assets/trade_sucette/' + this.trade_avatar();
  });

    
  
  //selectedTrade = signal(List_trade[randomIndex]);
    //trade_imagePath = computed(() => 'assets/trade_sucette/' + this.selectedTrade().avatar_Trade )
    //get trade_imagePath(){
    //  return 'assets/trade_sucette/' + this.selectedTrade.avatar_Trade
    //}

    onSelectTrade() {
      //const randomIndex = Math.floor(Math.random() * List_trade.length);
      //this.selectedTrade() = List_trade[randomIndex];
      this.selectedTrade.emit(this.trade_id());
    }
}