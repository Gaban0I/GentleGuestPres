import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';
@Component({
  selector: 'app-magasin',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './magasin.component.html',
  styleUrl: './magasin.component.css',
})
export class MagasinComponent {}
