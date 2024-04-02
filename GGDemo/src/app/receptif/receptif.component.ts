import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-receptif',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './receptif.component.html',
  styleUrl: './receptif.component.css',
})
export class ReceptifComponent {}
