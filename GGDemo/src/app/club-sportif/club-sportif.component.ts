import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';

@Component({
  selector: 'app-club-sportif',
  standalone: true,
  imports: [TitreBandeauComponent],
  templateUrl: './club-sportif.component.html',
  styleUrl: './club-sportif.component.css',
})
export class ClubSportifComponent {}
