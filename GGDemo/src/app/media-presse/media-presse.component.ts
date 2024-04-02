import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-media-presse',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './media-presse.component.html',
  styleUrl: './media-presse.component.css',
})
export class MediaPresseComponent {}
