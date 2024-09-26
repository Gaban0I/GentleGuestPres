import { Component,EventEmitter,Input,Output } from '@angular/core';
import { type Argument } from './argument_model';


@Component({
  selector: 'app-argument',
  standalone: true,
  imports: [],
  templateUrl: './argument.component.html',
  styleUrl: './argument.component.css'
})
export class ArgumentComponent {
  @Input({required : true}) argument!: Argument; 
  @Output() complete = new EventEmitter <string>();

  /* methode */
  onCompleteArgument() {
    this.complete.emit(this.argument.List_argument_id);
  }
}
