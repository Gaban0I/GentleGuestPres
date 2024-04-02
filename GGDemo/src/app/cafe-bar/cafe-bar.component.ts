import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-cafe-bar',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './cafe-bar.component.html',
  styleUrl: './cafe-bar.component.css',
})
export class CafeBarComponent {}
