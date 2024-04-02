import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-agence-de-voyages',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './agence-de-voyages.component.html',
  styleUrl: './agence-de-voyages.component.css',
})
export class AgenceDeVoyagesComponent {}
