import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-camping',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './camping.component.html',
  styleUrl: './camping.component.css',
})
export class CampingComponent {}
