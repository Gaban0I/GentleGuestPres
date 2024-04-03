import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';
import { ContactUsBandeComponent } from '../contact-us-bande/contact-us-bande.component';

@Component({
  selector: 'app-receptif',
  standalone: true,
  imports: [TitreBandeauComponent, ContactUsBandeComponent],
  templateUrl: './receptif.component.html',
  styleUrl: './receptif.component.css',
})
export class ReceptifComponent {}
