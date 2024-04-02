import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-producteur-eleveur',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './producteur-eleveur.component.html',
  styleUrl: './producteur-eleveur.component.css',
})
export class ProducteurEleveurComponent {}
