import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../../titre-bandeau/titre-bandeau.component';
import { ContactUsBandeComponent } from '../../contact-us-bande/contact-us-bande.component';

@Component({
  selector: 'app-camping',
  standalone: true,
  imports: [TitreBandeauComponent, ContactUsBandeComponent],
  templateUrl: './camping.component.html',
  styleUrl: './camping.component.css',
})
export class CampingComponent {}
