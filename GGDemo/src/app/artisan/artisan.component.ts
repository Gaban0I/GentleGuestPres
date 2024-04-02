import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-artisan',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.css',
})
export class ArtisanComponent {}
