import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';
import { ContactUsBandeComponent } from '../contact-us-bande/contact-us-bande.component';

@Component({
  selector: 'app-transport-de-personnes',
  standalone: true,
  imports: [TitreBandeauComponent, ContactUsBandeComponent],
  templateUrl: './transport-de-personnes.component.html',
  styleUrl: './transport-de-personnes.component.css',
})
export class TransportDePersonnesComponent {}
