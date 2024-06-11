import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../../titre-bandeau/titre-bandeau.component';
import { ContactUsBandeComponent } from '../../contact-us-bande/contact-us-bande.component';

@Component({
  selector: 'app-cafe-bar',
  standalone: true,
  imports: [TitreBandeauComponent, ContactUsBandeComponent],
  templateUrl: './cafe-bar.component.html',
  styleUrl: './cafe-bar.component.css',
})
export class CafeBarComponent {}
