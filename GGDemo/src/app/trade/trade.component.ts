import { Component,input,output, computed,Input} from '@angular/core';
import {type Trade} from './trade.model';


@Component({
  selector: 'app-trade',
  standalone: true,
  imports: [],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.css'
})
export class TradeComponent{

  
  trade = input.required<Trade>();
  @Input({required : true}) selected!: boolean;

 
  selectedTrade = output<string>();

  trade_imagePath = computed(() => {
    return 'assets/trade_sucette/' + this.trade().trade_avatar;
  }); 

    onSelectTrade() {
      
      this.selectedTrade.emit(this.trade().trade_id);
    }
}