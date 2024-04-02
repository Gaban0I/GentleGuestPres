import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-mairie',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './mairie.component.html',
  styleUrl: './mairie.component.css',
})
export class MairieComponent {}
