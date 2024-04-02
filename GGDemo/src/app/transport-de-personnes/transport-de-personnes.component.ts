import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-transport-de-personnes',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './transport-de-personnes.component.html',
  styleUrl: './transport-de-personnes.component.css',
})
export class TransportDePersonnesComponent {}
