import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
})
export class RestaurantComponent {}
