import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css',
})
export class HotelComponent {}
