import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../../titre-bandeau/titre-bandeau.component';
import { ContactUsBandeComponent } from '../../contact-us-bande/contact-us-bande.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [TitreBandeauComponent, ContactUsBandeComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
})
export class RestaurantComponent {}
