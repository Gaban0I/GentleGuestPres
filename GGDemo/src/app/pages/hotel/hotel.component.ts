import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../../titre-bandeau/titre-bandeau.component';
import { ContactUsBandeComponent } from '../../contact-us-bande/contact-us-bande.component';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [TitreBandeauComponent, ContactUsBandeComponent],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css',
})
export class HotelComponent {}
