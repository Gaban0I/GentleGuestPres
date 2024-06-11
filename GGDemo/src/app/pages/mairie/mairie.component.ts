import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';
import { ContactUsBandeComponent } from '../contact-us-bande/contact-us-bande.component';

@Component({
  selector: 'app-mairie',
  standalone: true,
  imports: [TitreBandeauComponent, ContactUsBandeComponent],
  templateUrl: './mairie.component.html',
  styleUrl: './mairie.component.css',
})
export class MairieComponent {}
