import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../../titre-bandeau/titre-bandeau.component';
import { ContactUsBandeComponent } from '../../contact-us-bande/contact-us-bande.component';

@Component({
  selector: 'app-office-de-tourisme',
  standalone: true,
  imports: [TitreBandeauComponent, ContactUsBandeComponent],
  templateUrl: './office-de-tourisme.component.html',
  styleUrl: './office-de-tourisme.component.css',
})
export class OfficeDeTourismeComponent {}
