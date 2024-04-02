import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactUsBandeComponent } from '../contact-us-bande/contact-us-bande.component';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterLink, ContactUsBandeComponent, TitreBandeauComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css',
})
export class HomeComponentComponent {}
