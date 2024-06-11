import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';
import { ContactUsBandeComponent } from '../contact-us-bande/contact-us-bande.component';

@Component({
  selector: 'app-producteur-eleveur',
  standalone: true,
  imports: [TitreBandeauComponent, ContactUsBandeComponent],
  templateUrl: './producteur-eleveur.component.html',
  styleUrl: './producteur-eleveur.component.css',
})
export class ProducteurEleveurComponent {}
