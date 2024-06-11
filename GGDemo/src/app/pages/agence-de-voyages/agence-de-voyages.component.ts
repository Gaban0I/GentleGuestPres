import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../../titre-bandeau/titre-bandeau.component';
import { ContactUsBandeComponent } from '../../contact-us-bande/contact-us-bande.component';

@Component({
  selector: 'app-agence-de-voyages',
  standalone: true,
  imports: [TitreBandeauComponent, ContactUsBandeComponent],
  templateUrl: './agence-de-voyages.component.html',
  styleUrl: './agence-de-voyages.component.css',
})
export class AgenceDeVoyagesComponent {}
