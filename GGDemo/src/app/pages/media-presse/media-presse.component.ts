import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';
import { ContactUsBandeComponent } from '../contact-us-bande/contact-us-bande.component';

@Component({
  selector: 'app-media-presse',
  standalone: true,
  imports: [TitreBandeauComponent, ContactUsBandeComponent],
  templateUrl: './media-presse.component.html',
  styleUrl: './media-presse.component.css',
})
export class MediaPresseComponent {}
